// src/App.js
import React, { useState, useMemo, useEffect } from 'react';
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Domain from './components/Domain';
import Milestone from './components/Milestone';
import Documents from './components/Documents';
import Presentations from './components/Presentations';
import Team from './components/Team';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Detect system preference
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // Persistent theme mode (light/dark)
  const [mode, setMode] = useState(
    localStorage.getItem('themeMode') || (prefersDarkMode ? 'dark' : 'light')
  );

  const toggleMode = () => {
    const nextMode = mode === 'light' ? 'dark' : 'light';
    setMode(nextMode);
    localStorage.setItem('themeMode', nextMode);
    document.body.classList.toggle('dark-mode', nextMode === 'dark');
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', mode === 'dark');
  }, [mode]);

  // 🎨 Custom Theme Configuration
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: { main: '#6366f1' },
                secondary: { main: '#8b5cf6' },
                background: {
                  default: '#ffffff',
                  paper: '#f9fafb',
                },
                text: {
                  primary: '#0f172a',
                  secondary: '#475569',
                },
              }
            : {
                primary: { main: '#6366f1' },
                secondary: { main: '#10b981' },
                background: {
                  default: '#0f172a',
                  paper: '#1e293b',
                },
                text: {
                  primary: '#e2e8f0',
                  secondary: '#94a3b8',
                },
              }),
        },
        typography: {
          fontFamily: "'Inter', 'Poppins', 'Segoe UI', sans-serif",
          h1: { fontWeight: 800 },
          h2: { fontWeight: 800 },
          h3: { fontWeight: 700 },
          h4: { fontWeight: 700 },
          h5: { fontWeight: 700 },
          h6: { fontWeight: 600 },
        },
        shape: { borderRadius: 12 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                fontWeight: 700,
                borderRadius: 12,
                transition: 'all 0.3s ease',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                transition: 'all 0.3s ease',
                borderRadius: 20,
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header toggleMode={toggleMode} mode={mode} />
        <Hero id="home" />
        <About id="about" />
        <Domain id="domain" />
        <Milestone id="milestone" />
        <Documents id="documents" />
        <Presentations id="presentations" />
        <Team id="team" />
        <Technology id="technology" />
        <Contact id="contact" />
        <Footer id="footer" />
      </div>
    </ThemeProvider>
  );
}

export default App;
