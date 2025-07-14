import SmoothScrollWrapper from "@/components/custom/smooth-scroll-wrapper/smooth-scroll-wrapper";
import { Header } from "./components/header/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <SmoothScrollWrapper>
        <Header />
        {children}
      </SmoothScrollWrapper>
    </main>
  );
}
