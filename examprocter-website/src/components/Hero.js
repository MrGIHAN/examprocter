// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Fade,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Hero = ({ id }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <Box
      id={id}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: `radial-gradient(circle at 30% 50%, rgba(99,102,241,0.25) 0%, transparent 70%),
                     radial-gradient(circle at 70% 80%, rgba(139,92,246,0.25) 0%, transparent 70%),
                     linear-gradient(135deg, #0f172a 0%, #1a1a2e 100%)`,
        color: 'white',
      }}
    >
      {/* Animated glowing orbs */}
      <Box
        sx={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          top: '-20%',
          left: '-10%',
          filter: 'blur(120px)',
          animation: 'float 10s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)',
          bottom: '-10%',
          right: '-10%',
          filter: 'blur(120px)',
          animation: 'float 12s ease-in-out infinite',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Fade in={visible} timeout={800}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Grid item xs={12} md={10} lg={8}>
              {/* Tagline */}
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  color: 'rgba(255,255,255,0.7)',
                  mb: 2,
                }}
              >
                Empowering Integrity with AI
              </Typography>

              {/* Title */}
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem' },
                  lineHeight: 1.1,
                  mb: 3,
                  letterSpacing: '-0.02em',
                  background:
                    'linear-gradient(90deg, #6366f1 0%, #8b5cf6 40%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AI-Powered Exam Proctoring System
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: 720,
                  mx: 'auto',
                  mb: 5,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                ExamProcter ensures secure, reliable online assessments using advanced AI, real-time
                monitoring, and identity verification — helping institutions maintain academic
                integrity effortlessly.
              </Typography>

              {/* Buttons */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                sx={{ mb: 8 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 5,
                    py: 1.8,
                    borderRadius: 4,
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    textTransform: 'none',
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    boxShadow:
                      '0 12px 32px rgba(99,102,241,0.35), 0 0 0 1px rgba(255,255,255,0.15)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
                    },
                    transition: 'all 0.35s ease',
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                  sx={{
                    px: 5,
                    py: 1.8,
                    borderRadius: 4,
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    textTransform: 'none',
                    borderColor: 'rgba(255,255,255,0.4)',
                    color: 'white',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.25)',
                      borderColor: 'rgba(255,255,255,0.6)',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.35s ease',
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>

              {/* Stats */}
              <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{ maxWidth: 600, mx: 'auto' }}
              >
                {[
                  { value: '99.9%', label: 'Accuracy Rate' },
                  { value: '24/7', label: 'Support' },
                  { value: '50K+', label: 'Exams Monitored' },
                ].map((stat, index) => (
                  <Grid item xs={4} key={index}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 900,
                        background:
                          'linear-gradient(135deg, #6366f1 0%, #10b981 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontWeight: 600,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      </Container>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(20px); }
          }
        `}
      </style>
    </Box>
  );
};

export default Hero;
