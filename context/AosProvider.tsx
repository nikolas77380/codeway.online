'use client';

import useAosInit from '@/hooks/useAosInit';
import React from 'react';

interface IAOSProvider {
  children: React.ReactNode;
}

const AosProvider = ({ children }: IAOSProvider) => {
  useAosInit();

  return (
    <>
      {children}
    </>
  )
};

export default AosProvider;