import { createContext } from 'react';
import { Theme } from '../types/const';

type Props = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<Props>({
  theme: Theme.light,
  changeTheme: () => {}
});
