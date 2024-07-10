import { SxProps } from "@mui/material";

const mainSection: SxProps = {
  backgroundColor: '#191b26',
  backgroundImage: 'radial-gradient(circle, #675181 0%, #191b26 35%, #191b26 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '15rem',
  paddingRight: '15rem',
  paddingTop: '5rem',
  paddingBottom: '7rem'
}

const textSection: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  '& span': {
    color: '#a855f7',
    fontSize: '15px',
    fontWeight: '500',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    paddingBottom: '0.5rem'
  },
  '& .title': {
    color: 'white',
    fontSize: '40px',
    fontWeight: '700',
    whiteSpace: 'pre-line',
    paddingBottom: '0.7rem'
  },
  '& .description': {
    color: '#94a3b8',
    fontSize: '16px',
    fontWeight: '400',
    whiteSpace: 'pre-line',
    paddingBottom: '1.5rem'
  }
}

const cardSection: SxProps = {
  display: 'flex', 
  justifyContent: 'space-between', 
  width: '100%', 
  height: '100%', 
  gap: '20px'
}

const cardContainer: SxProps = {
  backgroundColor: '#211e2f',
  display: 'flex', 
  width: '340px', 
  height: '100%', 
  borderRadius: '15px',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  transform: 'scale(1)',
  paddingBottom: '1rem',
  paddingTop: '2.5rem',
  '&:hover': {
    transform: 'scale(1.05)'
  },
}

const cardWrapper: SxProps = {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  width: '100%', 
  height: '100%',
  gap: '20px'
}

const iconWrapper: SxProps = {
  backgroundColor: '#a855f7', 
  width: '70px', 
  height: '70px', 
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& svg': {
    color: 'white',
  },
}

const cardTitle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '10px',
  '& span': {
    color: 'white'
  },
  '& p': {
    whiteSpace: 'pre-line',
    color: '#94a3b8',
    fontSize: '14px'
  }
}

export default {
  mainSection,
  textSection,
  cardSection,
  cardContainer,
  cardWrapper,
  iconWrapper,
  cardTitle
}