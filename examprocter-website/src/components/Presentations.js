// src/components/Presentations.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';

const Presentations = ({ id, setActiveSection }) => {
  const theme = useTheme();

  const presentations = [
    {
      title: "PROJECT PROPOSAL",
      date: "23 MAR 2023",
      description: "Initial project pitch focusing on methodology and technologies",
      status: "Completed",
      duration: "30 mins"
    },
    {
      title: "PROGRESS PRESENTATION 1",
      date: "23 MAY 2023",
      description: "50% progress presentation to the evaluation panel",
      status: "Completed",
      duration: "45 mins"
    },
    {
      title: "PROGRESS PRESENTATION 2",
      date: "05 SEP 2023",
      description: "90% completion presentation demonstrating core features",
      status: "Completed",
      duration: "60 mins"
    },
    {
      title: "FINAL PRESENTATION",
      date: "30 OCT 2023",
      description: "Final assessment with fully functional system demonstration",
      status: "Upcoming",
      duration: "75 mins"
    }
  ];

  return (
    <Box id={id} className="section-spacing" sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Project <span className="gradient-text">Presentations</span>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Key milestones and presentations throughout our project development journey
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {presentations.map((presentation, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${theme.palette.primary.light}20`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h5" fontWeight="bold">
                      {presentation.title}
                    </Typography>
                    <Chip
                      label={presentation.status}
                      color={presentation.status === 'Completed' ? 'success' : 'primary'}
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    📅 {presentation.date} • ⏱️ {presentation.duration}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {presentation.description}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      startIcon={<PlayArrowIcon />}
                      size="small"
                      disabled={presentation.status !== 'Completed'}
                    >
                      Watch Recording
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                      size="small"
                    >
                      Download Slides
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Presentation Progress */}
        <Card
          sx={{
            mt: 6,
            p: 4,
            borderRadius: 4,
            textAlign: 'center',
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            color: 'white',
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Presentation Progress
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            75% of scheduled presentations completed successfully
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: 8,
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: 4,
              overflow: 'hidden',
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: '75%',
                height: '100%',
                bgcolor: 'white',
                borderRadius: 4,
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            3 of 4 presentations completed • Final presentation upcoming
          </Typography>
        </Card>
      </Container>
    </Box>
  );
};

export default Presentations;