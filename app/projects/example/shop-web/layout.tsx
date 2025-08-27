import LayoutHeader from "./layout-h";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutHeader />
      {children}
      <footer>

      </footer>
    </>
  )
}