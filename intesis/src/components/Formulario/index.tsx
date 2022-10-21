import { ChangeEvent, useState } from 'react';
import { PessoaFisica } from './PessoaFisica';
import { PessoaJuridica } from './PessoaJuridica/index';

import { GrupoEscolha, Titulo } from './styles';

export function Formulario() {

  const FORM_TYPES = {
    PF: 'Pessoa Física',
    PJ: 'Pessoa Jurídica'
  }
  
  const [formType, setFormType] = useState(FORM_TYPES.PJ);
  
  const handleChangeFormType = (event: ChangeEvent<HTMLInputElement>) => {
    setFormType(event.target.value);
  }

  return (
    <>
      <Titulo>Adicionar Novo Cliente</Titulo>      
      <GrupoEscolha>
        <legend>Tipo</legend>
        <div>
          <label>
            <input
              type="radio"
              name="form-type"
              value={FORM_TYPES.PJ}
              checked={formType === FORM_TYPES.PJ}
              onChange={handleChangeFormType}
            />
            {FORM_TYPES.PJ}
          </label>
          <label>
            <input
              type="radio"
              name="form-type"
              value={FORM_TYPES.PF}
              checked={formType === FORM_TYPES.PF}
              onChange={handleChangeFormType}
            />
            {FORM_TYPES.PF}
          </label>
        </div>
      </GrupoEscolha>
      {
        formType === FORM_TYPES.PJ
          ? <PessoaJuridica />
          : <PessoaFisica />
      }
    </>
  );
}
