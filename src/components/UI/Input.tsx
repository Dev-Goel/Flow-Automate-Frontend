import type { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.25rem;
  width: 100%;
  font-size: 0.9rem;
`;

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
  return <StyledInput {...props} />;
}
