import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  wrapperInfo: {
    width: 1,
    height: 1,
    '& label': {
      textTransform: 'uppercase',
      color: '#a855f7',
      fontSize: '1rem',
      fontWeight: '500',
      '@media (max-width: 600px)': {
        fontSize: '0.8rem',
      },
    },
  },

  cardInfoContainer: {
    width: 1,
    padding: '20px',
    color: 'white',
    background: 'linear-gradient(#181a25, #181a25) padding-box, linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box',
    border: '2px solid transparent',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'default',
    transformOrigin: 'right bottom',
    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
    gap: '10px',
    mt: '20px',
    '@media (max-width: 600px)': {
      padding: '10px',
    },
  },

  textInfoSection: {
    display: 'flex',
    alignItems: 'center',
    width: 1,
    gap: '25px',
    '& .title': {
      color: '#94a3b8',
      fontSize: '16px',
      width: '150px',
      '@media (max-width: 600px)': {
        fontSize: '14px',
        width: '120px',
      },
    },
    '& .subtitle': {
      color: '#fff',
      fontSize: '18px',
      flexGrow: 1,
      '@media (max-width: 600px)': {
        fontSize: '16px',
      },
    },
  },

  infoSeparator: {
    width: 1,
    height: '1px',
    backgroundColor: '#2c2e36',
    margin: '10px 0',
    '@media (max-width: 600px)': {
      margin: '8px 0',
    },
  },
};

export default style;