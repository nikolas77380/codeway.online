import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mapContainer: {
    width: 1,
    height: '500px',
    filter: 'grayscale(100%)',
    transition: 'filter 0.3s ease-in-out',
    '& .map-container': {
      height: 1, 
      width: 1
    },
    '& .leaflet-control-attribution': {
      display: 'none !important'
    },
    '&:hover': {
      filter: 'grayscale(0%)'
    },
    "@media (max-width: 600px)": {
      p: '2rem 0',
    },
  },
};

export default style;