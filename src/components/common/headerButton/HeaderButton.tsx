"use client";

import { Button, SxProps } from "@mui/material";

interface HeaderButtonProps {
  label: string;
  sx: SxProps;
}

const HeaderButton = ({ label, sx }: HeaderButtonProps) => {
  const handleClick = () => {
    window.dispatchEvent(new Event("loadCourses"));
  };

  return (
    <Button variant="outlined" sx={sx} onClick={handleClick}>
      {label}
    </Button>
  );
};

export default HeaderButton;
