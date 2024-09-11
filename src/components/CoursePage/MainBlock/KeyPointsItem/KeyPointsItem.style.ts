import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  keyPointsContainer: {
    paddingTop: '3rem',
    width: 1,
    height: 1,
    display: 'flex',
    flexDirection: 'column',
    '& span': {
      color: '#fff',
      fontSize: '1.3rem',
      fontWeight: '500',
    },
    '@media (max-width: 600px)': {
      paddingTop: '2.5rem',
      '& span': {
        fontSize: '1.1rem',
      },
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
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
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
    '@media (max-width: 600px)': {
      '& p': {
        fontSize: '16px',
      },
    },
  },
};

export default style;