// src/components/Documents.js
import React, { useState } from 'react';
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
  alpha,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tabs,
  Tab,
  Paper,
} from '@mui/material';
import {
  Download,
  Visibility,
  Close,
  Description,
  Assignment,
  Article,
  Group,
  Person,
  School,
} from '@mui/icons-material';

const Documents = ({ id }) => {
  const theme = useTheme();
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const documentCategories = [
    {
      title: 'Assessment Documents',
      icon: <Assignment sx={{ fontSize: 32 }} />,
      color: 'primary'
    },
    {
      title: 'Research Papers',
      icon: <Article sx={{ fontSize: 32 }} />,
      color: 'secondary'
    },
    {
      title: 'Final Reports',
      icon: <Description sx={{ fontSize: 32 }} />,
      color: 'success'
    }
  ];

  const documents = [
    {
      title: "TOPIC ASSESSMENT DOCUMENT",
      description: "Initial feedback and comments from the panel on the selected research topic",
      category: "Assessment Documents",
      status: "Completed",
      icon: "📄",
      date: "15 MAR 2023",
      fileSize: "2.4 MB",
      pages: 12,
      version: "1.0",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      title: "STATUS DOCUMENT",
      description: "Document showing the progress of the research conducted",
      category: "Assessment Documents",
      status: "Completed",
      icon: "📊",
      date: "30 APR 2023",
      fileSize: "3.1 MB",
      pages: 18,
      version: "1.2",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      title: "CHARTER DOCUMENT",
      description: "Project charter with research goals, objectives, and resource requirements",
      category: "Assessment Documents",
      status: "Completed",
      icon: "📑",
      date: "20 MAY 2023",
      fileSize: "4.2 MB",
      pages: 25,
      version: "2.0",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      title: "PROPOSAL REPORT",
      description: "Defines project goals, their importance, and plans to achieve them",
      category: "Research Papers",
      status: "Completed",
      icon: "📋",
      date: "10 JUN 2023",
      fileSize: "5.7 MB",
      pages: 32,
      version: "1.5",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      title: "RESEARCH PAPER",
      description: "Completed research paper submitted for publication",
      category: "Research Papers",
      status: "Completed",
      icon: "🎓",
      date: "25 AUG 2023",
      fileSize: "8.9 MB",
      pages: 45,
      version: "3.0",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      title: "FINAL REPORT GROUP",
      description: "Overall team contribution towards the research project",
      category: "Final Reports",
      status: "In Progress",
      icon: "👥",
      date: "15 OCT 2023",
      fileSize: "6.3 MB",
      pages: 38,
      version: "1.0",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      title: "FINAL REPORT INDIVIDUAL",
      description: "In-depth contribution of each member towards the research project",
      category: "Final Reports",
      status: "In Progress",
      icon: "👤",
      date: "20 OCT 2023",
      fileSize: "7.1 MB",
      pages: 42,
      version: "1.0",
      downloadUrl: "#",
      previewUrl: "#"
    }
  ];

  const handleDocClick = (doc) => {
    setSelectedDoc(doc);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedDoc(null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredDocuments = activeTab === 0 
    ? documents 
    : documents.filter(doc => 
        doc.category === documentCategories[activeTab - 1]?.title
      );

  return (
    <Box id={id} className="section-py" sx={{ 
      background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.8)} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 100%)`,
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.03)} 0%, ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
          animation: 'float 6s ease-in-out infinite',
        }}
      />

      <Container maxWidth="xl">
        <Fade in={true} timeout={800}>
          <Box>
            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h2"
                fontWeight="bold"
                gutterBottom
                sx={{ mb: 2 }}
              >
                Project <span className="gradient-text">Documents</span>
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
                Comprehensive documentation covering all aspects of our research project
              </Typography>
            </Box>

            {/* Category Tabs */}
            <Paper 
              sx={{ 
                mb: 6, 
                borderRadius: 4,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                p: 2
              }}
            >
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    borderRadius: 3,
                    minHeight: 48,
                    mx: 0.5,
                    '&.Mui-selected': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                      color: 'white',
                    }
                  }
                }}
              >
                <Tab label="All Documents" />
                {documentCategories.map((category, index) => (
                  <Tab 
                    key={index} 
                    label={category.title}
                    icon={category.icon}
                    iconPosition="start"
                  />
                ))}
              </Tabs>
            </Paper>

            {/* Documents Grid */}
            <Grid container spacing={3}>
              {filteredDocuments.map((doc, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card
                    className="hover-lift"
                    onClick={() => handleDocClick(doc)}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      cursor: 'pointer',
                      background: `linear-gradient(135deg, ${alpha('#ffffff', 0.9)} 0%, ${alpha('#ffffff', 0.95)} 100%)`,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                        '& .doc-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                        }
                      },
                    }}
                  >
                    {/* Status Ribbon */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: -30,
                        background: doc.status === 'Completed' ? 
                          `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)` :
                          `linear-gradient(135deg, ${theme.palette.warning.main} 0%, ${theme.palette.warning.dark} 100%)`,
                        color: 'white',
                        padding: '4px 40px',
                        transform: 'rotate(45deg)',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        zIndex: 1,
                        boxShadow: `0 2px 12px ${alpha('#000', 0.2)}`,
                      }}
                    >
                      {doc.status}
                    </Box>

                    <CardContent sx={{ p: 4, position: 'relative', zIndex: 2 }}>
                      {/* Document Icon */}
                      <Box
                        className="doc-icon"
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: 3,
                          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2.5rem',
                          mb: 3,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {doc.icon}
                      </Box>

                      {/* Document Title */}
                      <Typography 
                        variant="h5" 
                        fontWeight="bold" 
                        gutterBottom
                        sx={{ 
                          lineHeight: 1.3,
                          background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {doc.title}
                      </Typography>

                      {/* Description */}
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          mb: 3, 
                          lineHeight: 1.6,
                          minHeight: '48px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {doc.description}
                      </Typography>

                      {/* Document Meta */}
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mb: 3,
                        p: 2,
                        borderRadius: 2,
                        background: alpha(theme.palette.primary.main, 0.03),
                        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                      }}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="caption" color="text.secondary" display="block">
                            Date
                          </Typography>
                          <Typography variant="body2" fontWeight="bold" color="primary.main">
                            {doc.date}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="caption" color="text.secondary" display="block">
                            Size
                          </Typography>
                          <Typography variant="body2" fontWeight="bold" color="secondary.main">
                            {doc.fileSize}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="caption" color="text.secondary" display="block">
                            Pages
                          </Typography>
                          <Typography variant="body2" fontWeight="bold" color="success.main">
                            {doc.pages}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Action Buttons */}
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<Visibility />}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDocClick(doc);
                          }}
                          sx={{
                            flex: 1,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                            borderRadius: 2,
                            fontWeight: 600,
                          }}
                        >
                          Preview
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<Download />}
                          onClick={(e) => e.stopPropagation()}
                          sx={{
                            borderRadius: 2,
                            fontWeight: 600,
                            borderColor: alpha(theme.palette.primary.main, 0.3),
                            color: theme.palette.primary.main,
                            '&:hover': {
                              borderColor: theme.palette.primary.main,
                              background: alpha(theme.palette.primary.main, 0.04),
                            }
                          }}
                        >
                          Download
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Download All Section */}
            <Fade in={true} timeout={1000}>
              <Card
                sx={{
                  mt: 6,
                  p: 5,
                  borderRadius: 4,
                  textAlign: 'center',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  color: 'white',
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
                    background: `radial-gradient(circle at 30% 20%, ${alpha('#fff', 0.1)} 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, ${alpha('#fff', 0.05)} 0%, transparent 50%)`,
                  }}
                />
                
                <Box position="relative" zIndex={1}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Complete Project Documentation
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                    Download all project documents in a single package
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Download />}
                      sx={{
                        background: 'white',
                        color: 'primary.main',
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        fontWeight: 700,
                        '&:hover': {
                          background: alpha('#fff', 0.9),
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 25px ${alpha('#000', 0.2)}`,
                        },
                      }}
                    >
                      Download Complete Package
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        fontWeight: 700,
                        '&:hover': {
                          background: alpha('#fff', 0.1),
                          borderColor: 'white',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      View Online Repository
                    </Button>
                  </Box>
                  <Typography variant="body2" sx={{ mt: 3, opacity: 0.8 }}>
                    📦 Includes all documents • 🔒 Secure download • 📊 35.7 MB total size
                  </Typography>
                </Box>
              </Card>
            </Fade>
          </Box>
        </Fade>

        {/* Document Detail Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha('#ffffff', 0.95)} 0%, ${alpha('#ffffff', 0.98)} 100%)`,
              backdropFilter: 'blur(20px)',
            }
          }}
        >
          {selectedDoc && (
            <>
              <DialogTitle sx={{ 
                borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                pb: 2,
                position: 'relative'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                    }}
                  >
                    {selectedDoc.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" fontWeight="bold">
                      {selectedDoc.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedDoc.description}
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  onClick={handleCloseDialog}
                  sx={{
                    position: 'absolute',
                    right: 16,
                    top: 16,
                    color: 'text.secondary'
                  }}
                >
                  <Close />
                </IconButton>
              </DialogTitle>
              
              <DialogContent sx={{ pt: 3 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom color="primary.main">
                      Document Details
                    </Typography>
                    <Box sx={{ spaceY: 2 }}>
                      {[
                        { label: 'Category', value: selectedDoc.category, color: 'primary' },
                        { label: 'Status', value: selectedDoc.status, color: selectedDoc.status === 'Completed' ? 'success' : 'warning' },
                        { label: 'Version', value: selectedDoc.version, color: 'info' },
                        { label: 'File Size', value: selectedDoc.fileSize, color: 'secondary' },
                        { label: 'Pages', value: `${selectedDoc.pages} pages`, color: 'success' },
                        { label: 'Last Updated', value: selectedDoc.date, color: 'textSecondary' },
                      ].map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            {item.label}:
                          </Typography>
                          <Chip
                            label={item.value}
                            size="small"
                            color={item.color}
                            variant="outlined"
                          />
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom color="primary.main">
                      Quick Actions
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Button
                        variant="contained"
                        startIcon={<Visibility />}
                        fullWidth
                        sx={{
                          py: 1.5,
                          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                          borderRadius: 2,
                          fontWeight: 600,
                        }}
                      >
                        Preview Document
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Download />}
                        fullWidth
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 600,
                        }}
                      >
                        Download Document
                      </Button>
                      <Button
                        variant="text"
                        fullWidth
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 600,
                          color: 'text.secondary',
                        }}
                      >
                        Share Document
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
              
              <DialogActions sx={{ 
                borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                pt: 2,
                px: 3,
                pb: 3
              }}>
                <Button onClick={handleCloseDialog}>
                  Close
                </Button>
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  onClick={handleCloseDialog}
                >
                  Download Now
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Documents;