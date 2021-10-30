import React from 'react';
import styled from '@emotion/styled';
import Center from '../components/Center';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;
`;

const Title = styled.h2`
  line-height: 1.2em;
  font-weight: 700;
  font-size: 2em;
  margin-top: 0;
  width: 500px;
  margin-bottom: 32px;
  & > * {
    display: inline-block;
    background-image: linear-gradient(
      transparent 55%,
      var(--theme-ui-colors-secondary, #ffd166) 55%,
      var(--theme-ui-colors-secondary, #ffd166) 95%,
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

const Description = styled.p`
  max-width: 300px;
  text-align: right;
`;

const Main = styled.div`
  width: 100%;
  padding: 0 8rem;
`;

const TitleWithDescription = ({ children, title, description = null }) => {
  const titleSplit = title.split(' ');
  return (
    <Center>
      <Container>
        <Header>
          <Title>
            {titleSplit.map((val) => (
              <span>{val}</span>
            ))}
          </Title>
          <Description>{description}</Description>
        </Header>
        {description ? children : <Main>{children}</Main>}
      </Container>
    </Center>
  );
};

export default TitleWithDescription;
