import { TFunction } from "i18next";
import * as Yup from "yup";

export const getValidationSchema = (t: TFunction) => {
  return Yup.object({
    name: Yup.string()
      .strict(true)
      .min(3, t("validation.nameMin"))
      .max(32, t("validation.nameMax"))
      .required(t("validation.nameRequired")),
    email: Yup.string()
      .strict(true)
      .email(t("validation.emailInvalid"))
      .required(t("validation.emailRequired")),
    message: Yup.string()
      .min(3, t("validation.messageMin"))
      .max(320, t("validation.messageMax"))
      .required(t("validation.messageRequired")),
  });
};
