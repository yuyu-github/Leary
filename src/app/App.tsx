import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const StyledApp = styled.div`
  font-family: 'Noto Sans JP', 'Noto Sans', sans-serif;
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      <Outlet />
    </StyledApp>
  );
};

export default App;
