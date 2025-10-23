// src/components/Milestone.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Grid,
  alpha,
  useTheme,
  Stack,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Milestone = ({ id }) => {
  const theme = useTheme();

  const milestones = [
    {
      date: '23 MAR 2023',
      title: 'Project Proposal',
      description:
        'The initial concept pitch outlining methodology and technologies for EXAMPROCTER.',
      completed: true,
    },
    {
      date: '23 MAY 2023',
      title: 'Progress Presentation 1',
      description:
        '50% project completion milestone showcasing key backend modules and TinyML integration.',
      completed: true,
    },
    {
      date: '05 SEP 2023',
      title: 'Progress Presentation 2',
      description:
        'Demonstrated 90% completion, integrating AI monitoring and live proctoring dashboard.',
      completed: true,
    },
    {
      date: '09 SEP 2023',
      title: 'Poster Presentation',
      description:
        'Comprehensive visual poster presenting system architecture and features.',
      completed: true,
    },
    {
      date: '30 OCT 2023',
      title: 'Final Assessment & Viva',
      description:
        'Full deployment and demonstration of EXAMPROCTER’s complete capabilities.',
      completed: true,
    },
  ];

  return (
    <Box
      id={id}
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
            : 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
      }}
    >
      {/* Glow Background */}
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
          filter: 'blur(100px)',
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
            Project Milestones
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.7)'
                  : 'text.secondary',
              maxWidth: 750,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Our journey from concept to a fully functional AI-powered proctoring system
          </Typography>
        </Box>

        {/* Vertical Timeline */}
        <Box sx={{ position: 'relative', pl: { xs: 2, md: 6 } }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '8px', md: '50%' },
              top: 0,
              bottom: 0,
              width: 3,
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              transform: { md: 'translateX(-50%)' },
              borderRadius: 2,
              zIndex: 0,
            }}
          />

          {/* Timeline Items */}
          {milestones.map((milestone, index) => (
            <Grid
              container
              spacing={4}
              key={index}
              sx={{
                mb: { xs: 8, md: 10 },
                alignItems: 'center',
                flexDirection:
                  index % 2 === 0 ? 'row' : { xs: 'row', md: 'row-reverse' },
              }}
            >
              {/* Marker */}
              <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 0, md: '50%' },
                    top: 0,
                    transform: {
                      xs: 'translate(-50%, -10px)',
                      md: 'translate(-50%, -10px)',
                    },
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'white',
                    borderRadius: '50%',
                    width: 50,
                    height: 50,
                    boxShadow: '0 0 0 8px rgba(99,102,241,0.1)',
                  }}
                >
                  {milestone.completed ? (
                    <CheckCircleIcon
                      sx={{ color: theme.palette.success.main, fontSize: 32 }}
                    />
                  ) : (
                    <AccessTimeIcon
                      sx={{ color: theme.palette.warning.main, fontSize: 32 }}
                    />
                  )}
                </Box>
              </Grid>

              {/* Card */}
              <Grid item xs={12} md={6}>
                <Card
                  elevation={0}
                  sx={{
                    position: 'relative',
                    p: 4,
                    borderRadius: 4,
                    background:
                      theme.palette.mode === 'dark'
                        ? alpha('#1e293b', 0.7)
                        : alpha('#ffffff', 0.95),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    backdropFilter: 'blur(10px)',
                    boxShadow:
                      theme.palette.mode === 'dark'
                        ? '0 6px 24px rgba(0,0,0,0.4)'
                        : '0 6px 28px rgba(0,0,0,0.08)',
                    transition: 'all 0.35s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow:
                        '0 12px 40px rgba(99,102,241,0.25), 0 0 0 1px rgba(255,255,255,0.05)',
                    },
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    {milestone.date}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      mb: 1,
                      mt: 1,
                      color: 'text.primary',
                    }}
                  >
                    {milestone.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.75)'
                          : 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {milestone.description}
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          ))}
        </Box>

        {/* Completion Banner */}
        <Card
          elevation={0}
          sx={{
            mt: 8,
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
            Journey Complete
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.8)'
                  : 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Each milestone represents a crucial step toward achieving our
            vision — building an AI-driven proctoring solution that redefines
            academic honesty and reliability in virtual assessments.
          </Typography>
        </Card>
      </Container>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default Milestone;
