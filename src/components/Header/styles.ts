import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.surface};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CartLink = styled.a`
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accentText};
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  &:hover { opacity: 0.9; }
`;
