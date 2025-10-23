// src/components/Technology.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  alpha,
  useTheme,
} from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import CloudIcon from '@mui/icons-material/Cloud';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const Technology = ({ id }) => {
  const theme = useTheme();

  const techStack = [
    {
      name: 'React.js',
      description: 'Frontend framework for dynamic UI and seamless user experience.',
      icon: <DeveloperModeIcon sx={{ fontSize: 36 }} />,
      color: '#61DAFB',
    },
    {
      name: 'Spring Boot',
      description: 'Backend framework ensuring secure RESTful API development.',
      icon: <StorageIcon sx={{ fontSize: 36 }} />,
      color: '#6DB33F',
    },
    {
      name: 'TensorFlow Lite',
      description: 'Lightweight ML library optimized for on-device model inference.',
      icon: <MemoryIcon sx={{ fontSize: 36 }} />,
      color: '#FF6F00',
    },
    {
      name: 'Firebase',
      description: 'Cloud platform for real-time data storage and authentication.',
      icon: <CloudIcon sx={{ fontSize: 36 }} />,
      color: '#FFCA28',
    },
    {
      name: 'Edge Impulse',
      description: 'Platform for building and deploying TinyML models on embedded devices.',
      icon: <AutoAwesomeIcon sx={{ fontSize: 36 }} />,
      color: '#8B5CF6',
    },
    {
      name: 'TinyML',
      description: 'Deploying machine learning at the edge for low-latency inference.',
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 36 }} />,
      color: '#10B981',
    },
  ];

  return (
    <Box
      id={id}
      sx={{
        py: { xs: 10, md: 14 },
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
            : 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
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
            0.12
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
            0.12
          )} 0%, transparent 70%)`,
          filter: 'blur(120px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
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
            Technology Stack
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.7)'
                  : 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            ExamProcter is powered by a robust combination of web, AI, and TinyML
            technologies — enabling efficient, secure, and intelligent online assessments.
          </Typography>
        </Box>

        {/* Technology Grid */}
        <Grid container spacing={4}>
          {techStack.map((tech, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  p: 4,
                  textAlign: 'center',
                  background:
                    theme.palette.mode === 'dark'
                      ? alpha('#1e293b', 0.7)
                      : alpha('#ffffff', 0.95),
                  border: `1px solid ${alpha(tech.color, 0.2)}`,
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 6px 24px rgba(0,0,0,0.4)'
                      : '0 6px 28px rgba(0,0,0,0.08)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 36px ${alpha(tech.color, 0.25)}`,
                  },
                }}
              >
                <Stack spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${alpha(
                        tech.color,
                        0.3
                      )}, transparent 70%)`,
                      boxShadow: `0 0 20px ${alpha(tech.color, 0.25)}`,
                      color: tech.color,
                      animation: 'float 5s ease-in-out infinite',
                    }}
                  >
                    {tech.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                    }}
                  >
                    {tech.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.7)'
                          : 'text.secondary',
                      lineHeight: 1.7,
                      maxWidth: 320,
                    }}
                  >
                    {tech.description}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </Box>
  );
};

export default Technology;
