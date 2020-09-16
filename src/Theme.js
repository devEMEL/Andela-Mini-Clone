
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const Blue = `#007BFF`;
const Indigo = `#6610F2`;
const Purple = `#6F42C1`;
const Pink = `#E83E8C`;
const Red = `#DC3545`;
const Orange = `#FD7E14`;
const Yellow = `#FFC107`;
const Green = `#28A745`;

const breakpoint_xs = 0;
const breakpoint_sm = 576;
const breakpoint_md = 768;
const breakpoint_lg = 992;
const breakpoint_xl = 1200;




const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${Blue}`
    },
    secondary: {
      main: `${Yellow}`
    },
    common: {
      Indigo,
      Purple,
      Pink,
      Red,
      Orange,
      Yellow,
      Green,
    },
  },
  typography: {
    getStarted: {
      color: `#000`,
      background: Yellow,
      padding: `.6em 1.5em`,
      fontWeight: 'bold',
      fontSize: '.9em',
    },
    buttons: {
      color: '#000',
      backgroundColor: `${Yellow}`,
    },
    h1: {
      fontSize: '2.8rem',
      lineHeight: 1.5,
    },
    h2: {
      fontSize: '2.5rem',
      lineHeight: 1.5,
    },
    h4: {
      fontSize: '1.75rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '.9rem',
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: '.9rem',
      lineHeight: 1.3
    }
  },
  breakpoints: {
    values: {
    xs: breakpoint_xs,
    sm: breakpoint_sm,
    md: breakpoint_md,

    lg: breakpoint_lg,
    xl: breakpoint_xl,
    }
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
    MuiTab: {
      disableRipple: true,
    }
  }
});

export default responsiveFontSizes(theme);
