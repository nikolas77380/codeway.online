import { Box, IconButton, Typography } from '@mui/material'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import style from '../Faq.style'

interface FaqCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  [key: string]: any;
}

const FaqCard = ({ Icon, title, description, ...rest }: FaqCardProps) => {
  return (
    <Box sx={style.faqCardWrapper} {...rest}>
      <Box sx={style.iconContainer}>
        <IconButton sx={{ cursor: 'default' }}>
          {Icon && <Icon sx={style.iconSize} />}
        </IconButton>
      </Box>
      <Box sx={style.accordionContainer}>
        <Accordion sx={style.accordion}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon sx={style.accordionArrowColor} />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={style.accordionSummary}
          >
            <Typography component='span'>
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={style.accordionDetails}>
            <Typography variant='body1' component='p'>
              {description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default FaqCard