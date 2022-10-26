import { ChangeEvent, useContext, useState, useEffect } from "react";
import { ClientesContext } from "../../ClientsContext";
import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica/index";

import { GrupoEscolha, Titulo } from "./styles";

export function Formulario() {
  
  const FORM_TYPES = {
    PF: "Pessoa Física",
    PJ: "Pessoa Jurídica"
  }
  
  const { cliente } = useContext(ClientesContext);
  const [formType, setFormType] = useState(FORM_TYPES.PJ);
  
  
  const handleChangeFormType = (event: ChangeEvent<HTMLInputElement>) => {
    setFormType(event.target.value);
  }

  useEffect(() => {
    if(cliente.razaoSocial) {
      setFormType(FORM_TYPES.PJ);
    } else if(cliente.nomeCompleto) {
      setFormType(FORM_TYPES.PF);
    } else {
      return;
    }
  },[cliente])

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
