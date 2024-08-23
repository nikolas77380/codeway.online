import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainPageContainer: {
    width: 1,
    height: 1,
  },

  courseContainer: {
    p: '3rem 18rem',
    width: 1,
    height: 'auto',
    "@media (max-width: 600px)": {
      p: 0,
    },
  },
};

export default style;