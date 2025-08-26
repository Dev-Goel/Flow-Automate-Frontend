import styled from "styled-components";

const Button = styled.button`
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accentText};
  cursor: pointer;
  font-size: 0.9rem;
  &:hover { opacity: 0.9; }
`;

export default Button;
