"use client";

import { ReactNode, useEffect, useState } from "react";

interface IDynamicProvider {
  children: ReactNode;
}

const DynamicProvider = ({ children }: IDynamicProvider) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(false);
  const [loadCourses, setLoadCourses] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY !== 0);
    };

    const checkScreenHeight = () => {
      setIsScreenLarge(window.innerHeight > 900);
    };

    const handleLoadCourses = () => {
      setLoadCourses(true);
      requestAnimationFrame(() => {
        const coursesSection = document.getElementById("courses");
        if (coursesSection) {
          coursesSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScreenHeight);
    window.addEventListener("loadCourses", handleLoadCourses);
    checkScreenHeight();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenHeight);
      window.removeEventListener("loadCourses", handleLoadCourses);
    };
  }, []);

  return (
    <>{(isScrolled || isScreenLarge || loadCourses) && <div>{children}</div>}</>
  );
};

export default DynamicProvider;
