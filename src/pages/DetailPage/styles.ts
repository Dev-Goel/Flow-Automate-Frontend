import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  margin: 0.5rem 0;
`;

export const Description = styled.p`
  margin: 0.5rem 0;
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const Rating = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;

export const Actions = styled.div`
  margin-top: 1rem;
`;
