import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./hero/Hero";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface HeroData {
  title: string;
  description: string;
  Icon: IconType;
}

interface MainLayoutProps {
  heroData: HeroData;
  children: ReactNode;
}

const MainLayout = ({ heroData, children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Hero {...heroData} />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
