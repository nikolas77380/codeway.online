import { Email, Telegram } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ContactMethod } from "./ContactUsForm";
import style from "./ContactUsForm.style";

type Props = {
  contactMethod: ContactMethod;
  handleContactMethodChange: (
    event: React.MouseEvent<HTMLElement>,
    newMethod: ContactMethod | null
  ) => void;
  isRegisterContact?: boolean;
};

const ContactMethodToggle = ({
  contactMethod,
  handleContactMethodChange,
  isRegisterContact,
}: Props) => {
  const getGroupStyle = () => ({
    ...style.toggleGroup,
    ...(isRegisterContact && { display: "none" }),
  });
  return (
    <ToggleButtonGroup
      color="primary"
      value={contactMethod}
      exclusive
      onChange={handleContactMethodChange}
      aria-label="contact method"
      sx={getGroupStyle()}
    >
      <ToggleButton
        color="primary"
        value="text"
        aria-label="text"
        sx={{
          ...(contactMethod === "text" ? style.selectedButton : style.button),
        }}
      >
        <Telegram sx={{ marginRight: "8px" }} />
        telegram
      </ToggleButton>
      <ToggleButton
        value="email"
        aria-label="email"
        sx={contactMethod === "email" ? style.selectedButton : style.button}
      >
        <Email sx={{ marginRight: "8px" }} />
        e-mail
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ContactMethodToggle;
