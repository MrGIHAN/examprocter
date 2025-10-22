// src/components/Contact.js
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = ({ id, setActiveSection }) => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      value: '+94 71 539 1491',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: 'examprometersupport@gmail.com',
      description: 'We reply within 24 hours'
    },
    {
      icon: <LocationOnIcon />,
      title: 'Address',
      value: 'No.73/41, Waterrapete Road, Mount Lavinia',
      description: 'Colombo, Sri Lanka'
    }
  ];

  return (
    <Box id={id} className="section-spacing" sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Get In <span className="gradient-text">Touch</span>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Have questions about EXAMPROCTER? We're here to help and would love to hear from you.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                Reach out to us for any inquiries about our exam proctoring platform, 
                partnership opportunities, or technical support.
              </Typography>

              <Box sx={{ spaceY: 3 }}>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 2,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      border: `1px solid ${theme.palette.divider}`,
                      '&:hover': {
                        transform: 'translateX(8px)',
                        boxShadow: `0 8px 24px ${theme.palette.primary.light}20`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: 2,
                            bgcolor: 'primary.light',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            flexShrink: 0,
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" fontWeight="bold" gutterBottom>
                            {info.title}
                          </Typography>
                          <Typography variant="body1" fontWeight="medium" gutterBottom>
                            {info.value}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Social Links */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Follow Our Journey
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {['📘', '🐦', '💼', '📷'].map((icon, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        bgcolor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      {icon}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
                border: `1px solid ${theme.palette.primary.light}20`,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Send us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<SendIcon />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                          boxShadow: `0 8px 24px ${theme.palette.primary.light}40`,
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: `0 12px 32px ${theme.palette.primary.light}60`,
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 3, textAlign: 'center' }}>
                  We typically respond within 24 hours during business days.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;