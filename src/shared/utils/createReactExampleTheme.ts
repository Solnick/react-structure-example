import { createTheme } from '@mui/material/styles';

export const createReactExampleTheme = () => {
  const theme = createTheme({
    variables: {
      sidebarWidth: '96px',
      headerHeight: '96px',
      button: {
        height: {
          xl: '48px',
          lg: '40px',
          md: '32px',
          sm: '24px',
        },
        padding: {
          xl: '12px 16px',
          lg: '10px 12px',
          md: '7px 12px',
          sm: '3px 12px',
        },
        fontSize: {
          xl: '16px',
          lg: '15px',
          md: '14px',
          sm: '12px',
        },
      },
      input: {
        height: {
          xl: '48px',
          lg: '40px',
          md: '30px',
          sm: '24px',
        },
        padding: {
          xl: '12px 16px',
          lg: '10px 12px',
          md: '7px 12px',
          sm: '3px 12px',
        },
      },
    },
    palette: {
      primary: {
        main: '#4DA140',
        lighter: '#A9D7A4',
        lightest: '#e8f3e7',
        light: '#87C87F',
        dark: '#367E2C',
        darker: '#225F1A',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#97A15A',
        light: '#CCD5AE',
        lighter: '#E9EDC9',
        lightest: '#F5F4E6',
        dark: '#535835',
        contrastText: '#FFFFFF',
      },
      info: {
        main: '#4293C7',
        light: '#89D0EB',
        lighter: '#E2F4FA',
        dark: '#0564A2',
        darker: '#1B4976',
      },
      success: {
        main: '#4DA140',
        lighter: '#A9D7A4',
        light: '#87C87F',
        dark: '#367E2C',
        darker: '#225F1A',
        contrastText: '#FFFFFF',
      },
      warning: {
        main: '#F4D44E',
        light: '#FFEE97',
        dark: 'rgb(155, 109, 0)',
        darker: '#9B6D00',
      },
      error: {
        main: '#DF3A07',
        light: 'rgb(255, 243, 239)',
        dark: '#C72A00',
        darker: '#8B0000',
      },
      text: {
        primary: '#3F4144',
        secondary: '#7C8082',
        disabled: '#A4AAAF',
      },
      divider: '#A4AAAF',
      background: {
        white: '#FFFFFF',
        lightGrey: '#E5E9EC',
      },
      action: {
        primary: '#70797E',
        hover: 'rgba(164, 170, 175, 0.1)',
        selected: 'rgba(164, 170, 175, 0.16)',
        disabled: 'rgba(164, 170, 175, 0.8)',
        focus: 'rgba(164, 170, 175, .24)',
        disabledOpacity: 1,
        hoverOpacity: 0.08,
      },
      grey: {
        50: '#F9FAFB',
        100: '#F4F6F8',
        200: '#E5E9EC',
        300: '#D1D6DA',
        400: '#C4C9CB',
        500: '#A9ADB0',
        600: '#7C8082',
        700: '#595D61',
        800: '#3F4144',
        900: '#252729',
      },
      customGrey: {
        8: 'rgba(164, 170, 175, 0.08)',
        12: 'rgba(164, 170, 175, 0.12)',
        16: 'rgba(164, 170, 175, 0.16)',
        24: 'rgba(164, 170, 175, 0.24)',
        32: 'rgba(164, 170, 175, 0.32)',
        48: 'rgba(164, 170, 175, 0.48)',
        56: 'rgba(164, 170, 175, 0.56)',
        80: 'rgba(164, 170, 175, 0.8)',
      },
    },
  });
  return createTheme(theme, {
    typography: {
      h1: {
        fontSize: '36px',
        lineHeight: 1.5,
        letterSpacing: '-1px',
        fontWeight: 600,
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
          fontSize: '40px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '48px',
        },
      },
      h2: {
        fontSize: '32px',
        lineHeight: 1.5,
        letterSpacing: '-0.5px',
        fontWeight: 600,
        marginBottom: theme.spacing(1.5),
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
          fontSize: '36px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '40px',
        },
      },
      h3: {
        fontSize: '28px',
        lineHeight: 1.5,
        letterSpacing: '0',
        fontWeight: 600,
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
          fontSize: '32px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '36px',
        },
      },
      h4: {
        fontSize: '24px',
        lineHeight: 1.5,
        letterSpacing: '0.25px',
        fontWeight: 600,
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
          fontSize: '28px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '32px',
        },
      },
      h5: {
        fontSize: '20px',
        lineHeight: '30px',
        letterSpacing: '0',
        fontWeight: 600,
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
          fontSize: '21px',
          lineHeight: '32px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '24px',
          lineHeight: '36px',
        },
      },
      h6: {
        fontSize: '18px',
        lineHeight: '27px',
        letterSpacing: '0.15px',
        fontWeight: 600,
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
          fontSize: 18,
          lineHeight: '27px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '20x',
          lineHeight: '30px',
        },
      },
      fontFamily: `"Poppins", sans-serif`,
      subtitle1: {
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.25',
        fontWeight: 500,
        color: theme.palette.text.primary,
      },
      subtitle2: {
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.25',
        fontWeight: 500,
        color: theme.palette.text.primary,
      },
      subtitle3: {
        fontSize: '12px',
        lineHeight: '18px',
        letterSpacing: '0.5',
        fontWeight: 500,
        color: theme.palette.text.primary,
      },
      body1: {
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.5',
        fontWeight: 400,
        color: theme.palette.text.primary,
      },
      body2: {
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.25',
        fontWeight: 400,
        color: theme.palette.text.primary,
      },
      label: {
        fontSize: '13px',
        lineHeight: '19px',
        letterSpacing: '0.25',
        fontWeight: 400,
        [theme.breakpoints.up('lg')]: {
          fontSize: '15px',
          lineHeight: '22px',
        },
      },
      button: {
        fontSize: '13px',
        lineHeight: '20px',
        letterSpacing: '0.25',
        fontWeight: 500,
        textTransform: 'none',
        marginTop: '16px',
        marginBottom: '16px',
        '@media (min-width:900px)': {
          fontSize: '14px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: '15px',
          lineHeight: '22px',
        },
      },
      caption: {
        fontSize: '12px',
        lineHeight: '18px',
        letterSpacing: '0.5',
        fontWeight: 400,
      },
      overline: {
        fontSize: '10px',
        lineHeight: '16px',
        letterSpacing: '1.5',
        fontWeight: 400,
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          fontFamily: `"Poppins", sans-serif`,
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              background: theme.palette.primary.lightest,
            },
            '&.Mui-selected:hover': {
              background: theme.palette.primary.lightest,
            },
            '&.Mui-selected:focus': {
              background: theme.palette.primary.lightest,
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            height: '32px',
            '& .MuiTabs-indicator': {
              bottom: '16px',
            },
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            padding: '0 !important',
            margin: 0,
            minHeight: 0,
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: {
              variant: 'outlined',
            },
            style: {
              border: `1px solid ${theme.palette.grey[200]}`,
            },
          },
          {
            props: { size: 'xLarge' },
            style: {
              height: '48px',
              fontSize: '16px',
              padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
            },
          },
          {
            props: { size: 'large' },
            style: {
              height: '40px',
              fontSize: '15px',
              padding: `${theme.spacing(1.5)} ${theme.spacing(1)}`,
            },
          },
          {
            props: { size: 'medium' },
            style: {
              height: '32px',
              fontSize: '14px',
              padding: `${theme.spacing(1.5)} ${theme.spacing(1)}`,
            },
          },
          {
            props: { size: 'small' },
            style: {
              height: '18px',
              fontSize: '12px',
              padding: `${theme.spacing(1.5)} ${theme.spacing(1)}`,
            },
          },
          {
            props: {
              color: 'secondary',
            },
            style: {
              borderColor: theme.palette.text.secondary,
              color: theme.palette.text.secondary,
            },
          },
        ],
      },
      MuiStepLabel: {
        styleOverrides: {
          root: {
            color: theme.palette.text.secondary,
            '&.Mui-active': {
              color: theme.palette.primary.main,
            },
            '& .Mui-completed': {
              '& .MuiSvgIcon-root': {
                background: theme.palette.primary.main,
                width: '20px',
                height: '20px',
                borderRadius: '4px',
              },
            },
          },
        },
      },
      MuiStepIcon: {
        styleOverrides: {
          root: {
            width: 20,
            height: 20,
            borderRadius: 4,
            color: theme.palette.grey[200],
            background: theme.palette.grey[200],
            '& .MuiStepIcon-text': {
              fill: theme.palette.text.secondary,
            },
            '&.Mui-active': {
              background: theme.palette.primary.main,
              color: theme.palette.primary.main,
              '& .MuiStepIcon-text': {
                fill: theme.palette.background.white,
              },
            },
          },
        },
      },
    },
  });
};
