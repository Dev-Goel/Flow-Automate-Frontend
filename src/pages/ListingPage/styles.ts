import styled from "styled-components";
import InputComponent from "../../components/UI/Input";
import SelectComponent from "../../components/UI/Select";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

export const Input = styled(InputComponent)`
  max-width: 300px;
`;

export const Select = styled(SelectComponent)`
  max-width: 200px;
`;
