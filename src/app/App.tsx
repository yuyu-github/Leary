import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const StyledApp = styled.div`
  font-family: 'Noto Sans JP', 'Noto Sans', sans-serif;
`;

export default function App(): React.JSX.Element {
  return (
    <StyledApp>
      <Outlet />
    </StyledApp>
  );
}
