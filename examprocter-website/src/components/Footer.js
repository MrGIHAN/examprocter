// src/components/Footer.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
        color: 'white',
        pt: 8,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${alpha('#fff', 0.05)} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${alpha('#fff', 0.03)} 0%, transparent 50%)`,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6}>
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    mr: 2,
                  }}
                >
                  E
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    EXAMPROCTER
                  </Typography>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), fontSize: '0.875rem' }}>
                    AI-Powered Proctoring
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), lineHeight: 1.6, mb: 3 }}>
                Advanced AI-powered exam proctoring solution that ensures academic integrity 
                while providing a seamless experience for both students and institutions.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[
                  { icon: <FacebookIcon />, color: '#1877F2' },
                  { icon: <TwitterIcon />, color: '#1DA1F2' },
                  { icon: <LinkedInIcon />, color: '#0A66C2' },
                  { icon: <InstagramIcon />, color: '#E4405F' },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      background: alpha('#fff', 0.1),
                      color: 'white',
                      '&:hover': {
                        background: social.color,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Home', 'About', 'Domain', 'Milestone', 'Team'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    color: alpha('#fff', 0.8),
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'white',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
              Resources
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['Documents', 'Presentations', 'Technology', 'Research', 'Support'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    color: alpha('#fff', 0.8),
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'white',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 2,
                    background: alpha('#fff', 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#60a5fa' }}>
                    📞
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), fontSize: '0.875rem' }}>
                    +94 71 539 1491
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 2,
                    background: alpha('#fff', 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#60a5fa' }}>
                    📧
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), fontSize: '0.875rem' }}>
                    examproctersupport@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 2,
                    background: alpha('#fff', 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    mt: 0.5,
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#60a5fa' }}>
                    📍
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.8), fontSize: '0.875rem', lineHeight: 1.4 }}>
                    No.73/41, Waterrapete Road
                    <br />
                    Mount Lavinia, Colombo
                    <br />
                    Sri Lanka
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: `1px solid ${alpha('#fff', 0.1)}`,
            mt: 6,
            pt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), textAlign: { xs: 'center', md: 'left' } }}>
            © 2023 ExamProcter. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  color: alpha('#fff', 0.7),
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;