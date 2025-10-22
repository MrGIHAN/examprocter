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
  Fade,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsIcon from '@mui/icons-material/Groups';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const About = ({ id }) => {
  const theme = useTheme();

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 48 }} />,
      title: 'AI Monitoring',
      description: 'Advanced artificial intelligence for real-time behavior analysis and suspicious activity detection',
      color: 'primary'
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 48 }} />,
      title: 'Identity Verification',
      description: 'Facial recognition and ID verification systems to ensure candidate authenticity',
      color: 'secondary'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 48 }} />,
      title: 'Device Security',
      description: 'Comprehensive device and network security monitoring during examinations',
      color: 'warning'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 48 }} />,
      title: 'Analytics Dashboard',
      description: 'Detailed reports and performance analytics for institutions',
      color: 'success'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Monitoring' },
    { number: '50K+', label: 'Exams Proctored' },
    { number: '100+', label: 'Institutions' }
  ];

  return (
    <Box id={id} className="section-py" sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
          animation: `${float} 8s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
          animation: `${float} 6s ease-in-out infinite`,
        }}
      />

      <Container maxWidth="xl">
        <Fade in={true} timeout={800}>
          <Box>
            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                fontWeight="bold"
                gutterBottom
                sx={{ mb: 2 }}
              >
                About <span className="gradient-text">ExamProcter</span>
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ 
                  maxWidth: 600, 
                  mx: 'auto', 
                  lineHeight: 1.7,
                  fontSize: '1.2rem'
                }}
              >
                We are a specialized platform designed for secure and reliable online exam proctoring, 
                ensuring academic integrity in remote learning environments.
              </Typography>
            </Box>

            {/* Stats Section */}
            <Grid container spacing={3} sx={{ mb: 8 }}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Card
                    className="hover-scale"
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 100%)`,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      fontWeight="bold" 
                      className="gradient-text"
                      gutterBottom
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontWeight="500">
                      {stat.label}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Main Content Grid */}
            <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
              <Grid item xs={12} lg={6}>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '400px',
                      borderRadius: 4,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.8,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.8)} 0%, ${alpha(theme.palette.secondary.main, 0.6)} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        p: 4,
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h4" fontWeight="bold" gutterBottom>
                        AI-Powered Proctoring
                      </Typography>
                      <Typography variant="h6" sx={{ opacity: 0.9 }}>
                        Advanced technology for academic integrity
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Box sx={{ spaceY: 4 }}>
                  <Card
                    className="hover-lift"
                    sx={{
                      p: 4,
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                      Who Are We?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      We are a specialized web application platform designed for secure online exam proctoring. 
                      Our mission is to maintain academic integrity while providing a seamless experience for 
                      educational institutions and students in the digital learning era.
                    </Typography>
                  </Card>

                  <Card
                    className="hover-lift"
                    sx={{
                      p: 4,
                      background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                      border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold" gutterBottom color="secondary.main">
                      Our Mission
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      To revolutionize online assessment through cutting-edge AI technology, ensuring 
                      fair and secure examinations for all students while providing institutions with 
                      reliable tools to maintain academic standards.
                    </Typography>
                  </Card>
                </Box>
              </Grid>
            </Grid>

            {/* Key Features */}
            <Box sx={{ mt: 8 }}>
              <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom sx={{ mb: 6 }}>
                Key Features
              </Typography>
              <Grid container spacing={4}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                      className="hover-lift"
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        p: 4,
                        border: `1px solid ${alpha(theme.palette[feature.color].main, 0.1)}`,
                        background: `linear-gradient(135deg, ${alpha(theme.palette[feature.color].main, 0.03)} 0%, ${alpha(theme.palette[feature.color].main, 0.08)} 100%)`,
                      }}
                    >
                      <Box
                        sx={{
                          color: theme.palette[feature.color].main,
                          mb: 3,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {feature.description}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Launch Info */}
            <Card
              className="hover-scale"
              sx={{
                mt: 8,
                p: 6,
                borderRadius: 4,
                textAlign: 'center',
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100%',
                  height: '200%',
                  background: `radial-gradient(circle, ${alpha('#fff', 0.1)} 0%, transparent 70%)`,
                  transform: 'rotate(-45deg)',
                }}
              />
              <Typography variant="h4" fontWeight="bold" gutterBottom position="relative">
                Launch Timeline
              </Typography>
              <Typography variant="h5" fontWeight="bold" gutterBottom position="relative">
                Application Live from November 30, 2023
              </Typography>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  px: 3,
                  py: 1.5,
                  mt: 2,
                  borderRadius: 25,
                  background: alpha('#fff', 0.2),
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#10b981',
                    mr: 1,
                    animation: 'pulse 2s infinite',
                  }}
                />
                <Typography variant="body1" fontWeight="bold">
                  🚀 Ready to transform online examinations
                </Typography>
              </Box>
            </Card>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default About;