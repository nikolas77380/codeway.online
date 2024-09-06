import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    width: "100%",
    maxWidth: "1300px",
    m: "auto",
    height: "1650px",
    position: "relative",
    mb: "50px",
    "& p": {
      m: "25px",
      "@media (max-width: 600px)": {
        m: "10px",
      },
    },
    "@media (max-width: 600px)": {
      height: "1200px",
      mt: "50px",
    },
    "@media (min-width:600px & max-width: 850px)": {
      mb: "250px",
    },
  },
  title: {
    position: "absolute",
    mt: "50px",
    p: "25px 25px 0 25px",
    mb: "100px",
    "@media (max-width: 1050px)": {
      width: "850px",
      mb: "25px",
    },
    "@media (max-width: 900px)": {
      width: "80%",
    },
    "@media (max-width: 600px)": {
      mt: "10px",
      width: "95%",
      right: "15px",
      textAlign: "end",
    },
  },
  stage1: {
    position: "absolute",
    mt: "250px",
    textAlign: "end",
    alignContent: "end",
    pt: "25px",
    mr: "150px",
    ml: "20%",
    "@media (max-width: 900px)": {
      mr: "25px",
    },
    "@media (max-width: 600px)": {
      mt: "115px",
    },
  },
  stage2: {
    position: "absolute",
    textAlign: "left",
    top: "650px",
    ml: "100px",
    mr: "20%",
    "@media (max-width: 900px)": {
      ml: "25px",
    },
    "@media (max-width: 600px)": {
      top: "400px",
    },
  },
  stage3: {
    position: "absolute",
    top: "1000px",
    textAlign: "end",
    pt: "50px",
    alignContent: "end",
    mr: "150px",
    ml: "20%",
    "@media (max-width: 900px)": {
      mr: "25px",
    },
    "@media (max-width: 600px)": {
      top: "550px",
    },
  },
  stage45_container: {
    position: "absolute",
    top: "1400px",
    display: "flex",
    gap: "25px",
    mr: "50px",
    ml: "50px",
    justifyContent: "space-between",
    "@media (max-width: 600px)": {
      mr: "5px",
      ml: "5px",
      top: "950px",
    },
    "@media (max-width: 400px)": {
      wordWrap: "break-word",
    },
  },
};

export default style;
