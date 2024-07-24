import { useEffect } from 'react';

import AOS from 'aos';

import 'aos/dist/aos.css';

const useAosInit = () => {
  useEffect(() => {
    AOS.init();
  }, []);
};

export default useAosInit;