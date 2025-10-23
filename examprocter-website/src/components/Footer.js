// src/components/Footer.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
  alpha,
  useTheme,
  Button,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EmailIcon from '@mui/icons-material/Email';

const Footer = ({ id }) => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      id={id}
      sx={{
        pt: 10,
        pb: 6,
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #111827 0%, #0f172a 100%)'
            : 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)',
        color: theme.palette.text.primary,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient Line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '80%',
          height: 2,
          background:
            'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #10b981 100%)',
          transform: 'translateX(-50%)',
          borderRadius: 2,
        }}
      />

      {/* Soft Glow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(
            theme.palette.primary.main,
            0.12
          )} 0%, transparent 70%)`,
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Brand */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              mb: 1,
              background:
                'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ExamProcter
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.6)'
                  : 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Empowering academic integrity through AI — an intelligent and ethical
            proctoring solution built for the future of e-learning.
          </Typography>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            my: 5,
            borderColor: alpha(theme.palette.text.primary, 0.1),
          }}
        />

        {/* Links and Social Icons */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          {/* Navigation Links */}
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            flexWrap="wrap"
          >
            {['Home', 'About', 'Domain', 'Milestones', 'Team', 'Contact'].map(
              (label, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    const el = document.getElementById(label.toLowerCase());
                    if (el)
                      el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                  }}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    color:
                      theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.7)'
                        : 'text.secondary',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {label}
                </Button>
              )
            )}
          </Stack>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton
              href="#"
              target="_blank"
              sx={{
                color:
                  theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.8)'
                    : 'text.primary',
                '&:hover': { color: theme.palette.primary.main },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="#"
              target="_blank"
              sx={{
                color:
                  theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.8)'
                    : 'text.primary',
                '&:hover': { color: theme.palette.primary.main },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="mailto:examprocter@gmail.com"
              sx={{
                color:
                  theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.8)'
                    : 'text.primary',
                '&:hover': { color: theme.palette.primary.main },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Stack>

        {/* Divider */}
        <Divider
          sx={{
            my: 5,
            borderColor: alpha(theme.palette.text.primary, 0.1),
          }}
        />

        {/* Bottom Row */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Typography
            variant="body2"
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.6)'
                  : 'text.secondary',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            © {currentYear} ExamProcter — All rights reserved.
          </Typography>

          {/* Scroll To Top Button */}
          <IconButton
            onClick={scrollToTop}
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.15),
              color: theme.palette.primary.main,
              '&:hover': {
                bgcolor: theme.palette.primary.main,
                color: 'white',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
            aria-label="Scroll to top"
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
