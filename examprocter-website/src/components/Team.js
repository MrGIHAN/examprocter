// src/components/Team.js
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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Team = ({ id, setActiveSection }) => {
  const theme = useTheme();

  const teamMembers = [
    {
      name: "MRS. SARJEEVI CHANDRA SIRI",
      role: "Supervisor",
      initials: "SCS",
      department: "Project Guidance & Mentorship",
      color: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)"
    },
    {
      name: "MS. HANSI DE SILVA",
      role: "Co-Supervisor",
      initials: "HDS",
      department: "Research Coordination & Support",
      color: "linear-gradient(135deg, #10B981 0%, #34D399 100%)"
    },
    {
      name: "KUSHAN DIWANTHA",
      role: "Team Leader",
      initials: "KD",
      department: "Project Management & Development",
      color: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)"
    },
    {
      name: "HYVNDU PUNSITH",
      role: "Lead Developer",
      initials: "HP",
      department: "Software Architecture & Implementation",
      color: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)"
    },
    {
      name: "NETMM PRABOOHIKA",
      role: "Research Specialist",
      initials: "NP",
      department: "Data Analysis & Research Methodology",
      color: "linear-gradient(135deg, #EF4444 0%, #F87171 100%)"
    }
  ];

  return (
    <Box id={id} className="section-spacing" sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Our <span className="gradient-text">Team</span>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Meet the dedicated professionals behind EXAMPROCTER - combining expertise in technology and education
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${theme.palette.primary.light}20`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Avatar */}
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: member.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      color: 'white',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      transition: 'transform 0.3s ease',
                      '.MuiCard-root:hover &': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {member.initials}
                  </Box>
                  
                  {/* Info */}
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {member.name}
                  </Typography>
                  
                  <Chip
                    label={member.role}
                    color="primary"
                    sx={{ mb: 2, fontWeight: 'bold' }}
                  />
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {member.department}
                  </Typography>

                  {/* Social Links */}
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'primary.main',
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      <LinkedInIcon fontSize="small" />
                    </Box>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: 'secondary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'secondary.main',
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      <EmailIcon fontSize="small" />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Team Stats */}
        <Grid container spacing={3} sx={{ mt: 6 }}>
          {[
            { label: 'Team Members', value: '5+' },
            { label: 'Supervisors', value: '2' },
            { label: 'Research Hours', value: '1000+' },
            { label: 'Published Papers', value: '1' },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'primary.light',
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}20 0%, ${theme.palette.secondary.light}20 100%)`,
                  border: `1px solid ${theme.palette.primary.light}30`,
                }}
              >
                <Typography variant="h3" fontWeight="bold" color="primary.main" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;