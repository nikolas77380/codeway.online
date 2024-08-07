import { Box, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { motion } from 'framer-motion';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

import style from '../Faq.style'

interface FaqCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  [key: string]: any;
  delay?: number;
}

const FaqCard = ({ Icon, title, delay, description, ...rest }: FaqCardProps) => {

  const MotionBox = motion(Box);

  const { ref, controls } = useScrollAnimation({
    delay: 1,
    threshold: 0.1,
  });

  return (
    <Box ref={ref}>
      <MotionBox 
        sx={style.faqCardWrapper} 
        {...rest} 
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
      >
        {Icon && <Icon sx={style.iconSize} />}
        <Accordion sx={style.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon sx={style.accordionArrowColor} />}
            sx={style.accordionSummary}
          >
            <Typography component="span">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={style.accordionDetails}>
            <Typography variant='body1' component='p'>
              {description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </MotionBox>
    </Box>
  );
};

export default FaqCard;
