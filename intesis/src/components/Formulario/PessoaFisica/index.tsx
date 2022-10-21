import { DadosPessoais, DadosResidenciais, FormularioContainer, InputContainer } from "./styles";
import estadoCivil from "../../../data/estadoCivil.json";
import unidadeFederativa from "../../../data/unidadeFederative.json";

export function PessoaFisica() {
  return(
    <FormularioContainer>

      <DadosPessoais>
        <InputContainer size="grande">
          <label htmlFor="nome">
            Nome Completo
          </label>
          <input type="text" name="nome" required/>
        </InputContainer>

        <InputContainer size="grande">
          <label htmlFor="apelido">
            Apelido
          </label>
          <input type="text" name="apelido"/>
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="cpf">
            CPF
          </label>
          <input type="number" placeholder="000.000.000-00" name="cpf" required/>
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="nascimentoResponsavel">
            Data Nasc. Responsável
          </label>
          <input type="date" placeholder="00/00/0000" name="nascimentoResponsavel"/>
        </InputContainer>

        <InputContainer size="40%">
          <label htmlFor="Estado Civil">Estado Civil</label>
          <select name="Estado Civil" required>
            {
              estadoCivil.map((item, index) => (
                <option key={index} value={item.estado}>{item.estado}</option>
              ))
            }
          </select>
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="rg">
            RG/RNE
          </label>
          <input type="text" name="rg" required/>
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="orgaoEmissor">
            Órgão Emissor
          </label>
          <input type="text" name="orgaoEmissor"/>
        </InputContainer>

        <InputContainer size="40%">
          <label htmlFor="UF">UF</label>
          <select name="UF" required>
            {
              unidadeFederativa.map((item, index) => (
                <option key={index} value={item.uf}>{item.uf}</option>
              ))
            }
          </select>
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="cnh">
            CNH
          </label>
          <input type="number" name="cnh"/>
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="seguranca">
            Segurança
          </label>
          <input type="number" name="seguranca"/>
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="cei">
            CEI
          </label>
          <input type="text" name="cei"/>
        </InputContainer>

        <InputContainer size="100%">
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" required/>
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="telefone">
            Telefone
          </label>
          <input type="number" name="telefone"/>
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="celular">
            Celular
          </label>
          <input type="number" name="celular"/>
        </InputContainer>
      </DadosPessoais>

      <DadosResidenciais>
        <InputContainer size="pequeno">
          <label htmlFor="cep">
            CEP
          </label>
          <input type="number" name="cep" required/>
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="cidade">
            Cidade
          </label>
          <input type="text" name="cidade" required/>
        </InputContainer>

        <InputContainer size="40%">
          <label htmlFor="UF">UF</label>
          <select name="UF" required>
            {
              unidadeFederativa.map((item, index) => (
                <option key={index} value={item.uf}>{item.uf}</option>
              ))
            }
          </select>
        </InputContainer>

        <InputContainer size="grande">
          <label htmlFor="endereco">
            Endereço
          </label>
          <input type="text" name="endereco" required/>
        </InputContainer>

        <InputContainer size='50%'>
          <label htmlFor='numero'>
            Número
          </label>
          <input type="number" name='numero' required/>
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="complemento">
            Complemento
          </label>
          <input type="text" name="complemento"/>
        </InputContainer>

        <InputContainer size="grande">
          <label htmlFor="bairro">
            Bairro
          </label>
          <input type="text" name="bairro" required/>
        </InputContainer>        

        <InputContainer size='100%'>
          <label htmlFor='Observação'>
            Observação
          </label>
          <textarea name="Observação"></textarea>           
        </InputContainer> 
      </DadosResidenciais>

    </FormularioContainer>
  );
}