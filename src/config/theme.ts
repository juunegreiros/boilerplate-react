const lightTheme = {
  colors: {
    primary: '#f6f4f6',
    secondary: '#292F36',
    green: '#4ECDC4',
    color10: '#10002B',
    color20: '#240046',
    color30: '#3C096C',
    color40: '#5A189A',
    color50: '#7B2CBF',
    color60: '#9D4EDD',
    color70: '#C77DFF',
    color80: '#E0AAFF',
    color90: '#F1D6FF',
    color100: '#F8EBFF',
  },
};

const darkTheme = {
  colors: {
    primary: '#292F36',
    secondary: '#f6f4f6',
    green: '#4ECDC4',
    color100: '#10002B',
    color90: '#240046',
    color80: '#3C096C',
    color70: '#5A189A',
    color60: '#7B2CBF',
    color50: '#9D4EDD',
    color40: '#C77DFF',
    color30: '#E0AAFF',
    color20: '#F1D6FF',
    color10: '#F8EBFF',
  },
};

export type ThemeTypes = typeof lightTheme;
export type ThemeModeTypes = 'dark' | 'light';
export type ThemeContextTypes = {
  theme: ThemeModeTypes;
  changeTheme: (theme: ThemeModeTypes) => void;
};

export { lightTheme, darkTheme };
