import styled from 'styled-components';

interface InputContainerProps {
  size: string;
  direction?: string;
  align?: string;
}

function handleSize(size: string) {
  if(size === 'pequeno') {
    return '20%';
  } else if (size === 'medio') {
    return '32.5%';
  } else if (size === 'grande') {
    return '40%'
  } else {
    return size;
  }
}

function handleAlign(align: string | undefined) {
  if( align === 'flex-end') {
    return 'flex-end';
  } else if( align === 'center') {
    return 'center';
  } else if( align === 'flex-start') {
    return 'flex-start';
  } 
}

export const FormularioContainer = styled.form`
  margin: 0 2rem;
`;

export const DadosPessoais = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 3.5rem;
`;

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: ${({align}) => handleAlign(align)};
  justify-content: center;
  flex-direction: ${({direction}) => direction === 'row' ? 'row' : 'column'};
  width: ${({size}) => handleSize(size)};
  margin-right: 1rem;
  margin-bottom: 1rem;

  label {
    color: var(--textLabel);
    margin: 0.25rem 0;
    width: 100%;
  }

  input {
    border: 1px solid var(--input);
    border-radius: 24px;
    height: 2rem;
    width: 100%;
    padding: 4px 8px;
    margin-bottom: 1rem;
  }

  input[name="ativo"] {
    margin-left: 4rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  input[name="email"] {
    width: 50%;
    margin-bottom: 0.5rem;
  }

  input[name="numero"] {
    width: 20%;
    margin-bottom: 0.5rem;
  }

  fieldset {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    margin-left: 1rem;
    width: 20%;
  }

  select {
    border: 1px solid var(--input);
    border-radius: 16px;
    height: 2rem;
    width: 50%;
    padding: 4px 12px;
    color: var(--blue);
    background-color: transparent;
    font-weight: 600;
  }

  select[name="Estado Civil"] {
    width: 50%
  }

  select[name="UF"] {
    width: 30%
  }
`;

export const DadosResidenciais = styled(DadosPessoais)`
  textarea {
    border: 1px solid var(--input);
    border-radius: 16px;
    height: 8rem;
    width: 100%;
    padding: 4px 12px;
    color: var(--blue);
    background-color: transparent;
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