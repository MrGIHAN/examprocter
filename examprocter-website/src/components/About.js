// src/components/About.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  alpha,
  useTheme,
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SpeedIcon from '@mui/icons-material/Speed';

const About = ({ id }) => {
  const theme = useTheme();

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 42 }} />,
      title: 'AI Monitoring',
      description:
        'Real-time monitoring powered by deep learning to detect suspicious behaviors during online exams.',
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 42 }} />,
      title: 'Identity Verification',
      description:
        'Advanced face recognition ensures the right candidate takes the test, maintaining integrity.',
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 42 }} />,
      title: 'Analytics Dashboard',
      description:
        'Powerful analytics dashboard for educators to review performance, logs, and integrity reports.',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 42 }} />,
      title: 'Seamless Integration',
      description:
        'Easily integrates with existing LMS systems for smooth exam management and reporting.',
    },
  ];

  return (
    <Box
      id={id}
      sx={{
        py: { xs: 10, md: 14 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient orbs for background */}
      <Box
        sx={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(
            theme.palette.primary.main,
            0.15
          )} 0%, transparent 70%)`,
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(
            theme.palette.secondary.main,
            0.15
          )} 0%, transparent 70%)`,
          filter: 'blur(120px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Heading */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.2rem' },
              mb: 2,
              background:
                'linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About ExamProcter
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.7)'
                  : 'text.secondary',
              maxWidth: 760,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            ExamProcter is a cutting-edge online proctoring platform designed to
            safeguard academic integrity. It leverages artificial intelligence
            for real-time behavior tracking, facial recognition, and secure
            identity verification during virtual exams.
          </Typography>
        </Box>

        {/* Core Values / Features */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  p: 3,
                  background:
                    theme.palette.mode === 'dark'
                      ? alpha('#1e293b', 0.7)
                      : alpha('#ffffff', 0.9),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 4px 24px rgba(0,0,0,0.4)'
                      : '0 4px 20px rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow:
                      '0 12px 32px rgba(99,102,241,0.25), 0 0 0 1px rgba(255,255,255,0.05)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      mx: 'auto',
                      mb: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      color: 'white',
                      boxShadow: `0 6px 16px ${alpha(
                        theme.palette.primary.main,
                        0.3
                      )}`,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.7)'
                          : 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <style>
        {`
          @keyframes fadeIn {
            0% {opacity: 0; transform: translateY(20px);}
            100% {opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </Box>
  );
};

export default About;
