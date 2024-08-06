'use client'

import { RefObject, useEffect, useState } from 'react';

const useScrollPosition = (mainBlockRef: RefObject<HTMLDivElement>, cardInfoRef: RefObject<HTMLDivElement>) => {
  
  const [isFixed, setIsFixed] = useState(false);
  const [bottom, setBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mainBlockRef.current && cardInfoRef.current) {
        const mainBlockRect = mainBlockRef.current.getBoundingClientRect();
        const cardInfoRect = cardInfoRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;

        const mainBlockTop = mainBlockRect.top + window.scrollY;
        const mainBlockBottom = mainBlockRect.bottom + window.scrollY;
        const cardInfoHeight = cardInfoRect.height;
        
        const isWithinMainBlock = scrollY >= mainBlockTop && scrollY + viewportHeight < mainBlockBottom;
        setIsFixed(isWithinMainBlock);

        const isPastMainBlock = scrollY + viewportHeight >= mainBlockBottom;
        setBottom(isPastMainBlock);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mainBlockRef, cardInfoRef]);

  return { isFixed, bottom };
};

export default useScrollPosition;