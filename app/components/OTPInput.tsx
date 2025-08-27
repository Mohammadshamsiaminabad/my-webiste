"use client";
import React, { useRef, useState } from "react";

interface OTPInputProps {
  length: number;
  onComplete?: (otp: string) => void;
}

export default function OTBInput({ length = 6, onComplete }: OTPInputProps) {
  const inputRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [values, setValues] = useState(Array(length).fill(""));
  const [count, setCount] = useState(0);

  const checkComplete = (newValues: string[]) => {
    const otp = newValues.join("");
    if (otp.length === length && !newValues.includes("")) {
      onComplete?.(otp);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value.replace(/\D/, "");
    if (!val) return;

    const newValues = [...values];
    newValues[index] = val[0];
    setValues(newValues);

    if (index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      setCount(prev => prev + 1);
    } else {
      e.target.blur();
    }

    checkComplete(newValues);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      const newValues = [...values];
      newValues[index - 1] = "";
      setValues(newValues);
      inputRefs.current[index - 1]?.focus();
    }
  }

  return (
    <div dir="ltr" className="otb-container">
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={values[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onClick={() => {
            inputRefs.current[count]?.focus();
          }}

          ref={(el) => void (inputRefs.current[index] = el)}
          className="otb-child" />
      ))}
    </div>
  )
}