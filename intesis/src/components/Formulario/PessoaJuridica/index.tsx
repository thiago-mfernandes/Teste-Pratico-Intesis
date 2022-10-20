export function PessoaJuridica() {
  return (
    <form>
      <p>formulario de pessoa juridica</p>
      <div>          
        <label>
          <input type="text" />
          Razão Social
        </label>
        <label>
          <input type="text" />
          Nome Fantasia
        </label>
        <label>
          <input type="checkbox" checked/>
          Ativo
        </label>
        <label>
          <input type="number" placeholder='00.000.000/0000-00'/>
          CNPJ
        </label>
        <label>
          <input type="checkbox" />
          <input type="checkbox" />
          Contribuinte
        </label>
        <label>
          <input type="text"/>
          Insc. Estadual
        </label>
        <label>
          <input type="text"/>
          Insc. Municipal
        </label>
      </div>

      <div>
        <label>
          <input type="text"/>
          Nome do Responsável
        </label>

        <label>
          <input type="number" placeholder='000.000.000-00'/>
          CPF
        </label>

        <label>
          <input type="date" placeholder='00/00/0000'/>
          Data Nasc. Responsável
        </label>

        <label>
          <input type="number"/>
          Telefone
        </label>

        <label>
          <input type="number"/>
          Celular
        </label>

        <label>
          <input type="email"/>
          Email Responsável
        </label>

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