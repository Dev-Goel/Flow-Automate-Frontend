import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 1rem;
`;

export const Qty = styled.p`
  margin: 0.25rem 0;
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 0.25rem 0;
`;

export const Total = styled.h3`
  margin-top: 1rem;
  text-align: right;
`;
