'use client';

import { useEffect } from 'react';

import AOS from 'aos';

import 'aos/dist/aos.css';

const useAosInit = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
};

export default useAosInit;