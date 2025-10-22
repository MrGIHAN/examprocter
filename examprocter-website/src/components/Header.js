// src/components/Header.js
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  useScrollTrigger,
  Slide,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = ({ activeSection, setActiveSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileOpen(false);
    }
  };

  const navigationItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'domain', label: 'DOMAIN' },
    { id: 'milestone', label: 'MILESTONE' },
    { id: 'document', label: 'DOCUMENTS' },
    { id: 'presentations', label: 'PRESENTATIONS' },
    { id: 'team', label: 'TEAM' },
    { id: 'technology', label: 'TECHNOLOGY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const drawer = (
    <Box sx={{ 
      width: 280, 
      height: '100%',
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Drawer Header */}
      <Box sx={{ p: 3, borderBottom: `1px solid ${alpha('#fff', 0.1)}` }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                mr: 2,
              }}
            >
              E
            </Box>
            <Box
              sx={{
                fontWeight: 'bold',
                fontSize: '1.25rem',
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              EXAMPROCTER
            </Box>
          </Box>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ 
          fontSize: '0.875rem', 
          color: alpha('#fff', 0.7),
          background: alpha('#fff', 0.1),
          padding: '4px 12px',
          borderRadius: 2,
          display: 'inline-block'
        }}>
          AI-Powered Exam Proctoring
        </Box>
      </Box>

      {/* Navigation Items */}
      <List sx={{ flex: 1, p: 2 }}>
        {navigationItems.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              cursor: 'pointer',
              borderRadius: 3,
              mb: 1,
              background: activeSection === item.id ? 
                'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' : 'transparent',
              color: activeSection === item.id ? 'white' : alpha('#fff', 0.8),
              transition: 'all 0.3s ease',
              '&:hover': {
                background: alpha('#fff', 0.1),
                color: 'white',
                transform: 'translateX(8px)',
              },
            }}
          >
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: activeSection === item.id ? 600 : 400,
                fontSize: '0.9rem'
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Drawer Footer */}
      <Box sx={{ p: 3, borderTop: `1px solid ${alpha('#fff', 0.1)}` }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
            color: 'white',
            borderRadius: 3,
            py: 1.5,
            fontWeight: 600,
            '&:hover': {
              background: 'linear-gradient(135deg, #047857 0%, #0f766e 100%)',
              transform: 'translateY(-2px)',
            },
          }}
          onClick={() => scrollToSection('contact')}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            background: scrolled ? 
              `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.95)} 0%, ${alpha(theme.palette.secondary.main, 0.95)} 100%)` :
              'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            py: scrolled ? 0.5 : 1,
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, sm: 2 } }}>
              {/* Logo */}
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => scrollToSection('home')}
              >
                <Box
                  sx={{
                    width: scrolled ? 45 : 50,
                    height: scrolled ? 45 : 50,
                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    borderRadius: scrolled ? 2 : 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: scrolled ? '1.1rem' : '1.25rem',
                    mr: 2,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
                  }}
                >
                  E
                </Box>
                <Box>
                  <Box
                    sx={{
                      fontWeight: 'bold',
                      fontSize: scrolled ? '1.5rem' : '1.75rem',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                    }}
                  >
                    EXAMPROCTER
                  </Box>
                  <Box
                    sx={{
                      fontSize: '0.75rem',
                      color: alpha('#fff', 0.8),
                      fontWeight: 500,
                      letterSpacing: '0.5px',
                    }}
                  >
                    AI-Powered Proctoring
                  </Box>
                </Box>
              </Box>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {navigationItems.map((item) => (
                    <Button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        color: activeSection === item.id ? 'white' : alpha('#fff', 0.9),
                        fontWeight: activeSection === item.id ? 600 : 400,
                        borderRadius: 3,
                        px: 2.5,
                        py: 1,
                        position: 'relative',
                        fontSize: '0.9rem',
                        minWidth: 'auto',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 4,
                          left: '50%',
                          transform: activeSection === item.id ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                          width: '20px',
                          height: '2px',
                          background: 'white',
                          transition: 'transform 0.3s ease',
                        },
                        '&:hover': {
                          color: 'white',
                          background: alpha('#fff', 0.1),
                          '&::after': {
                            transform: 'translateX(-50%) scaleX(1)',
                          },
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button
                    variant="contained"
                    onClick={() => scrollToSection('contact')}
                    sx={{
                      ml: 2,
                      background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
                      color: 'white',
                      borderRadius: 3,
                      px: 3,
                      fontWeight: 600,
                      boxShadow: '0 4px 20px rgba(5, 150, 105, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #047857 0%, #0f766e 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 25px rgba(5, 150, 105, 0.4)',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              )}

              {/* Mobile menu button */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    color: 'white',
                    background: alpha('#fff', 0.1),
                    '&:hover': {
                      background: alpha('#fff', 0.2),
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            border: 'none'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;