import { ChangeEvent, useState } from "react";
import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from './PessoaJuridica/index';

export function Formulario() {

  const FORM_TYPES = {
    PF: 'Pessoa física',
    PJ: 'Pessoa jurídica'
  }
  
  const [formType, setFormType] = useState(FORM_TYPES.PJ);
  
  const handleChangeFormType = (event: ChangeEvent<HTMLInputElement>) => {
    setFormType(event.target.value);
  }

  return (
    <>
      <h2>Adicionar Novo Cliente</h2>
      <form action="">
        
        <fieldset>
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
        </fieldset>

        {
          formType === FORM_TYPES.PJ
            ? <PessoaJuridica />
            : <PessoaFisica />
        }

        <div>
          <button>Salvar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </>
  );
}