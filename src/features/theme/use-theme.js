import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './theme-slice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const colorTheme = useSelector((state) => state.theme);

  const toggleColorTheme = () => {
    const themeCondition = colorTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(themeCondition));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', colorTheme);
  }, [colorTheme]);

  return [colorTheme, toggleColorTheme];
};
