// src/components/Technology.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
} from '@mui/material';

const Technology = ({ id, setActiveSection }) => {
  const theme = useTheme();

  const technologies = [
    {
      name: "Python",
      description: "Core programming language for AI and machine learning algorithms",
      icon: "🐍",
      category: "Backend & AI",
      color: "linear-gradient(135deg, #FFD43B 0%, #FFA94D 100%)"
    },
    {
      name: "OpenCV",
      description: "Computer vision library for real-time face detection and monitoring",
      icon: "👁️",
      category: "Computer Vision",
      color: "linear-gradient(135deg, #10B981 0%, #34D399 100%)"
    },
    {
      name: "React",
      description: "Frontend library for building responsive user interfaces",
      icon: "⚛️",
      category: "Web Development",
      color: "linear-gradient(135deg, #61DAFB 0%, #21A4C4 100%)"
    },
    {
      name: "Node.js",
      description: "Runtime environment for server-side JavaScript execution",
      icon: "⚡",
      category: "Backend",
      color: "linear-gradient(135deg, #68A063 0%, #3C873A 100%)"
    },
    {
      name: "TensorFlow",
      description: "Machine learning framework for behavior analysis",
      icon: "🧠",
      category: "AI/ML",
      color: "linear-gradient(135deg, #FF6B00 0%, #FF8C00 100%)"
    },
    {
      name: "MongoDB",
      description: "NoSQL database for storing exam data and analytics",
      icon: "🍃",
      category: "Database",
      color: "linear-gradient(135deg, #47A248 0%, #4DB33D 100%)"
    }
  ];

  const achievements = [
    {
      title: "RuHET 2023",
      description: "International Research Conference",
      detail: "Research Paper Published in Journal of Innovations in Engineering and Technology"
    }
  ];

  return (
    <Box id={id} className="section-spacing" sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Tools & <span className="gradient-text">Technology</span>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Cutting-edge technologies powering our advanced exam proctoring platform
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          {technologies.map((tech, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 16px 40px ${theme.palette.primary.light}20`,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 3,
                      background: tech.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      mb: 2,
                    }}
                  >
                    {tech.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {tech.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                    {tech.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                      label={tech.category}
                      size="small"
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.contrastText',
                      }}
                    />
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: 'success.main',
                        animation: 'pulse 2s infinite',
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Achievements */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            Achievements
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {achievements.map((achievement, index) => (
              <Grid item xs={12} md={8} key={index}>
                <Card
                  sx={{
                    borderRadius: 3,
                    p: 4,
                    textAlign: 'center',
                    background: `linear-gradient(135deg, ${theme.palette.success.light}20 0%, ${theme.palette.info.light}20 100%)`,
                    border: `1px solid ${theme.palette.success.light}30`,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: 'success.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    🏆
                  </Box>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {achievement.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    {achievement.description}
                  </Typography>
                  <Typography variant="body2" color="success.main" fontWeight="medium">
                    {achievement.detail}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tech Stack Banner */}
        <Card
          sx={{
            p: 4,
            borderRadius: 4,
            textAlign: 'center',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            color: 'white',
            boxShadow: `0 8px 32px ${theme.palette.primary.light}40`,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Full-Stack Solution
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Integrated technology stack providing end-to-end exam proctoring capabilities
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech.name}
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                }}
              />
            ))}
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Technology;