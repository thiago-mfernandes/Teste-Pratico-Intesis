import { 
  DadosEmpresariais, 
  DadosPessoais, 
  FormularioContainer, 
  InputContainer, GrupoEscolha, ContainerButton } from './styles';

import unidadeFederativa from '../../../data/unidadeFederative.json';
import tipoLogradouro from '../../../data/tipoLogradouro.json';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ClientesContext } from '../../../ClientsContext';
import { useContext } from 'react';


export function PessoaJuridica() {

  const { register, handleSubmit, formState: { errors }} = useForm();
  const { clientes, createClient } = useContext(ClientesContext);

  async function onSubmit(data: Object) {
    await createClient(data);
    console.log("passou", data);
  }

  return (
    <FormularioContainer 
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
    >

      <DadosEmpresariais>  
        <InputContainer size='grande'>
          <label htmlFor='razaoSocial'>
            Razão Social
          </label>
          <input 
            required
            type="text" 
            id='razaoSocial' 
            {...register("razaoSocial")}
          />
        </InputContainer>

        <InputContainer size='grande'>
          <label htmlFor='nome'>
            Nome Fantasia
          </label>
          <input 
            required
            type="text" 
            id='nome' 
            {...register("nome")}
          />
        </InputContainer>

        <InputContainer size='' direction='row' align='flex-end'>
          <input 
            type="checkbox" 
            id='ativo'
            {...register("ativo")}
          />
          <label htmlFor='ativo'>
            Ativo
          </label>
        </InputContainer>

        <InputContainer size='medio'>
          <label htmlFor='cnpj'>
            CNPJ
          </label>
          <input 
            required
            type="number" 
            placeholder='00.000.000/0000-00' 
            id='cnpj' 
            {...register("cnpj")}
          />
        </InputContainer>

        <InputContainer size='60%' align='flex-start'>
          <GrupoEscolha>
            <legend>Contruibuinte</legend>

            <label htmlFor="sim">Sim</label>
            <input 
              type="radio" 
              id='contribuinte'
              {...register("contribuinte")}
            />

            <label htmlFor="nao">Não</label>
            <input 
              checked
              type="radio" 
              id='contribuinte' 
              {...register("contribuinte")}
            />
          </GrupoEscolha>
        </InputContainer>        

        <InputContainer size='medio'>
          <label htmlFor='incEstadual'>
            Insc. Estadual
          </label>
          <input 
            type="text" 
            id='incEstadual'
            {...register("incEstadual")}
          />
        </InputContainer>

        <InputContainer size='medio'>
          <label htmlFor='incMunicipal'>
            Insc. Municipal
          </label>
          <input 
            type="text" 
            id='incMunicipal'
            {...register("incMunicipal")}
          />
        </InputContainer>

        <InputContainer size='grande'>
          <label htmlFor='email'>
            Email Responsável
          </label>
          <input 
            type="email"
            id='email'
            {...register("incMunicipal")}
            />
        </InputContainer>

      </DadosEmpresariais>

      <DadosPessoais>        
        <InputContainer size='100%'>
          <label htmlFor='nomeResponsavel'>
            Nome do Responsável
          </label>
          <input 
            type="text" 
            id='nomeResponsavel'
            {...register("nomeResponsavel")}
          />
        </InputContainer>

        <InputContainer size='medio'>
          <label htmlFor='cpf'>
            CPF
          </label>
          <input 
            type="number" 
            placeholder='000.000.000-00' 
            id='cpf'
            {...register("cpf")}
            />
        </InputContainer>

        <InputContainer size='60%'>
          <label htmlFor='nasciResponsavel'>
            Data Nasc. Responsável
          </label>
          <input 
            type="date" 
            placeholder='00/00/0000'
            id='nasciResponsavel'
            {...register("nasciResponsavel")}
          />
        </InputContainer>

        <InputContainer size='pequeno'>
          <label htmlFor='telefone'>
            Telefone
          </label>
          <input 
            type="number" 
            id='telefone'
            {...register("telefone")}
          />
        </InputContainer>

          
        <InputContainer size='pequeno'>
          <label htmlFor=''>
            Celular
          </label>
          <input 
            type="number" 
            id='celular'
            {...register("celular")}
          />
        </InputContainer>

        <InputContainer size='grande'>
          <label htmlFor='emailResponsavel'>
            Email Responsável
          </label>
          <input 
            type="email"
            id='emailResponsavel'
            {...register("emailResponsavel")}
          />
        </InputContainer>

        <InputContainer size='pequeno'>
          <label htmlFor='cep'>
            CEP
          </label>
          <input 
            type="text" 
            id='cep'
            {...register("cep")}
          />
        </InputContainer>

        <InputContainer size='pequeno'>
          <label htmlFor='tipoLogradouro'>
            Tipo Logradouro
          </label>
          <select 
            required
            id="tipoLogradouro" 
            {...register("tipoLogradouro")}
          >
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
          <input 
            required
            type="text" 
            id='cidade' 
            {...register("cidade")}
          />
        </InputContainer>


        <InputContainer size='pequeno'>
          <label htmlFor="UF">UF</label>
          <select 
            required
            id="UF" 
            {...register("UF")}
          >
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
          <input 
            required
            type="text"
            id='endereco' 
            {...register("endereco")}
           />
        </InputContainer>

        <InputContainer size='50%'>
          <label htmlFor='numero'>
            Número
          </label>
          <input 
            required
            type="number" 
            id='numero' 
            {...register("numero")}
          />
        </InputContainer>

        <InputContainer size='pequeno'>
          <label htmlFor='complemento'>
            Complemento
          </label>
          <input 
            type="text" 
            id='complemento'
            {...register("complemento")}
          />
        </InputContainer>

        <InputContainer size='grande'>
          <label htmlFor='bairro'>
            Bairro
          </label>
          <input 
            required
            type="text" 
            id='bairro' 
            {...register("bairro")}
          />
        </InputContainer>

        <InputContainer size='100%'>
          <label htmlFor='bairro'>
          Observação
          </label>
          <textarea 
            id="Observação"
            {...register("tipoLogradouro")}
          >
          </textarea>           
        </InputContainer>        
      </DadosPessoais> 

      <ContainerButton>  

        <Link to='/'>
          <button type="submit" name="salvar">
            Salvar
          </button>
        </Link>         
        <Link to='/'>
          <button name="cancelar">
            Cancelar
          </button>
        </Link>
        
      </ContainerButton>
      
      
    </FormularioContainer>
  );
}