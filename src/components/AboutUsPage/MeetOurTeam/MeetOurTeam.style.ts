import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    width: 1,
    height: 1,
    backgroundColor: '#12141d',
    borderBottom: '1px solid rgba(66, 68, 78, 0.8)',
    '@media (max-width: 600px)': {
      borderBottom: 'none'
    },
  },

  teamContainer: {
    width: 1,
    height: 1,
    p: '6rem 18rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    '& label': {
      textTransform: 'uppercase',
      color: '#a855f7',
      fontSize: '1rem',
      fontWeight: '500',
      '@media (max-width: 600px)': {
        fontSize: '0.8rem',
      },
    },
    '& span': {
      color: '#fff',
      fontWeight: '600',
      fontSize: '2.5rem',
      textAlign: 'center',
      maxWidth: '55%',
      mb: '30px ',
      '@media (max-width: 600px)': {
        fontSize: '1.6rem',
        maxWidth: '90%',
      },
    },
    '@media (max-width: 600px)': {
      p: '2rem 1rem',
    },
  },

  title: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    textAlign: 'center',
  },

  desc: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    textAlign: 'center',
  },

  teamCardContainer: {
    width: 1,
    height: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '15px',
    },
  },

  teamCardWrapper: {
    width: '300px', 
    height: '420px',
    borderRadius: '10px', 
    overflow: 'hidden', 
    backgroundColor: '#181a25',
    '@media (max-width: 600px)': {
      width: '390px', 
      height: '500px',
    },
  },

  cardImageContainer: {
    width: '300px',
    height: '280px',
    position: 'relative',
    '& img': {
      width: '300px',
      height: '280px',
      filter: 'grayscale(100%)',
      transition: 'filter 0.3s ease',
      '&:hover': {
        filter: 'grayscale(0%)'
      },
    },
    '@media (max-width: 600px)': {
      width: '390px', 
      height: '380px',
    },
  },

  cardTextContainer: {
    p: 2,
    width: 1,
    height: 1,
    display: 'flex',
    flexDirection: 'column',
    '& label': {
      color: '#fff',
      fontSize: '22px',
      fontWeight: '500',
      letterSpacing: '0.04em',
      textTransform: 'none',
      textAlign: 'center',
      '@media (max-width: 600px)': {
        fontSize: '18px',
      },
    },
    '& p': {
      color: '#94a3b8',
      textAlign: 'center',
      '@media (max-width: 600px)': {
        fontSize: '13px'
      },
    },
  },

  cardIconsContainer: {
    mt: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    '& svg': {
      color: '#a855f7',
      fontSize: '35px',
      '@media (max-width: 600px)': {
        fontSize: '30px',
      },
      '&:hover': {
        cursor: 'pointer',
        animation: 'jump 0.5s ease-in-out',
        transition: 'jump 0.5s ease-in-out',
        '@keyframes jump': {
          from: {
            transform: 'scale(1.3)'
          },
          to: {
            transform: 'scale(1)'
          },
        },
      },
    },
  },
};

export default style;