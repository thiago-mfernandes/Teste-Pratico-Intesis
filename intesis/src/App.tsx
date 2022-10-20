//import styled from 'styled-components';
import { GlobalStyle } from './styles/global';

//const Title = styled.h1``;

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <h2>Cadastro / Clientes</h2>
      </header>
      <button>Icone + Cliente</button>
      <input type="text" />

      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Nome/Razão Social</td>
            <td>CPF/CNPJ</td>
            <td>Email</td>
            <td>Tel</td>
            <td>Cel</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Cerri & Santos Equipamentos</td>
            <td>23.123.456/0001-01</td>
            <td>assistech19@gmail.com</td>
            <td>19 3456-7890</td>
            <td>19 98765-4321</td>
            <img src="" alt="editar" />
            <img src="" alt="remover" />
          </tr>
        </tbody>
      </table>

      <h2>Adicionar Novo Cliente</h2>
      <form action="">
        {/** pessoa juridica */}
        <div>
          <label>
            <input type="checkbox" />
            Pessoa Jurídica
          </label>
          <label>
            <input type="checkbox" />
            Pessoa Física
          </label>
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

        {/** pessoa fisica */}
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

        <div>
          <button>Salvar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
