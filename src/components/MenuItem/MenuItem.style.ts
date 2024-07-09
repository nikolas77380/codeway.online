import { SxProps, Theme } from "@mui/material";

const mainSection: SxProps = {
  backgroundColor: '#12141d',
  color: '#fff',
  height: '6rem',
  width: '100%',
  paddingRight: { xs: '2rem', md: '15rem' },
  paddingLeft: { xs: '2rem', md: '15rem' },
  position: 'fixed'
}

const menuSection: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  width: '100%'
}

const logo: SxProps = {
  textTransform: 'uppercase',
  color: 'white',
  fontSize: '30px',
  fontWeight: '600'
}

const logoLink: SxProps = {
  textDecoration: 'none',
}

const routeSectionDesktop: SxProps = {
  display: { xs: 'none', md: 'flex' },
  gap: '4rem',
}

const textRoute: SxProps = {
  fontWeight: '500',
  textTransform: 'uppercase',
  fontSize: '18px',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  color: 'white',
  '&:hover': {
    color: '#9333EA',
  }
}

const burgerIcon: SxProps = {
  display: { xs: 'block', md: 'none' },
};

const icon: SxProps = {
  color: 'white',
  fontSize: '30px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#9333EA',
  }
};

const mobileMenu: SxProps = {
  position: 'absolute',
  top: '8rem',
  left: '0',
  width: '100%',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '2rem',
  gap: '0.2rem',
  zIndex: 1000,
  borderRadius: '10px',
  '&:hover': {
    color: '#9333EA',
  }
};

const mobileMenuItem: SxProps = {
  fontSize: '14px',
  fontWeight: '500',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: '#12141d',
  cursor: 'pointer',
  width: '100%',
  padding: '1rem 1rem',
  borderRadius: '5px',
  transition: 'color 0.3s ease',
  '&:hover': {
    backgroundColor: '#9333EA',
    color: 'white',
  },
};

export default {
  mainSection,
  menuSection,
  logo,
  logoLink,
  routeSectionDesktop,
  textRoute,
  burgerIcon,
  icon,
  mobileMenu,
  mobileMenuItem
}