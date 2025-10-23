// src/components/Contact.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  Stack,
  alpha,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = ({ id }) => {
  const theme = useTheme();

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
      {/* Background Glows */}
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
            Get in Touch
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
            Have questions or want to collaborate? We’d love to hear from you.
            Send us a message or connect using the contact details below.
          </Typography>
        </Box>

        {/* Contact Layout */}
        <Grid container spacing={6}>
          {/* Form */}
          <Grid item xs={12} md={7}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                p: { xs: 4, md: 6 },
                background:
                  theme.palette.mode === 'dark'
                    ? alpha('#1e293b', 0.7)
                    : alpha('#ffffff', 0.95),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                boxShadow:
                  theme.palette.mode === 'dark'
                    ? '0 6px 24px rgba(0,0,0,0.4)'
                    : '0 6px 28px rgba(0,0,0,0.08)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}
              >
                Send Us a Message
              </Typography>
              <Stack spacing={3}>
                <TextField
                  label="Full Name"
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    sx: {
                      borderRadius: 3,
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
                <TextField
                  label="Email Address"
                  fullWidth
                  variant="outlined"
                  type="email"
                  InputProps={{
                    sx: {
                      borderRadius: 3,
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  minRows={4}
                  variant="outlined"
                  InputProps={{
                    sx: {
                      borderRadius: 3,
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 1,
                    px: 5,
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '1.05rem',
                    background:
                      'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      background:
                        'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Card>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Card
              elevation={0}
              sx={{
                height: '100%',
                borderRadius: 4,
                p: { xs: 4, md: 6 },
                background:
                  theme.palette.mode === 'dark'
                    ? alpha('#1e293b', 0.7)
                    : alpha('#ffffff', 0.95),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                boxShadow:
                  theme.palette.mode === 'dark'
                    ? '0 6px 24px rgba(0,0,0,0.4)'
                    : '0 6px 28px rgba(0,0,0,0.08)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: 'text.primary',
                  textAlign: 'center',
                }}
              >
                Contact Information
              </Typography>

              <Stack spacing={3}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <EmailIcon
                    sx={{ color: theme.palette.primary.main, fontSize: 28 }}
                  />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      examprocter@gmail.com
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color:
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.7)'
                            : 'text.secondary',
                      }}
                    >
                      Official email address
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <PhoneIcon
                    sx={{ color: theme.palette.primary.main, fontSize: 28 }}
                  />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      +94 71 123 4567
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color:
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.7)'
                            : 'text.secondary',
                      }}
                    >
                      Mon–Fri, 9AM–5PM
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon
                    sx={{ color: theme.palette.primary.main, fontSize: 28 }}
                  />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      University of Ruhuna, Sri Lanka
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color:
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.7)'
                            : 'text.secondary',
                      }}
                    >
                      Faculty of Engineering
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Card>
          </Grid>
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

export default Contact;
