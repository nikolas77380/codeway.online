import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainSection: {
    width: 1,
    height: 1,
    maxWidth: '1700px',
    m: 'auto',
    display: 'flex',
    flexDirection: 'column',
    p: '7rem 15rem',
    '@media (max-width: 600px)': {
      p: '3rem 2rem',
    },
  },

  textSection: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: 1,
    height: 1,
    '& span': {
      color: '#a855f7',
      fontSize: '15px',
      fontWeight: '500',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      paddingBottom: '0.5rem',
      '@media (max-width: 600px)': {
        fontSize: '12px',
        fontWeight: '600',
        paddingBottom: '0.8rem',
      },
    },
    '& .title': {
      color: 'white',
      fontSize: '40px',
      fontWeight: '700',
      whiteSpace: 'pre-line',
      paddingBottom: '0.7rem',
      '@media (max-width: 600px)': {
        fontSize: '24px',
      },
    },
    '& .description': {
      color: '#94a3b8',
      fontSize: '16px',
      width: 1,
      fontWeight: '400',
      paddingBottom: '2.5rem',
      '@media (max-width: 600px)': {
        fontSize: '14px',
        padding: '0 10px',
        paddingBottom: '1.5rem',
      },
    },
  },

  faqCardContainer: {
    width: 1,
    height: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },

  faqCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 1,
    height: 'auto',
  },

  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  iconSize: {
    fontSize: '2.5rem',
    color: '#a855f7',
    '@media (max-width: 600px)': {
      fontSize: '1.7rem',
    },
  },

  accordionContainer: {
    width: 1,
    height: 'auto',
    display: 'flex',
  },

  accordion: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '& span': {
      color: '#fff',
      fontSize: '1.5rem',
      fontWeight: '500',
      '@media (max-width: 600px)': {
        fontSize: '1.2rem',
      },
    },
    '& p': {
      color: '#94a3b8',
      fontSize: '16px',
      fontWeight: '400',
      '@media (max-width: 600px)': {
        fontSize: '14px',
      },
    },
  },

  accordionArrowColor: {
    color: '#a855f7',
    fontSize: '40px',
    '@media (max-width: 600px)': {
      fontSize: '30px',
    },
  },

}

export default style