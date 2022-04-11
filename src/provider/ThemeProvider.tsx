import { ReactNode, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../model/ChangeCssRootVariables';
import { Theme } from '../types/const';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  function changeTheme(theme: Theme) {
    setTheme(theme);
    changeCssRootVariables(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
