import { useEffect, useMemo, useState } from "react";
import { useCourse } from "@/src/context/CourseContext";

interface UseDiscountTimerProps {
  timerExpired: boolean;
  discountActive: boolean | null;
  loading: boolean;
  endDate: Date | null;
}

export const useDiscountTimer = (): UseDiscountTimerProps => {
  
  const [timerExpired, setTimerExpired] = useState(false);
  const [discountActive, setDiscountActive] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const { course } = useCourse();

  const endDate = useMemo(() => {
    return course.discountEndDateTimer
      ? new Date(course.discountEndDateTimer)
      : null;
  }, [course.discountEndDateTimer]);

  useEffect(() => {
    if (course.discountEndDateTimer) {
      const endDate = new Date(course.discountEndDateTimer);

      if (new Date() >= endDate) {
        setTimerExpired(true);
        setDiscountActive(false);
        localStorage.setItem("discountActive", "false");
      } else {
        setTimerExpired(false);
        setDiscountActive(true);
        localStorage.setItem("discountActive", "true");
      }
    } else {
      setDiscountActive(false);
      localStorage.setItem("discountActive", "false");
    }

    setLoading(false);

    const interval = setInterval(() => {
      const now = new Date();
      if (
        course.discountEndDateTimer &&
        now >= new Date(course.discountEndDateTimer)
      ) {
        setTimerExpired(true);
        setDiscountActive(false);
        localStorage.setItem("discountActive", "false");
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [course.discountEndDateTimer]);

  return { timerExpired, discountActive, loading, endDate };
};