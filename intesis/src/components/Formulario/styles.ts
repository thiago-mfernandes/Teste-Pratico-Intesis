import styled from 'styled-components';

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

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-button);
  width: 100%;
  height: 8rem;

  button {
    width: 8rem;
    margin: 0 0.25rem;
    height: 2rem;
    border-radius: 8px;
    border: none;
    color: #fff;
    transition: background-color .1s;
  }

  button[name="salvar"] {
    background-color: var(--green);
    &:hover {
      background-color: var(--green-light);
    }
  }

  button[name="cancelar"] {
    background-color: var(--red);
    &:hover {
      background-color: var(--red-light);
    }
  }
`;