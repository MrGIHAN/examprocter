// src/components/Presentations.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  alpha,
  useTheme,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import SlideshowIcon from '@mui/icons-material/Slideshow';

const Presentations = ({ id }) => {
  const theme = useTheme();

  const presentations = [
    {
      title: 'Project Proposal',
      date: '23 MAR 2023',
      description:
        'Initial project pitch focusing on methodology, research scope, and technological implementation of EXAMPROCTER.',
      status: 'Completed',
      duration: '30 mins',
    },
    {
      title: 'Progress Presentation 1',
      date: '23 MAY 2023',
      description:
        'Showcased backend design, AI model prototype, and 50% implementation progress.',
      status: 'Completed',
      duration: '45 mins',
    },
    {
      title: 'Progress Presentation 2',
      date: '05 SEP 2023',
      description:
        'Demonstrated live system with full integration of proctoring, monitoring, and dashboard modules.',
      status: 'Completed',
      duration: '60 mins',
    },
    {
      title: 'Final Presentation',
      date: '30 OCT 2023',
      description:
        'Comprehensive demonstration of final EXAMPROCTER platform, including deployment and evaluation results.',
      status: 'Completed',
      duration: '75 mins',
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
            Project Presentations
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
            Key milestones and presentation stages throughout the project journey.
          </Typography>
        </Box>

        {/* Presentations Grid */}
        <Grid container spacing={4}>
          {presentations.map((presentation, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  background:
                    theme.palette.mode === 'dark'
                      ? alpha('#1e293b', 0.7)
                      : alpha('#ffffff', 0.95),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 6px 24px rgba(0,0,0,0.4)'
                      : '0 6px 28px rgba(0,0,0,0.08)',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow:
                      '0 12px 36px rgba(99,102,241,0.25), 0 0 0 1px rgba(255,255,255,0.05)',
                  },
                }}
              >
                <CardContent>
                  <Stack spacing={2} alignItems="center" textAlign="center">
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        color: 'white',
                        boxShadow: `0 6px 20px ${alpha(
                          theme.palette.primary.main,
                          0.3
                        )}`,
                      }}
                    >
                      <SlideshowIcon sx={{ fontSize: 36 }} />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: 'text.primary' }}
                    >
                      {presentation.title}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={presentation.status}
                        color="success"
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                      <Chip
                        label={presentation.duration}
                        color="primary"
                        variant="outlined"
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    </Stack>

                    <Typography
                      variant="body2"
                      sx={{
                        color:
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.7)'
                            : 'text.secondary',
                        lineHeight: 1.7,
                        minHeight: 60,
                      }}
                    >
                      {presentation.description}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        color:
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.5)'
                            : 'text.secondary',
                      }}
                    >
                      📅 {presentation.date}
                    </Typography>

                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={1}
                      sx={{ mt: 2 }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<PlayArrowIcon />}
                        sx={{
                          borderRadius: 3,
                          textTransform: 'none',
                          px: 3,
                          py: 1,
                          fontWeight: 700,
                          background:
                            'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                          '&:hover': {
                            background:
                              'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
                          },
                        }}
                      >
                        Watch
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        sx={{
                          borderRadius: 3,
                          textTransform: 'none',
                          px: 3,
                          py: 1,
                          fontWeight: 700,
                          borderColor: 'rgba(255,255,255,0.3)',
                          '&:hover': {
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        Download
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Presentations;
