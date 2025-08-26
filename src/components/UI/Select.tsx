import type { SelectHTMLAttributes } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.25rem;
  font-size: 0.9rem;
`;

type Props = SelectHTMLAttributes<HTMLSelectElement>;

export default function Select(props: Props) {
  return <StyledSelect {...props} />;
}
