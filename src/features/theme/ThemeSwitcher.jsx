import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from './use-theme';

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const ThemeSwitcher = () => {
  const [colorTheme, toggleColorTheme] = useTheme();

  return (
    <ModeSwitcher onClick={toggleColorTheme}>
      {colorTheme === 'light' ? (
        <IoMoonOutline size='14px' />
      ) : (
        <IoMoon size='14px' />
      )}
      <span style={{ marginLeft: '0.75rem' }}>{colorTheme} Theme</span>
    </ModeSwitcher>
  );
};
