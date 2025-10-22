// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  alpha,
  useTheme,
  Fade,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SpeedIcon from '@mui/icons-material/Speed';

const Hero = ({ id }) => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundSlides = [
    {
      image: 'https://images.unsplash.com/photo-1582573618380-2d6d41d5d58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'AI-Powered Exam Integrity',
      subtitle: 'Revolutionizing online assessment with advanced artificial intelligence'
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Real-Time Monitoring',
      subtitle: 'Advanced proctoring solutions for secure remote examinations'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Secure & Reliable',
      subtitle: 'Ensuring academic integrity in the digital learning environment'
    }
  ];

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Advanced Security',
      description: 'Military-grade encryption and AI-powered monitoring'
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with live monitoring'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless experience'
    }
  ];

  return (
    <Box id={id} sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Slider */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          effect={'fade'}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          style={{ height: '100%' }}
        >
          {backgroundSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: 'relative',
                  height: '100vh',
                  background: `linear-gradient(135deg, ${alpha('#1e293b', 0.8)} 0%, ${alpha('#334155', 0.7)} 100%), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  alignItems: 'center',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Content Overlay */}
      <Box sx={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} lg={6}>
              <Fade in={true} timeout={1000}>
                <Box sx={{ color: 'white' }}>
                  {/* Badge */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      px: 3,
                      py: 1,
                      mb: 3,
                      borderRadius: 25,
                      background: alpha(theme.palette.primary.main, 0.2),
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: theme.palette.primary.main,
                        mr: 1,
                        animation: 'pulse 2s infinite',
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.light,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                      }}
                    >
                      Next-Gen Exam Proctoring
                    </Typography>
                  </Box>

                  {/* Main Title */}
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                      lineHeight: 1.1,
                      mb: 3,
                      background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Revolutionizing{' '}
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Exam Integrity
                    </Box>
                  </Typography>

                  {/* Subtitle */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: alpha('#fff', 0.9),
                      mb: 4,
                      fontWeight: 400,
                      lineHeight: 1.6,
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    {backgroundSlides[currentSlide].subtitle}
                  </Typography>

                  {/* CTA Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 6 }}>
                    <Button
                      variant="contained"
                      size="large"
                      className="btn-gradient"
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                      }}
                    >
                      Get Started Free
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<PlayArrowIcon />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderColor: 'white',
                        color: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          background: alpha('#fff', 0.1),
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Watch Demo
                    </Button>
                  </Box>

                  {/* Stats */}
                  <Grid container spacing={4} sx={{ maxWidth: 400 }}>
                    {[
                      { value: '99.9%', label: 'Accuracy Rate' },
                      { value: '24/7', label: 'Monitoring' },
                      { value: '50K+', label: 'Exams Proctored' },
                    ].map((stat, index) => (
                      <Grid item xs={4} key={index}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography 
                            variant="h4" 
                            fontWeight="bold" 
                            sx={{ 
                              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              mb: 0.5
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), fontSize: '0.875rem' }}>
                            {stat.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Fade>
            </Grid>

            {/* Right Content - Feature Cards */}
            <Grid item xs={12} lg={6}>
              <Fade in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
                <Grid container spacing={3}>
                  {features.map((feature, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <Card
                        className="hover-lift"
                        sx={{
                          height: '100%',
                          borderRadius: 4,
                          background: `linear-gradient(135deg, ${alpha('#ffffff', 0.1)} 0%, ${alpha('#ffffff', 0.05)} 100%)`,
                          backdropFilter: 'blur(20px)',
                          border: `1px solid ${alpha('#ffffff', 0.1)}`,
                          color: 'white',
                        }}
                      >
                        <CardContent sx={{ p: 3, textAlign: 'center' }}>
                          <Box
                            sx={{
                              color: theme.palette.primary.light,
                              mb: 2,
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: '1.1rem' }}>
                            {feature.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), lineHeight: 1.5 }}>
                            {feature.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" sx={{ mb: 1, color: alpha('#fff', 0.7) }}>
          Scroll to explore
        </Typography>
        <Box
          sx={{
            width: 2,
            height: 40,
            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
            borderRadius: 2,
            mx: 'auto',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;