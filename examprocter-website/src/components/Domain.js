// src/components/Domain.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  alpha,
  useTheme,
  Fade,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Domain = ({ id }) => {
  const theme = useTheme();

  const researchAreas = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: "AI Proctoring",
      description: "Advanced artificial intelligence for real-time exam monitoring and suspicious behavior detection using computer vision and machine learning.",
      technologies: ["Computer Vision", "Machine Learning", "Behavior Analysis", "Real-time Processing"]
    },
    {
      icon: <FingerprintIcon sx={{ fontSize: 40 }} />,
      title: "Identity Verification",
      description: "Facial recognition and ID verification systems to ensure candidate authenticity and prevent impersonation.",
      technologies: ["Facial Recognition", "OCR Technology", "Biometric Verification", "Liveness Detection"]
    },
    {
      icon: <NetworkCheckIcon sx={{ fontSize: 40 }} />,
      title: "Security Monitoring",
      description: "Comprehensive device and network security monitoring during examinations to prevent cheating attempts.",
      technologies: ["Network Security", "Device Monitoring", "Screen Recording", "Browser Lockdown"]
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      title: "Analytics & Reporting",
      description: "Detailed analytics and reporting systems for exam integrity assessment and performance insights.",
      technologies: ["Data Analytics", "Real-time Reporting", "Performance Metrics", "Risk Assessment"]
    }
  ];

  return (
    <Box id={id} className="section-py" sx={{ bgcolor: 'background.paper', position: 'relative' }}>
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 50%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in={true} timeout={800}>
          <Box>
            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Research <span className="gradient-text">Domain</span>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ 
                maxWidth: 600, 
                mx: 'auto', 
                lineHeight: 1.7,
                fontSize: '1.2rem'
              }}>
                Advanced research in AI-powered exam proctoring and academic integrity preservation
              </Typography>
            </Box>

            {/* Abstract Section */}
            <Card
              sx={{
                borderRadius: 4,
                mb: 8,
                p: 5,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                }}
              />
              <CardContent sx={{ p: 0, position: 'relative', zIndex: 1 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                  Abstract & Objectives
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3, fontSize: '1.1rem' }}>
                  This research focuses on developing an advanced AI-powered exam proctoring system that ensures 
                  academic integrity in remote learning environments. The system employs cutting-edge computer vision, 
                  machine learning algorithms, and real-time monitoring to detect and prevent academic dishonesty 
                  while maintaining a seamless user experience.
                </Typography>
                <Grid container spacing={3}>
                  {[
                    "Real-time behavior analysis and anomaly detection",
                    "Multi-factor identity verification system",
                    "Comprehensive security monitoring framework",
                    "Advanced analytics and reporting dashboard"
                  ].map((objective, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            flexShrink: 0,
                            mt: 0.5,
                          }}
                        >
                          <Typography variant="body2" color="white" fontWeight="bold" fontSize="0.75rem">
                            ✓
                          </Typography>
                        </Box>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {objective}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Problem & Gap Section */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
              <Grid item xs={12} md={6}>
                <Card
                  className="hover-lift"
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    p: 4,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.primary.main, 0.08)} 100%)`,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  }}
                >
                  <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                    Research Problem
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 3 }}>
                    With the rapid shift to online education, maintaining exam integrity has become a significant 
                    challenge. Traditional proctoring methods are insufficient for remote environments, leading 
                    to increased academic dishonesty and compromised assessment validity.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Current solutions often lack comprehensive monitoring capabilities, real-time detection 
                    accuracy, and user-friendly interfaces, creating a critical gap in the market for an 
                    integrated, intelligent proctoring solution.
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card
                  className="hover-lift"
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    p: 4,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 100%)`,
                    border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                  }}
                >
                  <Typography variant="h4" fontWeight="bold" gutterBottom color="secondary.main">
                    Research Gap
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    {[
                      "Lack of integrated AI proctoring solutions with real-time analysis",
                      "Limited accuracy in existing identity verification systems",
                      "Insufficient behavioral analysis capabilities",
                      "Poor user experience and system integration"
                    ].map((gap, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: 3,
                            background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.info.main} 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 3,
                            flexShrink: 0,
                          }}
                        >
                          <Typography variant="body2" color="white" fontWeight="bold">
                            {index + 1}
                          </Typography>
                        </Box>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {gap}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </Grid>
            </Grid>

            {/* Research Areas */}
            <Box>
              <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 6 }}>
                Research Areas
              </Typography>
              <Grid container spacing={4}>
                {researchAreas.map((area, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card
                      className="hover-lift"
                      sx={{
                        height: '100%',
                        borderRadius: 4,
                        p: 4,
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                        background: `linear-gradient(135deg, ${alpha('#ffffff', 0.8)} 0%, ${alpha('#ffffff', 0.9)} 100%)`,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: 80,
                          height: 80,
                          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                          borderRadius: '0 0 0 80px',
                        }}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Box
                          sx={{
                            color: theme.palette.primary.main,
                            mr: 3,
                            flexShrink: 0,
                          }}
                        >
                          {area.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {area.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 3 }}>
                            {area.description}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {area.technologies.map((tech, techIndex) => (
                              <Chip
                                key={techIndex}
                                label={tech}
                                size="small"
                                sx={{
                                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.2)} 100%)`,
                                  color: theme.palette.primary.main,
                                  fontWeight: 500,
                                  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Domain;