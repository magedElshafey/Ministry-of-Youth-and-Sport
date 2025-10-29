import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./hero/Hero";
import { ComponentType, ReactNode } from "react";
import { useMultiStepFormContext } from "../store/MultiStepFormProvider";
import { PageType } from "../components/multi-step-form/types/pages.types";
import useGetPages from "../components/multi-step-form/api/useGetPages";

interface MainLayoutProps {
  children: ReactNode;
  content: PageType
}

const MainLayout = ({ children, content }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Hero {...content}/>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

const withContext = (Component: ComponentType<{content: PageType, children: ReactNode}>) => ({children}: {children: ReactNode}) => {
  const { currentStepIndex } = useMultiStepFormContext();
  const {data: pages} = useGetPages();

  const content: PageType = pages?.data[currentStepIndex] as PageType;

  return (
    <Component content={content}>
      {children}
    </Component>
  ) 
}

export const MainLayoutWithContext = withContext(MainLayout)

export default MainLayout;
