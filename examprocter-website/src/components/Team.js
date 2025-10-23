// src/components/Team.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  IconButton,
  Stack,
  alpha,
  useTheme,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';

const Team = ({ id }) => {
  const theme = useTheme();

  const teamMembers = [
    {
      name: 'Mrs. Sarjeevi Chandra Siri',
      role: 'Supervisor',
      initials: 'SCS',
      color: '#8B5CF6',
      linkedin: '#',
      email: 'mailto:sarjeevi@examprocter.com',
    },
    {
      name: 'Ms. Hansi De Silva',
      role: 'Co-Supervisor',
      initials: 'HDS',
      color: '#10B981',
      linkedin: '#',
      email: 'mailto:hansi@examprocter.com',
    },
    {
      name: 'Kushan Diwantha',
      role: 'Team Leader',
      initials: 'KD',
      color: '#3B82F6',
      linkedin: '#',
      email: 'mailto:kushan@examprocter.com',
    },
    {
      name: 'Hyvndu Punsith',
      role: 'Lead Developer',
      initials: 'HP',
      color: '#F59E0B',
      linkedin: '#',
      email: 'mailto:hyvndu@examprocter.com',
    },
    {
      name: 'Netmm Prabhoohika',
      role: 'Research Specialist',
      initials: 'NP',
      color: '#EF4444',
      linkedin: '#',
      email: 'mailto:netmm@examprocter.com',
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
      {/* Glow background */}
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
            Our Team
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
            Meet the dedicated professionals behind ExamProcter — experts blending AI innovation
            with academic integrity to create smarter online examination systems.
          </Typography>
        </Box>

        {/* Team Grid */}
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  p: 3,
                  background:
                    theme.palette.mode === 'dark'
                      ? alpha('#1e293b', 0.7)
                      : alpha('#ffffff', 0.95),
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  textAlign: 'center',
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 6px 24px rgba(0,0,0,0.4)'
                      : '0 6px 28px rgba(0,0,0,0.08)',
                  transition: 'all 0.35s ease',
                  backdropFilter: 'blur(8px)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow:
                      '0 12px 36px rgba(99,102,241,0.25), 0 0 0 1px rgba(255,255,255,0.05)',
                  },
                }}
              >
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
                    mb: 2,
                    color: 'white',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    boxShadow: `0 10px 25px ${alpha(member.color, 0.4)}`,
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                >
                  {member.initials || <PersonIcon />}
                </Box>

                {/* Name & Role */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 0.5,
                    color: 'text.primary',
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {member.role}
                </Typography>

                {/* Social Icons */}
                <Stack direction="row" spacing={1} justifyContent="center">
                  <IconButton
                    href={member.linkedin}
                    target="_blank"
                    sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.9)'
                          : theme.palette.primary.main,
                      '&:hover': {
                        bgcolor: theme.palette.primary.main,
                        color: 'white',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    href={member.email}
                    sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.9)'
                          : theme.palette.primary.main,
                      '&:hover': {
                        bgcolor: theme.palette.primary.main,
                        color: 'white',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <EmailIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Card>
            </Grid>
          ))}
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

export default Team;
