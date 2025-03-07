import React from "react";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
