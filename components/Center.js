import React from 'react';
import styled from '@emotion/styled';

const CenterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const Center = ({ children }) => {
  return <CenterStyle>{children}</CenterStyle>;
};

export default Center;
