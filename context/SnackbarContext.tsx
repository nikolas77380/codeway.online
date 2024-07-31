"use client";
import { Alert, Slide, SlideProps, Snackbar } from "@mui/material";
import { createContext, useContext, useState } from "react";

type SnackbarContextActions = {
  showSnackbar: ({ message, severity }: ISnackbarData) => void;
};

const SnackbarContext = createContext({} as SnackbarContextActions);

interface ISnackbarContextProvider {
  children: React.ReactNode;
}

interface ISnackbarData {
  message: string;
  severity: "warning" | "success" | "error" | "info";
  duration?: number;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const SnackbarProvider = ({ children }: ISnackbarContextProvider) => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<ISnackbarData>({
    message: "",
    severity: "info",
    duration: 6000,
  });
  const showSnackBar = ({ message, severity }: ISnackbarData) => {
    if (open) {
      setOpen(false);
      setTimeout(() => {
        setData({ message, severity });
        setOpen(true);
      }, 400);
    } else {
      setData({ message, severity });
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar: showSnackBar }}>
      <Snackbar
        open={open}
        autoHideDuration={data.duration}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={`${data.severity}`}>
          {data.message}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

const useSnackbar = (): SnackbarContextActions => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error("useSnackbar must be used within an SnackbarProvider");
  }

  return context;
};

export { SnackbarProvider, useSnackbar };
