export function PessoaFisica() {
  return(
    <form>
      <p>formulario de pessoa fisica</p>
      <div>
        <label>
          <input type="text"/>
          Nome Completo
        </label>

        <label>
          <input type="text"/>
          Apelido
        </label>

        <label>
          <input type="number" placeholder='000.000.000-00'/>
          CPF
        </label>

        <label>
          <input type="date" placeholder='00/00/0000'/>
          Data Nasc. Responsável
        </label>

        <select name="Estado Civil">
          <optgroup>
            <option value="">Solteiro</option>
            <option value="">Casado</option>
          </optgroup>
        </select>

        <label>
          <input type="text"/>
          RG/RNE
        </label>

        <label>
          <input type="text"/>
          Órgão Emissor
        </label>

        <select name="UF">
          <optgroup>
            <option value="">AM</option>
            <option value="">AC</option>
          </optgroup>
        </select>

        <label>
          <input type="number"/>
          CNH
        </label>

        <label>
          <input type="number"/>
          Segurança
        </label>

        <label>
          <input type="text"/>
          CEI
        </label>

        <label>
          <input type="email"/>
          Email
        </label>

        <label>
          <input type="number"/>
          Telefone
        </label>

        <label>
          <input type="number"/>
          Celular
        </label>
      </div>

      <div>
        <label>
          <input type="number"/>
          CEP
        </label>

        <label>
          <input type="text"/>
          Cidade
        </label>

        <select name="UF">
          <optgroup>
            <option value="">AM</option>
            <option value="">AC</option>
          </optgroup>
        </select>

        <label>
          <input type="text"/>
          Endereço
        </label>

        <label>
          <input type="number"/>
          Número
        </label>

        <label>
          <input type="number"/>
          Número
        </label>

        <label>
          <input type="text"/>
          Complemento
        </label>

        <label>
          <input type="text"/>
          Bairro
        </label>

        <textarea name="Observação"></textarea>
      </div>
    </form>
  );
}