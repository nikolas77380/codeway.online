import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    backgroundImage: "url('/coursesListBlock/bg_memphis_1_.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    m: "auto",
    marginTop: '40px',
    width: "min(90%, 1280px)",
    color: "#fff",
    '& span': {
      fontWeight: '600',
    },
    '@media (max-width: 600px)': {
      '& span': {
        fontSize: '26px',
        marginTop: '0px',
      },
    },
  },

  headContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    p: "7px 15px",
    // mt: "15px",
    // ml: "15px",
    textTransform: "none",
    fontSize: "1rem",
    backgroundColor: "#A855F7",
    borderRadius: "50px",
    '@media (max-width: 600px)': {
      p: "5px 10px",
      fontSize: "0.9rem",
    },
  },
};

export default style;
