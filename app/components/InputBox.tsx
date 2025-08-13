export default function InputBox({ children, type }: { children: React.ReactNode, type: "text" | "email" | "textarea" }) {
  return (
    <div className="input-container">
      {children}
      <input type={type} />
    </div>
  )
}