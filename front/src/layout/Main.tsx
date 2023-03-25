import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type MainLayoutProps = {
  children: ReactNode;
  headerTitle: string;
};

export default function Main({ children, headerTitle }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header title={headerTitle} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
