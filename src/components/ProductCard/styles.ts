import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
  height: 2.5rem; /* limit height */
  overflow: hidden;
`;

export const Price = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const ViewLink = styled(Link)`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.accent};
`;
