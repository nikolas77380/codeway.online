import { Box } from "@mui/material"

import HeaderAboutUs from "@/components/AboutUsPage/HeaderAboutUs/HeaderAboutUs"
import WhoWeAre from "@/components/AboutUsPage/WhoWeAre/WhoWeAre"
import OurValueSection from "@/components/AboutUsPage/OurValueSection/OurValueSection"
import OurPopularClasses from "@/components/AboutUsPage/OurPopularClasses/OurPopularClasses"

import style from './AboutUs.style'

const page = () => {
  return (
    <Box sx={style.mainPageContainer}>
      <HeaderAboutUs />
      <WhoWeAre />
      <OurValueSection />
      <OurPopularClasses />
    </Box>
  )
}

export default page