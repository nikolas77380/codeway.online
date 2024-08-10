import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    display: 'flex',
    backgroundColor: '#12141d',
    p: '7rem 18rem',
    width: 1,
    height: 1,
    minHeight: '100vh',
    position: 'relative',
    '@media (max-width: 900px)': {
      p: '2rem 1rem',
      flexDirection: 'column',
    },
  },

  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    width: 1,
    height: 1,
    flex: 1,
  },

  cardInfoBlock: {
    width: '30%',
    marginLeft: '4rem',
    height: 1,
    position: 'relative'
  },

  mobileCardInfoBlock: {
    width: '100%',
    marginBottom: '1rem',
  },
};

export default style;