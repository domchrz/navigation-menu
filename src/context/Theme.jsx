import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    main: '#edf6f9',
    mainContrast: '#072531',
    secondary: '#00B4D8',
    secondaryContrast: '#CAF0F8',
    action: '#fee440',
    warning: '#dc143c;'
  },
  fonts: {
    sansSerif: `'Playfair Display', sans-serif`,
    serif: `'Ms Madi', cursive`,
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
    boxShadow: '.07rem .07rem .5rem hsla(0, 0%, 0%, .15)',
  }
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
