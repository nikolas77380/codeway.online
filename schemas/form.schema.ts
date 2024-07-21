import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .strict(true)
    .min(3, "Name is too short!")
    .max(32, "Name is too long!")
    .required("Full name is required!"),
  email: Yup.string()
    .strict(true)
    .email("Invalid Email Address!")
    .required("Email Address is required!"),
  message: Yup.string()
    .min(3, "Message is too short!")
    .max(320, "Message is too long!")
    .required("Message is required!"),
});

export default validationSchema;
