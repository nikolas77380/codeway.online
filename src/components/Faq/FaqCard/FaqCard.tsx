import { Box, Collapse, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import MotionBox from "@/src/components/customComponents/MotionBox";
import style from "../Faq.style";

interface FaqCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  [key: string]: any;
  delay?: number;
}

const FaqCard = ({
  Icon,
  title,
  delay,
  description,
  ...rest
}: FaqCardProps) => {
  return (
    <Box>
      <MotionBox
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Box sx={style.faqCardWrapper} {...rest}>
          {Icon && <Icon sx={style.iconSize} />}
          <Accordion
            sx={style.accordion}
            TransitionComponent={Collapse}
            TransitionProps={{
              unmountOnExit: true,
              timeout: 800,
              easing: "easeInOut",
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon sx={style.accordionArrowColor} />}
              sx={style.accordionSummary}
            >
              <Typography component="span">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={style.accordionDetails}>
              <Typography variant="body1" component="p">
                {description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default FaqCard;
