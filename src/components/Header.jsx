import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Container } from './Container';
import { setTheme } from '../store/theme/theme-actions';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  /* font-weight: var(--fw-bold); */
  text-transform: capitalize;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const colorTheme = useSelector((state) => state.theme);

  const toggleColorTheme = () => {
    const themeCondition = colorTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(themeCondition));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', colorTheme);
  }, [colorTheme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleColorTheme}>
            {colorTheme === 'light' ? (
              <IoMoonOutline size='14px' />
            ) : (
              <IoMoon size='14px' />
            )}
            <span style={{ marginLeft: '0.75rem' }}>{colorTheme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
