import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    display: 'flex',
    backgroundColor: '#12141d',
    p: '3rem 18rem',
    width: 1,
    gap: '100px',
    height: 'auto',
    position: 'relative',
    '@media (max-width: 600px)': {
      p: '0 2rem',
      flexDirection: 'column',
      gap: '40px',
    },
  },

  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: 1,
    height: 1,
    p: '5rem 0',
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
      width: '85%',
      '@media (max-width: 600px)': {
        fontSize: '1.6rem',
      },
    },
    '& p': {
      color: '#94a3b8',
      fontSize: '1.1rem',
      '@media (max-width: 600px)': {
        fontSize: '0.9rem',
      },
    },
    '@media (max-width: 600px)': {
      p: 0,
      paddingTop: '2rem',
    },
  },

  separator: {
    width: 1,
    height: '1px',
    backgroundColor: '#42444e',
  },

  servicesContainer: {
    width: 1,
    height: 1,
    mt: '15px',
    '@media (max-width: 600px)': {
      mt: '5px',
    },
  },

  mainContent2: {
    width: '80%',
    height: 1, 
    m: 'auto',
    '@media (max-width: 600px)': {
      width: 1,
      mt: '5px',
    },
  },

  mainFormContainer: {
    display: 'flex',
    flex: 1,
    width: 1,
    height: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    maxWidth: 600,
    width: 1,
    height: 1,
    bgcolor: "rgb(28,30,42)",
    borderRadius: "10px",
    boxShadow: 24,
    p: "30px",
    display: "grid",
    alignContent: "center",
    gap: "30px",
    "@media (max-width: 600px)": {
      width: 1,
    },
  },
  title: {
    fontSize: "1.5rem",
    color: "#FFF",
    fontWeight: "bold",
  },

  subtitle: {
    mt: "15px",
    color: "#94A3B8",
    fontSize: "1rem",
  },
  inputWrapper: {
    display: "flex",
    gap: "25px",
    "@media (max-width: 900px)": {
      display: "grid",
    },
  },
  input: {
    width: 1,
    borderRadius: "10px",
    height: "60px",
    color: "#fff",
    mb: "25px",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgb(18,20,29)",
      color: "#fff",
      "& fieldset": {
        borderColor: "rgb(18,20,29)",
      },
      "&:hover fieldset": {
        borderColor: "#A855F7",
      },
      "& :-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #12141D inset",
        WebkitTextFillColor: "#fff",
        borderColor: "rgb(18,20,29)",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiFormHelperText-root": {
      bgcolor: "rgb(28,30,42)",
      m: 0,
      p: "3px",
      fontSize: "0.8rem",
      display: "inline",
    },
  },
  button: {
    width: "90%",
    mt: "70px",
    ml: "5%",
    borderRadius: "10px",
    whiteSpace: "nowrap",
    fontSize: "1.2rem",
    textTransform: "none",
    color: "#fff!important",
  },
};

export default style;