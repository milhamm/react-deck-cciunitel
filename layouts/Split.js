import React from 'react';
import styled from '@emotion/styled';

const FullSplit = styled.div`
  position: absolute;
  left: 0;
  width: 100vh;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  & > * {
    width: 100%;
  }
  & .cs-layout {
    width: 100% !important;
  }
`;

const Split = ({ children }) => {
  return <FullSplit>{children}</FullSplit>;
};

export default Split;
