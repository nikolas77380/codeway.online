import { Box, Typography } from '@mui/material'

import FaqCard from './FaqCard/FaqCard'

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { dataFaqCard } from '@/src/mocks/FaqSection/dataFaqCard';

import style from './Faq.style'

const Faq = () => {
  return (
    <Box sx={style.mainSection}>
      <Box 
        sx={style.textSection}
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-anchor-placement="top"
        data-aos-duration='1200'
      >
        <Typography variant='h6' component='span'>
          Common Questions
        </Typography>
        <Typography variant='h3' component='p' className="title">
          Most Popular Questions
        </Typography>
        <Typography variant='body1' component='p' className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec{"\n"}
          ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
      </Box>
      <Box sx={style.faqCardContainer} data-aos-anchor-placement="top">
        {dataFaqCard.map(card =>(
          <FaqCard 
            key={card.id}
            {...card}
            Icon={HelpOutlineIcon}
            data-aos="zoom-in"
            data-aos-delay={100 * (card.id + 1)}
            data-aos-duration="1200"
          />
        ))}
      </Box>
    </Box>
  )
}

export default Faq