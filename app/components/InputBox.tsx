import { Dispatch, SetStateAction } from "react";

interface InputBoxProps {
  children: React.ReactNode;
  type: "text" | "email" | "textarea";
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export default function InputBox(props: InputBoxProps) {
  const { children, type, value, setValue } = props;
  return (
    <div className="input-container">
      {children}
      {type !== "textarea" ? (
        <input type={type} onChange={(e) => setValue(e.target.value)} />
      ) : (
        <textarea value={value} onChange={(e) => {
          setValue(e.target.value);
          console.log(e.target.value);
        }}></textarea>
      )}
    </div>
  )
}