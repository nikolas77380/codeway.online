import { SxProps, TextField, Theme } from "@mui/material";
import { useTranslations } from "next-intl";

type Props = {
  formik: {
    values: { [key: string]: any };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    touched: { [key: string]: boolean };
    errors: { [key: string]: string };
  };
  name: "name" | "email" | "text" | "message";
  type?: "text" | "email";
  multiline?: boolean;
  rows?: number;
  sx?: SxProps<Theme>;
  hidden?: boolean;
};

const CustomTextField = ({
  name,
  formik,
  type = "text",
  multiline = false,
  rows = 1,
  sx = {},
  hidden = false,
}: Props) => {
  const t = useTranslations("ContactUs");
  if (hidden) return null;
  const { values, handleChange, handleBlur, touched, errors } = formik;
  return (
    <TextField
      name={name}
      label={t(`modal.${name}InputLabel`)}
      type={type}
      variant="outlined"
      sx={sx}
      multiline={multiline}
      rows={rows}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
    />
  );
};

export default CustomTextField;
