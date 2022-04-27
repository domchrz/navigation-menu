import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    main: '#edf6f9',
    mainContrast: '#001219',
    secondary: '#00B4D8',
    secondaryContrast: '#CAF0F8',
    action: '#fee440',
    warning: '#dc143c;'
  },
  fonts: {
    serif: `'Playfair Display', sans-serif`,
    sansSerif: `'Ms Madi', cursive`,
    materialIcon: `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    font-family: 'Material Icons';
    `
  },
  effects: {
    borderRadius: '0.35em',
    boxShadow: '.1rem .1rem .5rem hsla(0, 0%, 0%, .3)',
  }
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
