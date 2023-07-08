import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Theme, setTheme } from './theme-slice';
import { selectTheme } from './theme-selectors';

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useDispatch();
  const colorTheme = useSelector(selectTheme);

  const toggleColorTheme = () => {
    const themeCondition = colorTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(themeCondition));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', colorTheme);
  }, [colorTheme]);

  return [colorTheme, toggleColorTheme];
};
