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
};

export default style;