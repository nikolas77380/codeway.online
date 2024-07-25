import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    display: 'flex',
    backgroundColor: '#12141d',
    p: '3rem 18rem',
    width: 1,
    gap: '20px',
    height: 'auto',
    position: 'relative',
    '@media (max-width: 900px)': {
      p: '0 2rem',
      flexDirection: 'column',
    },
  },

  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: 1,
    height: 1,
    flex: 1,
    p: '5rem 0',
    '& label': {
      textTransform: 'uppercase',
      color: '#a855f7',
      fontSize: '1rem',
      fontWeight: '500',
      '@media (max-width: 900px)': {
        fontSize: '0.8rem',
      },
    },
    '& span': {
      color: '#fff',
      fontWeight: '600',
      fontSize: '2.5rem',
      '@media (max-width: 600px)': {
        fontSize: '1.6rem',
      },
    },
    '& p': {
      color: '#94a3b8',
      fontSize: '1.1rem',
      '@media (max-width: 600px)': {
        fontSize: '0.9rem',
      },
    },
    '@media (max-width: 600px)': {
      p: 0,
      paddingTop: '2rem',
    },
  },

  servicesContainer: {
    width: 1,
    height: 1,
    mt: '15px',
  },

  serviceSection: {
    width: 1,
    height: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    mb: '15px',
    '@media (max-width: 600px)': {
      mb: '10px',
    },
  },

  icon: {
    backgroundColor: '#1c1e2a',
    p: '20px 20px',
    '& svg': {
      color: '#9333ea',
      '@media (max-width: 600px)': {
        fontSize: '25px'
      },
    },
    '@media (max-width: 600px)': {
      width: '20px',
      height: '20px'
    },
  },

  serviceTextSection: {
    width: 1,
    height: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    '& span': {
      color: '#fff',
      fontSize: '1.3rem',
      '@media (max-width: 600px)': {
        fontSize: '1.1rem',
        fontWeight: '500'
      },
    },
    '& p': {
      color: '#94a3b8',
      fontSize: '1.1rem',
      '@media (max-width: 600px)': {
        fontSize: '0.9rem',
      },
    },
  },

  mainContent2: {
    width: 1, 
    height: 1, 
    flex: 1, 
    m: 'auto'
  },

  mainWrapper: {
    display: 'flex',
    width: '600px',
    height: '550px',
    m: 'auto',
    position: 'relative',
    zIndex: 0,
    borderRadius: '10px',
    border: '1px dashed #a855f7',
    '@media (max-width: 600px)': {
      width: 1,
      height: '300px'
    },
  },

  imageMainContainer: {
    width: 1,
    height: 1,
    position: 'absolute',
    zIndex: 10,
    bottom: '15px',
    left: '15px',
    '& img': {
      borderRadius: '10px',
      objectPosition: 'center',
      objectFit: 'cover'
    },
  },

  memberContainer: {
    width: '170px',
    height: '170px',
    borderRadius: '100%',
    backgroundColor: '#9f4aef',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease-in-out, scale 0.3s ease-in-out',
    '&:hover': {
      transform: 'rotate(15deg) scale(1.1)',
    },
    '@media (max-width: 600px)': {
      width: '130px',
      height: '130px',
    },
  },

  memberWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rotate: '-15deg',
    '& label': {
      color: '#fff',
      fontSize: '3rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      '@media (max-width: 600px)': {
        fontSize: '2rem',
      },
    },
    '& span': {
      color: '#fff',
      fontSize: '1rem',
      fontWeight: '600',
      '@media (max-width: 600px)': {
        fontSize: '0.7rem',
      },
    },
  },
};

export default style;