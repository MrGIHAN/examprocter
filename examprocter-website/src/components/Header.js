// src/components/Header.js
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
  Switch,
  Stack,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'domain', label: 'Domain' },
  { id: 'milestone', label: 'Milestones' },
  { id: 'document', label: 'Documents' },
  { id: 'presentations', label: 'Presentations' },
  { id: 'team', label: 'Team' },
  { id: 'technology', label: 'Technology' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ activeSection = 'home', toggleMode, mode = 'light' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    } else {
      // fallback to top if not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={scrolled ? 6 : 0}
        sx={{
          background: scrolled ? (mode === 'dark' ? '#071029' : 'rgba(255,255,255,0.9)') : 'transparent',
          color: scrolled ? (mode === 'dark' ? '#e6eefc' : '#0f1724') : '#fff',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'all 300ms ease',
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            {/* Brand */}
            <Box
              onClick={() => scrollToSection('home')}
              sx={{ display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                  boxShadow: '0 8px 28px rgba(99,102,241,0.18)',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  mr: 0.5,
                }}
                aria-hidden
              >
                E
              </Box>

              <Box sx={{ lineHeight: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  EXAMPROCTER
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>
                  AI-Powered
                </Typography>
              </Box>
            </Box>

            {/* Desktop Nav */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navigationItems.map((nav) => {
                  const isActive = activeSection === nav.id;
                  return (
                    <Button
                      key={nav.id}
                      onClick={() => scrollToSection(nav.id)}
                      sx={{
                        color: isActive ? theme.palette.primary.main : 'inherit',
                        background: isActive ? 'rgba(99,102,241,0.08)' : 'transparent',
                        borderRadius: 2,
                        px: 2.5,
                        py: 1,
                        fontWeight: isActive ? 800 : 600,
                        textTransform: 'none',
                        boxShadow: isActive ? '0 8px 30px rgba(99,102,241,0.08)' : 'none',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          background: 'rgba(99,102,241,0.06)',
                        },
                      }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {nav.label}
                    </Button>
                  );
                })}
                <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mr: 2 }}>
                  <IconButton
                    onClick={toggleMode}
                    aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    size="small"
                    sx={{
                      bgcolor: scrolled ? 'transparent' : 'rgba(255,255,255,0.06)',
                      color: 'inherit',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  >
                    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                  {/* visual toggle */}
                  <Switch
                    checked={mode === 'dark'}
                    onChange={toggleMode}
                    inputProps={{ 'aria-label': 'toggle theme' }}
                  />
                </Stack>

                <Button
                  variant="contained"
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    ml: 1,
                    borderRadius: 3,
                    px: 3.5,
                    py: 1.25,
                    fontWeight: 800,
                    background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                    boxShadow: '0 10px 30px rgba(99,102,241,0.28)',
                    textTransform: 'none',
                    '&:hover': { transform: 'translateY(-3px)' },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton
                  onClick={toggleMode}
                  aria-label="toggle theme"
                  sx={{ color: 'inherit' }}
                >
                  {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

                <IconButton
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.06)',
                    color: 'inherit',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: '85%', sm: 360 },
            px: 2,
            py: 3,
            background: mode === 'dark' ? '#041027' : '#ffffff',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 800,
              }}
            >
              E
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
                EXAMPROCTER
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                AI-Powered
              </Typography>
            </Box>
          </Box>

          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navigationItems.map((nav) => (
            <ListItemButton
              key={nav.id}
              onClick={() => scrollToSection(nav.id)}
              selected={activeSection === nav.id}
              sx={{
                borderRadius: 2,
                my: 0.5,
                px: 2,
              }}
            >
              <ListItemText
                primary={nav.label}
                primaryTypographyProps={{
                  fontWeight: activeSection === nav.id ? 800 : 700,
                  fontSize: '1.05rem',
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ mt: 2, px: 1 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => scrollToSection('contact')}
            sx={{
              borderRadius: 3,
              py: 1.25,
              fontWeight: 800,
              background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
              boxShadow: '0 10px 30px rgba(99,102,241,0.18)',
              textTransform: 'none',
            }}
          >
            Get Started
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              // secondary call to toggle theme for mobile convenience
              toggleMode();
            }}
            sx={{ mt: 1, borderRadius: 3, textTransform: 'none' }}
          >
            Toggle Theme
          </Button>
        </Box>

        <Box sx={{ mt: 3, textAlign: 'center', color: 'text.secondary' }}>
          <Typography variant="caption">© {new Date().getFullYear()} EXAMPROCTER</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
