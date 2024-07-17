import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainSection: {
    width: 1,
    maxWidth: '1700px',
    height: '700px',
    m: 'auto',
    paddingBottom: '7rem',
    '@media (max-width: 600px)': {
      paddingBottom: '5rem',
      height: '500px',
    },
  },

  textSection: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: '1rem',
    '& span': {
      color: '#a855f7',
      fontSize: '15px',
      fontWeight: '500',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      paddingBottom: '0.5rem',
      '@media (max-width: 600px)': {
        fontSize: '12px',
        fontWeight: '600',
        paddingBottom: '0.8rem',
      },
    },
    '& .title': {
      color: 'white',
      fontSize: '40px',
      fontWeight: '700',
      whiteSpace: 'pre-line',
      paddingBottom: '0.7rem',
      '@media (max-width: 600px)': {
        fontSize: '24px',
      },
    },
  },

  testimonialCardContainer: {
    position: 'relative',
    width: 1,
    height: 1,
    '& .swiperContainer': {
      width: 1,
      height: 1,
      p: '0 10px',
      display: 'flex'
    },
    '& .sliderContainer': {
      width: 1,
      height: 1,
    },
    '&:hover .custom-prev, &:hover .custom-next': {
      opacity: 1,
    },
    '& .custom-prev, & .custom-next': {
      opacity: 0,
      m: '0 1rem',
      transition: 'opacity 0.3s',
    },
    '& .swiper-pagination-bullet': {
      backgroundColor: '#fff',
      width: '20px',
      height: '20px',
      m: '0 8px !important',
      '@media (max-width: 600px)': {
        width: '10px',
        height: '10px',
        m: '0 5px !important',
      },
    },
    '& .swiper-pagination-bullet-active': {
      backgroundColor: '#9333EA',
      width: '20px',
      height: '20px',
      '@media (max-width: 600px)': {
        width: '10px',
        height: '10px',
      },
    },
    '& .swiper-pagination': {
      bottom: '10px',
    },
    '@media (max-width: 600px)': {
      '& .custom-prev, & .custom-next': {
        display: 'none',
      },
    },
    '& iframe': {
      display: 'block',
      border: 'none',
      width: 1,
      height: '530px',
      borderRadius: '15px'
    }
  },

  sliderWrapper: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },

  navButtonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
    width: '100%',
    transform: 'translateY(-50%)',
    zIndex: 10,
  },

  navButton: {
    backgroundColor: '#9333EA',
    color: '#fff',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#9333EA',
    },
    '&.custom-prev': {
      left: 0,
    },
    '&.custom-next': {
      right: 0,
    },
    '@media (max-width: 600px)': {
      width: '40px',
      height: '40px',
    },
  },

  arrowIcon: {
    fontSize: '25px',
    '@media (max-width: 600px)': {
      fontSize: '20px',
    },
  },
}

export default style;