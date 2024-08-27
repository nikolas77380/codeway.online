import { Box } from '@mui/material';

import Link from 'next/link';
import Image from 'next/image';

import { AnimatedText } from './AnimatedText';

import style from '../Menu.style'

const Logo = () => {
  return (
    <Box sx={style.logoWrapper}>
      <Link href="/">
        <Box sx={style.rightBracket}>
          <Image src='/assets/logo/left-50.webp' alt="" width={15} height={30} />
        </Box>
        <AnimatedText />
        <Box sx={style.leftBracket}>
          <Image src='/assets/logo/right-50.webp' alt="" width={15} height={30} />
        </Box>
      </Link>
    </Box>
  )
};

export default Logo;