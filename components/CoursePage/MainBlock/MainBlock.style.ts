import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    backgroundColor: '#12141d',
    p: '7rem 18rem',
  },

  descriptionMainContainer: {
    width: 1,
    height: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    '& span': {
      color: '#fff',
      fontSize: '1.8rem',
      fontWeight: '500'
    },
  },

  descriptionTextContainer: {
    width: '60%',
    height: 1,
    '& p': {
      color: '#94a3b8',
      fontSize: '18px'
    },
  },

  descriptionImage: {
    width: '60%',
    height: 1,
    '& img': {
      width: 1,
      height: '500px',
      borderRadius: '10px'
    },
  },

  keyPointsContainer: {
    paddingTop: '3rem',
    width: '60%',
    height: 1,
    '& span': {
      color: '#fff',
      fontSize: '1.3rem',
      fontWeight: '500',
    },
  },

  separator: {
    width: 1,
    height: '1px',
    backgroundColor: '#504c5d',
    m: '2rem 0',
  },

  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
  },

  checkTextContainer: {
    display: 'flex',
    gap: '10px',
    '& svg': {
      color: '#a855f7',
    },
    '& p': {
      color: '#94a3b8',
      fontSize: '18px'
    },
  },

  mainCourseLessonsContainer: {
    width: '60%',
    height: 1,
    display: 'flex',
    flexDirection: 'column',
    '& span': {
      color: '#fff',
      fontSize: '1.8rem',
      fontWeight: '500',
      marginBottom: '10px',
    },
  },

  accordionMainContainer: {
    width: 1,
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
  },

  accordion: {
    backgroundColor: '#1c1e2a',
    borderRadius: '10px',
    marginBottom: '10px',
    marginTop: '10px',
    overflow: 'hidden',
    '&:first-of-type': {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    '&:last-of-type': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
    '&.Mui-expanded': {
      backgroundColor: '#191b26',
      margin: 'auto',
    },
    '&.Mui-expanded:first-of-type': {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    '&.Mui-expanded:last-of-type': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
    '& span': {
      color: '#fff',
      fontSize: '1.2rem',
      fontWeight: '500',
      '@media (max-width: 600px)': {
        fontSize: '1rem',
      },
    },
  },

  accordionSummary: {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    '&.Mui-expanded': {
      backgroundColor: '#9f46f1',
    },
  },

  accordionSummaryList: {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    '&.Mui-expanded': {
      backgroundColor: '#9f46f1',
    },
    '& span': {
      fontSize: '16px',
      fontWeight: '300',
    },
  },

  accordionDetails: {
    overflow: 'hidden',
    height: 'auto',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    p: '1rem 1rem',
    '& p': {
      color: '#fff',
      fontSize: '16px',
      fontWeight: '400',
      '@media (max-width: 600px)': {
        fontSize: '14px',
      },
    },
  },

  accordionDetailsList  : {
    overflow: 'hidden',
    height: 'auto',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    p: '1rem 1rem',
    '& p': {
      color: '#fff',
      fontSize: '16px',
      fontWeight: '400',
      '@media (max-width: 600px)': {
        fontSize: '14px',
      },
    },
  },

  listLessonsContainer: {
    paddingTop: '1rem',
  },

  accordionList: {
    backgroundColor: '#9f46f1',
    borderRadius: '10px',
    marginBottom: '10px',
    overflow: 'hidden',
    '&:first-of-type': {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    '&:last-of-type': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
    '&.Mui-expanded': {
      backgroundColor: '#191b26',
      margin: 'auto',
    },
    '&.Mui-expanded:first-of-type': {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    '&.Mui-expanded:last-of-type': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
    '& span': {
      color: '#fff',
      fontSize: '1.2rem',
      fontWeight: '500',
      '@media (max-width: 600px)': {
        fontSize: '1rem',
      },
    },
  },

  accordionArrowContainer: {
    backgroundColor: '#a855f7',
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&.Mui-expanded': {
      backgroundColor: '#ffffff',
    },
  },

  accordionArrowColor: {
    color: '#fff',
    fontSize: '30px',
    '@media (max-width: 600px)': {
      fontSize: '20px',
    },
    '&.Mui-expanded': {
      color: '#a855f7', 
    },
  },
};

export default style;