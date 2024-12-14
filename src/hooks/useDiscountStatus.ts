import { useEffect, useState } from "react";

export const useDiscountStatus = (
  discountPrice?: string,
  discountEndDateTimer?: string
) => {
  const [isDiscountActive, setIsDiscountActive] = useState(false);

  useEffect(() => {
    const checkDiscount = () => {
      if (discountPrice && discountEndDateTimer) {
        const endDate = new Date(discountEndDateTimer);
        const now = new Date();

        if (now < endDate) {
          setIsDiscountActive(true);
          localStorage.setItem("discountActive", "true");
        } else {
          setIsDiscountActive(false);
          localStorage.setItem("discountActive", "false");
        }
      }
    };

    checkDiscount();

    // Set initial state if discount status isn't in localStorage
    const discountStatus = localStorage.getItem("discountActive");
    if (discountStatus === null) {
      localStorage.setItem("discountActive", "false");
    }
  }, [discountPrice, discountEndDateTimer]);

  return isDiscountActive;
};
