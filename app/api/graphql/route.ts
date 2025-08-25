// apollo client
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
// prisma
import { PrismaClient } from "@prisma/client";
// send email
import nodemailer from "nodemailer";
// .env
import { configDotenv } from "dotenv";
configDotenv();

// bcrypt
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();


function generateSixDigitCode() {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return (array[0] % 900000 + 100000).toString();
}

interface SendEmailProps {
  from: string;
  to: string;
  subject: string;
  message: string;
}

const SendEmail = async (props: SendEmailProps) => {
  const { from, to, subject, message } = props;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text: message,
  });
}

const typeDefs = gql`
  type res {
    code: Int!
    message: String!
  }

  type Query {
    _empty: String
  }

  type Mutation {
    sendEmail(from: String!, subject: String!, text: String!): String
    register(email: String!): res!
    authorization(email: String!, code: String!): res!
  }
`;

const resolvers = {
  Query: {

  },

  Mutation: {
    sendEmail: async (_: any, { from, subject, text }: any) => {
      await SendEmail({
        from,
        to: process.env.EMAIL_USER || "",
        subject,
        message: text,
      });
      return "ایمیل با موفقیت ارسال شد";
    },

    register: async (_: any, { email }: any) =>  {
      try {
        const code = generateSixDigitCode();
        const expireCode = await bcrypt.hash(code, 10);
        const expireTime = new Date(Date.now() + (15 * 60 * 1000));

        const user = await prisma.user.findUnique({ where: { email } });
        if (user) {
          throw new Error("شما قبلا ثبت نام کردید");
        }
      
        await prisma.authorizationuser.create({
          data: {
            email,
            password: expireCode,
            expire: expireTime
          }
        });

        await SendEmail({
          from: process.env.EMAIL_USER || "",
          to: email,
          subject: "mohammad-shamsi-dev.ir",
          message: `این رمز فقط 15 دقیقه اعتبار دارد ${code}`
        });

        return { code: 200, message: "اماده صحت سنجی" };
      } catch (err) {
        console.error(err);
        return { code: 500, message: "خطای سرور" };
      }

    },

    authorization: async (_: any, { email, code }: any) => {
      try {
        const authorizationUser = await prisma.authorizationuser.findUnique({ 
          where: {
            email
          }
        });

        if (!authorizationUser) {
          throw new Error("مشکلی پیش امد");
        }

        const isMatch = await bcrypt.compare(code, authorizationUser.password);
        if (!isMatch) {
          throw new Error("رمز یکبار مصرف نادرست است");
        }

        await prisma.user.create({
          data: {
            email
          }
        });

        await prisma.authorizationuser.delete({ where: { email }});
        return { code: 200, message: "ورود موفقیت امیز بود !" };
      } catch(err) {
        console.error(err);
      }

    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(server);

export const GET = handler;
export const POST = handler;