import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    width: 1,
    height: 1,
    backgroundColor: '#161821',
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

  classesDataContainerFirst: {
    width: 1,
    height: 1,
    p: '2.5rem 0',
    gap: '6rem',
    display: 'flex',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '2rem',
      p: '1.5rem 0',
    },
  },

  classesDataWrapper: {
    width: '30%',
    height: 1,
    display: 'flex',
    flexDirection: 'column',
    '& svg': {
      color: '#fff',
      fontSize: '40px',
      strokeWidth: '0.1',
      stroke: '#000000',
      mb: '2.5rem',
      '@media (max-width: 600px)': {
        fontSize: '35px',
        mb: '1.5rem',
      },
    },
    '& span': {
      color: '#fff',
      fontSize: '1.3rem',
      mb: '0.5rem',
      '@media (max-width: 600px)': {
        fontSize: '1.1rem',
        mb: '0.3rem',
      },
    },
    '& p': {
      color: '#94a3b8',
      fontSize: '1rem',
      '@media (max-width: 600px)': {
        fontSize: '0.8rem',
      },
    },
    '@media (max-width: 600px)': {
      width: 1
    },
  },

  separatorLong: {
    width: 1,
    height: '1px',
    backgroundColor: '#42444e',
    opacity: '0.3',
  },
};

export default style;