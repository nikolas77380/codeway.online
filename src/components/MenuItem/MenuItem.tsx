'use client'

import React, { useEffect, useRef, useState } from 'react'
import style from './MenuItem.style'
import { Box, IconButton, Link, Typography } from '@mui/material'
import { dataRoutes } from '@/src/mocks/MenuSection/dataRoutes'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MenuItem = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <Box sx={style.mainSection}>
      <Box sx={style.menuSection}>
        <Box>
          <Link href='/' sx={style.logoLink}>
            <Typography sx={style.logo}>
              Codeway
            </Typography>
          </Link>
        </Box>

        <Box sx={style.routeSectionDesktop}>
          {dataRoutes.map(item => (
            <Link key={item.route} href={item.route} sx={style.logoLink}>
              <Typography sx={style.textRoute}>
                {item.name}
              </Typography>
            </Link>
          ))}
        </Box>

        <IconButton onClick={toggleMenu} sx={style.burgerIcon}>
          {menuOpen ? <CloseIcon sx={style.icon} /> : <MenuIcon sx={style.icon} />}
        </IconButton>
      </Box>

      {menuOpen && (
        <Box sx={style.mobileMenu} ref={menuRef}>
          {dataRoutes.map(item => (
            <Link key={item.route} href={item.route} sx={style.mobileMenuItem}>
              {item.name}
            </Link>
          ))}
        </Box>
      )}

    </Box>
  )
}

export default MenuItem