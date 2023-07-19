import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles/createTypography' {
  interface PaletteColor {
    subtitle3: React.CSSProperties;
    lightest?: string;
  }

  // allow configuration using `createTheme`
  export interface TypographyOptions {
    subtitle3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    label: true;
  }
}

declare module '@mui/material/' {
  export interface Palette {
    customGrey: Record<number, string>;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    label: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    label?: React.CSSProperties;
  }

  interface Theme {
    variables: {
      sidebarWidth: string;
      headerHeight: string;
      input: {
        height: Record<string, string | number>;
        padding: Record<string, string | number>;
      };
      button: {
        height: Record<string, string | number>;
        padding: Record<string, string | number>;
        fontSize: Record<string, string | number>;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    variables: {
      sidebarWidth: string;
      headerHeight: string;
      input: {
        height: Record<string, string | number>;
        padding: Record<string, string | number>;
      };
      button: {
        height: Record<string, string | number>;
        padding: Record<string, string | number>;
        fontSize: Record<string, string | number>;
      };
    };
  }
  interface PaletteColorOptions {
    lighter?: string;
    main?: string;
    light?: string;
    lightest?: string;
    dark?: string;
    contrastText?: string;
    darker?: string;
  }

  interface TypeBackground {
    white?: string;
    lightGrey?: string;
  }

  interface TypeAction {
    primary?: string;
    white?: string;
  }

  interface Palette {
    customGrey: Record<number, string>;
  }

  interface PaletteOptions {
    customGrey: Record<number, string>;
  }

  interface PaletteColor {
    lightest?: string;
  }

  interface SimplePaletteColorOptions {
    lightest?: string;
  }
}

declare module '@mui/material/Button' {
  export interface ButtonPropsSizeOverrides {
    xLarge: true;
  }
}
