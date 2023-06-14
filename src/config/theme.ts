import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: '3.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
    },
    h3: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: '2rem',
      letterSpacing: '-0.025em',
    },
  },
  palette: {
    primary: {
      light: '#E71E4D',
      main: '#D70466',
      dark: '#5e012c',
    },
  },
  components: {
    MuiPaper: {
      variants: [
        {
          props: { elevation: 1 },
          style: {
            boxShadow:
              'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px',
          },
        },
      ],
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundImage:
              'linear-gradient(to right, rgb(231, 30, 77), rgb(226, 26, 95), rgb(215, 4, 102))',
            // boxShadow:
            // 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
            borderRadius: '6px',
            textTransform: 'initial',
            fontSize: '.875rem',
            lineHeight: '1.25rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '700',
            border: '1px solid transparent',
            transitionDuration: '0.15s',
            transitionProperty:
              'color, background-color, border-color, text-decoration-color, fill, stroke',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            outlineWidth: '2px',
            outlineColor: 'rgba(0, 0, 0, 0)',
            outlineStyle: 'solid',

            '&:hover': {
              boxShadow: 'none',
              background:
                'linear-gradient(to right, rgb(215, 4, 102), rgb(215, 4, 102), rgb(215, 4, 102))',
            },
            '&:focus': {
              boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(215, 4, 102) 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
              outlineOffset: '2px',
            },
          },
        },
      ],
    },
  },
})

export default theme
