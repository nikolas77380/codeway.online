"use client";

import { useEffect, useState } from "react";

interface IDynamicProvider {
  children: React.ReactNode;
}

const DynamicProvider = ({ children }: IDynamicProvider) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY != 0); // Get the current scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, []);

  return <>{isScrolled && <div>{children}</div>}</>;
};

export default DynamicProvider;
