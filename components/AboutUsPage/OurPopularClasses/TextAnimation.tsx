import { Box, Typography } from '@mui/material';

import { MotionTypography } from '@/utils/motionElements';
import { textAnimationItem } from '@/utils/motionVariants';

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
              <MotionTypography
                variants={textAnimationItem()}
                sx={{ display: 'inline-block' }}
                component='span'
              >
                {element}
              </MotionTypography>
            </Typography>
          ))}
        </Typography>
      ))}
    </Box>
  );
};

export default TextAnimation;