'use client';

import { createContext, useContext, ReactNode } from 'react';
import { TCourseInfo } from '@/src/mocks/mocks';

interface CourseContextProps {
  course: TCourseInfo;
};

const CourseContext = createContext<CourseContextProps | undefined>(undefined);

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};

interface CourseProviderProps {
  children: ReactNode;
  course: TCourseInfo;
};

export const CourseProvider = ({ children, course }: CourseProviderProps) => {
  return (
    <CourseContext.Provider value={{ course }}>
      {children}
    </CourseContext.Provider>
  );
};