import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const HomeLink = styled(Link)`
  padding: 0.6rem 1.2rem;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accentText};
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
`;

export default function NotFound() {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Oops! Page not found.</Subtitle>
      <HomeLink to="/">Go back home</HomeLink>
    </Container>
  );
}
