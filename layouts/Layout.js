import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1`
  line-height: 1.2em;
  font-weight: 800;
  font-size: 3em;
  margin-top: 0;
  margin-bottom: 4rem;
  & > span {
    display: inline-block;
    background-image: linear-gradient(
      transparent 55%,
      var(--theme-ui-colors-secondary, #08bdbd) 55%,
      var(--theme-ui-colors-secondary, #08bdbd) 95%,
      transparent 95%
    );
    background-size: 100%;
    background-position: 0;
    background-repeat: no-repeat space;
    word-break: keep-all;
    padding-right: 0.7em;
    margin-right: -0.5em;
  }
`;

const LayoutStyled = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children, title }) => {
  const titleSplit = title.split(' ');

  return (
    <LayoutStyled>
      <div>
        <Title>
          {titleSplit.map((value) => (
            <span>{value}</span>
          ))}
        </Title>
        {children}
      </div>
    </LayoutStyled>
  );
};

export default Layout;
