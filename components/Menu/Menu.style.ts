import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainSection: {
    maxWidth: "1700px",
    m: "auto",
    backgroundColor: "#12141d",
    color: "#fff",
    height: "6rem",
    width: "100%",
    p: "0 20px",
    "@media (max-width: 600px)": {
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
    "@media (min-width: 601px) and (max-width: 1024px)": {
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
  },
  menuSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 1,
    width: 1,
  },

  logo: {
    textTransform: "uppercase",
    color: "white",
    fontSize: "30px",
    fontWeight: "600",
  },
  logoLink: {
    textDecoration: "none",
  },

  routeSectionDesktop: {
    display: "flex",
    gap: "4rem",
    "@media (max-width: 600px)": {
      display: "none",
    },
    "@media (min-width: 601px) and (max-width: 1024px)": {
      display: "none",
    },
  },

  textRoute: {
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: "18px",
    cursor: "pointer",
    transition: "color 0.3s ease",
    color: "white",
    "&:hover": {
      color: "#9333EA",
    },
  },

  burgerIcon: {
    display: "none",
    "@media (max-width: 600px)": {
      display: "block",
    },
    "@media (min-width: 601px) and (max-width: 1024px)": {
      display: "block",
    },
  },

  icon: {
    color: "white",
    fontSize: "30px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#9333EA",
    },
  },

  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  mobileMenu: {
    position: "absolute",
    top: "8rem",
    left: "0",
    width: 1,
    backgroundColor: '#fff',
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    padding: "2rem",
    gap: "0.2rem",
    zIndex: 1000,
    borderRadius: "10px",
    "&:hover": {
      color: "#9333EA",
    },
  },
  mobileMenuItem: {
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "uppercase",
    textDecoration: "none",
    color: "#000000",
    cursor: "pointer",
    width: "100%",
    padding: "1rem 1rem",
    borderRadius: "5px",
    transition: "color 0.3s ease",
    "&:hover": {
      backgroundColor: "#9333EA",
      color: "white",
    },
  },
};

export default style;
