import { Box, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import style from "../Faq.style";

interface FaqCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  [key: string]: any;
}

const FaqCard = ({ Icon, title, description, ...rest }: FaqCardProps) => {
  return (
    <Box sx={style.faqCardWrapper} {...rest}>
      {Icon && <Icon sx={style.iconSize} />}
      <Accordion sx={style.accordion}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={style.accordionArrowColor} />}
          sx={style.accordionSummary}
        >
          <Typography component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={style.accordionDetails}>
          <Typography variant="h6" component="p">
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FaqCard;
