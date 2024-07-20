import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
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
    width: 1,
    height: 1,
    '& p': {
      color: '#94a3b8',
      fontSize: '18px'
    },
  },
};

export default style;