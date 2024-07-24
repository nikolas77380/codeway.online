import { Box } from "@mui/material"

import HeaderAboutUs from "@/components/AboutUsPage/HeaderAboutUs/HeaderAboutUs"
import WhoWeAre from "@/components/AboutUsPage/WhoWeAre/WhoWeAre"

import style from './AboutUs.style'

const page = () => {
  return (
    <Box sx={style.mainPageContainer}>
      <HeaderAboutUs />
      <WhoWeAre />
    </Box>
  )
}

export default page