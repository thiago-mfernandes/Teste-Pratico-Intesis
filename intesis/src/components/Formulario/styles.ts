import styled from "styled-components";

export const Titulo = styled.h2`
  color: var(--blue);
  font-size: 1.25rem;
  width: 100%;
  margin: 0 2rem 2rem;
`;

export const GrupoEscolha = styled.fieldset`
  border: none;
  margin: 0 2rem 1rem;

  legend {
    color: var(--textLabel);
    margin-bottom: 0.5rem;
  }

  div {
    width: 100%;
  }

  label {
    margin-right: 1.25rem;
  }
  
  input {
    margin-right: 0.5rem;
  }
`;

