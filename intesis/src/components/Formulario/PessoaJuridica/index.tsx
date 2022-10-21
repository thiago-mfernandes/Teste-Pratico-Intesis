import { DadosEmpresariais, DadosPessoais, FormularioContainer, InputContainer } from './styles';

import unidadeFederativa from '../../../data/unidadeFederative.json';
import tipoLogradouro from '../../../data/tipoLogradouro.json';
import { GrupoEscolha } from '../styles';

export function PessoaJuridica() {

  
  return (
    <FormularioContainer>

      <DadosEmpresariais>  
        <InputContainer size='grande'>
          <label htmlFor='razaoSocial'>
            Razão Social
          </label>
          <input type="text" name='razaoSocial' required/>
        </InputContainer>

        <InputContainer size='grande'>
          <label htmlFor='nomeFantasia'>
            Nome Fantasia
          </label>
          <input type="text" name='nomeFantasia' required/>
        </InputContainer>

        <InputContainer size='' direction='row' align='flex-end'>
          <input type="checkbox" name='ativo'/>
          <label htmlFor='ativo'>
            Ativo
          </label>
        </InputContainer>

        <InputContainer size='medio'>
          <label htmlFor='cnpj'>
            CNPJ
          </label>
          <input type="number" placeholder='00.000.000/0000-00' name='cnpj' required/>
        </InputContainer>

        <InputContainer size='60%' align='flex-start'>
          <GrupoEscolha>
            <legend>Contruibuinte</legend>

            <label htmlFor="sim">Sim</label>
            <input type="radio" name='contribuinte'/>

            <label htmlFor="nao">Não</label>
            <input type="radio" name='contribuinte' checked/>
          </GrupoEscolha>
        </InputContainer>        

        <InputContainer size='medio'>
          <label htmlFor='incEstadual'>
            Insc. Estadual
          </label>
          <input type="text" name='incEstadual'/>
        </InputContainer>

        <InputContainer size='medio'>
          <label htmlFor='incMunicipal'>
            Insc. Municipal
          </label>
          <input type="text" name='incMunicipal'/>
        </InputContainer>

        <InputContainer size='grande'>
          <label htmlFor='emailResponsavel'>
            Email Responsável
          </label>
          <input type="email"name='emailResponsavel'/>
        </InputContainer>

      </DadosEmpresariais>

      <DadosPessoais>        
        <InputContainer size='100%'>
          <label htmlFor='nomeResponsavel'>
            Nome do Responsável
          </label>
          <input type="text" name='nomeResponsavel'/>
        </InputContainer>

        <InputContainer size='medio'>
          <label htmlFor='cpf'>
            CPF
          </label>
          <input type="number" placeholder='000.000.000-00' name='cpf'/>
        </InputContainer>

        <InputContainer size='60%'>
          <label htmlFor='nasciResponsavel'>
            Data Nasc. Responsável
          </label>
          <input type="date" placeholder='00/00/0000'name='nasciResponsavel'/>
        </InputContainer>

        <InputContainer size='pequeno'>
          <label htmlFor='telefone'>
            Telefone
          </label>
          <input type="number" name='telefone'/>
        </InputContainer>

          
        <InputContainer size='pequeno'>
          <label htmlFor=''>
            Celular
          </label>
          <input type="number" name='celular'/>
        </InputContainer>

        <InputContainer size='grande'>
          <label htmlFor='emailResponsavel'>
            Email Responsável
          </label>
          <input type="email"name='emailResponsavel'/>
        </InputContainer>

        <InputContainer size='pequeno'>
          <label htmlFor='cep'>
            CEP
          </label>
          <input type="text" name='cep'/>
        </InputContainer>

        <InputContainer size='pequeno'>
          <label htmlFor='tipoLogradouro'>
            Tipo Logradouro
          </label>
          <select name="Tipo Logradouro" required>
            {
              tipoLogradouro.map((item, index) => (
                <option key={index} value={item.tipo}>{item.tipo}</option>
              ))
            }
          </select>
        </InputContainer>

        <InputContainer size='grande'>
          <label htmlFor='cidade'>
            Cidade
          </label>
          <input type="text" name='cidade' required/>
        </InputContainer>


        <InputContainer size='pequeno'>
          <label htmlFor="UF">UF</label>
          <select name="UF" required>
            {
              unidadeFederativa.map((item, index) => (
                <option key={index} value={item.uf}>{item.uf}</option>
              ))
            }
          </select>
        </InputContainer>

        <InputContainer size='grande'>
          <label htmlFor='endereco'>
            Endereço
          </label>
          <input type="text" name='endereco' required/>
        </InputContainer>

        <InputContainer size='50%'>
          <label htmlFor='numero'>
            Número
          </label>
          <input type="number" name='numero' required/>
        </InputContainer>

        <InputContainer size='pequeno'>
          <label htmlFor='complemento'>
            Complemento
          </label>
          <input type="text" name='complemento'/>
        </InputContainer>

        <InputContainer size='grande'>
          <label htmlFor='bairro'>
            Bairro
          </label>
          <input type="text" name='bairro' required/>
        </InputContainer>

        <InputContainer size='100%'>
          <label htmlFor='bairro'>
          Observação
          </label>
          <textarea name="Observação"></textarea>           
        </InputContainer>        
      </DadosPessoais> 
      
    </FormularioContainer>
  );
}