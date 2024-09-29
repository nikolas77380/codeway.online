"use client";

import { useEffect, useState } from "react";

interface IDynamicProvider {
  children: React.ReactNode;
}

const DynamicProvider = ({ children }: IDynamicProvider) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };

    const checkScreenHeight = () => {
      setIsScreenLarge(window.innerHeight > 900);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScreenHeight);
    checkScreenHeight();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenHeight);
    };
  }, []);

  return <>{(isScrolled || isScreenLarge) && <div>{children}</div>}</>;
};

export default DynamicProvider;
