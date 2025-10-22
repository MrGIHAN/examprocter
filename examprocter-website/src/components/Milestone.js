// src/components/Milestone.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const Milestone = ({ id, setActiveSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const milestones = [
    {
      date: "23 MAR 2023",
      event: "PROJECT PROPOSAL",
      description: "The first pitch to the panel focused on methodology and technologies for EXAMPROCTER",
      progress: "20%",
      status: "completed"
    },
    {
      date: "23 MAY 2023",
      event: "PROGRESS PRESENTATION 1",
      description: "Presented 50% progress of the EXAMPROCTER application to the panel",
      progress: "50%",
      status: "completed"
    },
    {
      date: "05 SEP 2023",
      event: "PROGRESS PRESENTATION 2",
      description: "Presented 90% completion of EXAMPROCTER application to the panel",
      progress: "90%",
      status: "completed"
    },
    {
      date: "09 SEP 2023",
      event: "POSTER PRESENTATION",
      description: "Comprehensive graphical view of EXAMPROCTER shown to the audience",
      progress: "95%",
      status: "completed"
    },
    {
      date: "30 OCT 2023",
      event: "FINAL ASSESSMENT",
      description: "System fully functional at 100% - ready for commercialization",
      progress: "100%",
      status: "current"
    },
    {
      date: "30 OCT 2023",
      event: "VIVA",
      description: "Individual assessment of each team member's understanding of the system",
      progress: "100%",
      status: "current"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'current': return 'primary';
      default: return 'default';
    }
  };

  return (
    <Box id={id} className="section-spacing" sx={{ bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Project <span className="gradient-text">Milestones</span>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Tracking our journey from concept to fully functional exam proctoring system
          </Typography>
        </Box>

        {/* Desktop Timeline */}
        {!isMobile && (
          <Stepper orientation="vertical" sx={{ position: 'relative' }}>
            {milestones.map((milestone, index) => (
              <Step key={index} active={true} completed={milestone.status === 'completed'}>
                <StepLabel
                  StepIconProps={{
                    sx: {
                      color: milestone.status === 'current' ? 'primary.main' : 
                            milestone.status === 'completed' ? 'success.main' : 'grey.400',
                      width: 40,
                      height: 40,
                      fontSize: '1rem',
                      fontWeight: 'bold',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ mr: 2 }}>
                      {milestone.event}
                    </Typography>
                    <Chip
                      label={milestone.progress}
                      color={getStatusColor(milestone.status)}
                      size="small"
                    />
                  </Box>
                </StepLabel>
                <StepContent>
                  <Card
                    sx={{
                      mb: 4,
                      borderRadius: 3,
                      border: `1px solid ${theme.palette.primary.light}20`,
                      boxShadow: `0 4px 20px ${theme.palette.primary.light}20`,
                    }}
                  >
                    <CardContent>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {milestone.date}
                      </Typography>
                      <Typography variant="body1">
                        {milestone.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        )}

        {/* Mobile Timeline */}
        {isMobile && (
          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: 20,
                top: 0,
                bottom: 0,
                width: 2,
                bgcolor: 'primary.light',
                opacity: 0.3,
              }}
            />
            
            {milestones.map((milestone, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  pl: 6,
                  mb: 4,
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 12,
                    top: 8,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    bgcolor: milestone.status === 'current' ? 'primary.main' : 
                            milestone.status === 'completed' ? 'success.main' : 'grey.400',
                    border: `3px solid ${theme.palette.background.paper}`,
                    zIndex: 1,
                  }}
                />

                <Card
                  sx={{
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.primary.light}20`,
                    boxShadow: `0 4px 20px ${theme.palette.primary.light}20`,
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="h6" fontWeight="bold">
                        {milestone.event}
                      </Typography>
                      <Chip
                        label={milestone.progress}
                        color={getStatusColor(milestone.status)}
                        size="small"
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {milestone.date}
                    </Typography>
                    <Typography variant="body2">
                      {milestone.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        )}

        {/* Achievement Banner */}
        <Card
          sx={{
            mt: 6,
            p: 4,
            borderRadius: 4,
            textAlign: 'center',
            background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.info.main} 100%)`,
            color: 'white',
            boxShadow: `0 8px 32px ${theme.palette.success.light}40`,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            🏆 Achievement Unlocked!
          </Typography>
          <Typography variant="h6" gutterBottom>
            RuHET 2023 - International Research Conference
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Research Paper Published in Journal of Innovations in Engineering and Technology
          </Typography>
        </Card>
      </Container>
    </Box>
  );
};

export default Milestone;