// src/components/Domain.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  alpha,
  useTheme,
  Divider,
  Stack,
} from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Domain = ({ id }) => {
  const theme = useTheme();

  const problems = [
    'Maintaining academic integrity during online assessments.',
    'Inadequate monitoring capabilities in current proctoring systems.',
    'Identity fraud and multi-device cheating.',
    'Poor scalability and lack of real-time behavioral analysis.',
  ];

  const gaps = [
    'No comprehensive integration of AI and IoT for exam monitoring.',
    'Limited emotion and attention analysis in existing systems.',
    'Lack of mental-state detection and context awareness.',
    'Absence of on-device TinyML inference for edge privacy.',
  ];

  return (
    <Box
      id={id}
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
            : 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glowing background orbs */}
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
        {/* Header */}
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
            Research Domain
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.7)'
                  : 'text.secondary',
              maxWidth: 850,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Our research explores the intersection of Artificial Intelligence,
            TinyML, and behavioral analytics to enhance online exam integrity
            through real-time monitoring and emotion-aware proctoring systems.
          </Typography>
        </Box>

        {/* Abstract Section */}
        <Card
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            mb: 10,
            borderRadius: 4,
            background:
              theme.palette.mode === 'dark'
                ? alpha('#1e293b', 0.7)
                : alpha('#ffffff', 0.9),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            backdropFilter: 'blur(8px)',
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 4px 20px rgba(0,0,0,0.4)'
                : '0 4px 20px rgba(0,0,0,0.06)',
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2} mb={3}>
            <ScienceIcon
              sx={{ fontSize: 36, color: theme.palette.primary.main }}
            />
            <Typography variant="h4" fontWeight={800}>
              Abstract
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.8)'
                  : 'text.secondary',
              lineHeight: 1.9,
              fontSize: '1.05rem',
            }}
          >
            This study introduces <strong>ExamProcter</strong>, an AI-powered
            online proctoring solution that ensures academic integrity in remote
            learning environments. It utilizes machine learning, computer
            vision, and TinyML for on-device inference, enabling low-latency,
            privacy-respecting, real-time monitoring. The system provides
            multi-modal data analysis—combining facial recognition, eye-gaze
            estimation, and device behavior patterns—to identify anomalies and
            improve the reliability of online examinations.
          </Typography>
        </Card>

        {/* Problem & Research Gap Section */}
        <Grid container spacing={6} mb={10}>
          {/* Research Problem */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                p: 5,
                borderRadius: 4,
                height: '100%',
                background:
                  theme.palette.mode === 'dark'
                    ? alpha('#1e293b', 0.6)
                    : alpha('#ffffff', 0.95),
                border: `1px solid ${alpha(theme.palette.error.main, 0.1)}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow:
                    '0 12px 32px rgba(239,68,68,0.15), 0 0 0 1px rgba(255,255,255,0.05)',
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <WarningAmberIcon
                  sx={{ fontSize: 32, color: theme.palette.error.main }}
                />
                <Typography variant="h5" fontWeight={800}>
                  Research Problem
                </Typography>
              </Stack>
              <Divider sx={{ mb: 2, borderColor: alpha('#fff', 0.1) }} />
              {problems.map((text, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color:
                      theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.7)'
                        : 'text.secondary',
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&::before': {
                      content: '"•"',
                      color: theme.palette.error.main,
                      fontWeight: 700,
                    },
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Card>
          </Grid>

          {/* Research Gap */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                p: 5,
                borderRadius: 4,
                height: '100%',
                background:
                  theme.palette.mode === 'dark'
                    ? alpha('#1e293b', 0.6)
                    : alpha('#ffffff', 0.95),
                border: `1px solid ${alpha(theme.palette.warning.main, 0.1)}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow:
                    '0 12px 32px rgba(245,158,11,0.15), 0 0 0 1px rgba(255,255,255,0.05)',
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <PsychologyIcon
                  sx={{ fontSize: 32, color: theme.palette.warning.main }}
                />
                <Typography variant="h5" fontWeight={800}>
                  Research Gap
                </Typography>
              </Stack>
              <Divider sx={{ mb: 2, borderColor: alpha('#fff', 0.1) }} />
              {gaps.map((text, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color:
                      theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.7)'
                        : 'text.secondary',
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&::before': {
                      content: '"•"',
                      color: theme.palette.warning.main,
                      fontWeight: 700,
                    },
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Card>
          </Grid>
        </Grid>

        {/* Tech Stack Highlight */}
        <Card
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background:
              theme.palette.mode === 'dark'
                ? alpha('#1e293b', 0.7)
                : alpha('#ffffff', 0.9),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            textAlign: 'center',
            backdropFilter: 'blur(8px)',
          }}
        >
          <LightbulbIcon
            sx={{
              fontSize: 40,
              color: theme.palette.primary.main,
              mb: 2,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 2,
              background:
                'linear-gradient(90deg, #6366f1 0%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technologies & Frameworks
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.8)'
                  : 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Our research utilizes <strong>TensorFlow Lite</strong> and{' '}
            <strong>Edge Impulse</strong> for on-device TinyML model
            deployment. The system is developed using{' '}
            <strong>React.js</strong> (frontend),{' '}
            <strong>Spring Boot</strong> (backend), and{' '}
            <strong>Firebase</strong> for secure storage and real-time
            monitoring.
          </Typography>
        </Card>
      </Container>
    </Box>
  );
};

export default Domain;
