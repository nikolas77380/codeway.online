import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    width: 1,
    height: 1,
    backgroundColor: '#161821',
    borderBottom: '1px solid rgba(66, 68, 78, 0.2)',
  },
  popularClassesContainer: {
    width: 1,
    height: 1,
    p: '4rem 18rem',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 600px)': {
      p: '2rem 2rem',
    },
    '& span': {
      color: '#fff',
      fontWeight: '600',
      fontSize: '2.5rem',
      mb: '20px',
      '@media (max-width: 600px)': {
        fontSize: '1.6rem',
      },
    },
  },

  separatorShort: {
    width: '50px',
    height: '1px',
    backgroundColor: '#42444e',
  },
  
  classesRow: {
    display: 'flex',
    mt: '2rem',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '1rem',
      p: 0,
      mt: 0,
    },
  },
  classesDataWrapper: {
    flex: '1 1 30%',
    display: 'flex',
    flexDirection: 'column',
    py: '10px',
    position: 'relative',
    borderRight: '1px solid rgba(66, 68, 78, 0.2)',
    '&:hover .MuiBox-root': {
      opacity: 1,
    },
    '@media (max-width: 600px)': {
      width: 1,
    },
    '&:hover .highlightBar': {
      height: '32px',
      width: '8px',
      backgroundColor: '#a855f7',
    },
    '&:hover .gradientOverlay': {
      opacity: 1,
    },
    '&:hover .title-hover': {
      transform: 'translateX(0.5rem)',
    },
  },

  leftBorder: {
    borderLeft: '1px solid rgba(66, 68, 78, 0.2)',
  },

  bottomBorder: {
    borderBottom: '1px solid rgba(66, 68, 78, 0.3)',
  },

  iconContainer: {
    mb: '1.5rem',
    px: '10px',
    color: '#fff',
    '& svg': {
      fontSize: '40px', 
      stroke: '#000000',
      ml: '20px',
      '@media (max-width: 600px)': {
        fontSize: '35px',
        mb: 0,
        ml: '20px',
        mt: '10px'
      },
    },
  },

  titleContainer: {
    position: 'relative',
    zIndex: 10,
    px: '10px',
    '& span': {
      ml: '20px',
      color: '#fff',
      fontSize: '1.3rem',
      transition: 'all 0.2s',
      display: 'inline-block',
      '@media (max-width: 600px)': {
        fontSize: '1.1rem',
        mb: '0.3rem',
      },
    },
  },

  highlightBar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    height: '24px',
    width: '4px',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgb(64 64 64)',
    transition: 'height 0.2s, background-color 0.2s',
    transformOrigin: 'center'
  },

  description: {
    px: '10px',
    color: '#94a3b8',
    fontSize: '1rem',
    ml: '20px',
    '@media (max-width: 600px)': {
      fontSize: '0.8rem',
    },
  },

  gradientOverlay: {
    opacity: 0,
    transition: 'opacity 0.2s',
    position: 'absolute',
    inset: 0,
    height: '100%',
    width: '100%',
    pointerEvents: 'none',
  },
  gradientTop: {
    background: 'linear-gradient(to top, rgba(31, 41, 55, 0.5) 0%, transparent 100%)',
  },
  gradientBottom: {
    background: 'linear-gradient(to bottom, rgba(31, 41, 55) 0%, transparent 100%)',
  },
};

export default style;