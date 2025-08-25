import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client"

export const SEND_EMAIL = gql`
  mutation SendEmail($from: String!, $subject: String!, $text: String!) {
    sendEmail(from: $from, subject: $subject, text: $text)
  }
`;
export const REGISTER = gql`
  mutation Register($email: String!) {
    register(email: $email) {
      code
      message
    }
  }
`;
export const AUTHORIZATION = gql`
  mutation Authorization($email: String!, $code: String!) {
    register(email: $email, code: $code) {
      code
      message
    }
  }
`;


const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export default client;