import { Box, Typography } from '@mui/material';

import { textAnimationItem } from '@/utils/motionVariants';

import MotionBox from '@/components/customComponents/MotionBox';

interface TextAnimationProps {
  text: string;
  className?: string;
}

const TextAnimation = ({ text, className }: TextAnimationProps) => {
  
  const words = text.split(' ').map(word => {
    const characters = word.split('');
    characters.push('\u00A0');
    return characters;
  });

  return (
    <Box className={className}>
      {words.map((word, index) => (
        <Typography component='span' key={index} sx={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {word.map((element, charIndex) => (
            <Typography key={charIndex} sx={{ display: 'inline-block' }} component='span'>
              <MotionBox variants={textAnimationItem()}>
                <Typography sx={{ display: 'inline-block' }} component='span'>
                  {element}
                </Typography>
              </MotionBox>
            </Typography>
          ))}
        </Typography>
      ))}
    </Box>
  );
};

export default TextAnimation;