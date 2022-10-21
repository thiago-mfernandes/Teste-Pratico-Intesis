import { 
  ContainerButton, 
  DadosPessoais, 
  DadosResidenciais, 
  FormularioContainer, 
  InputContainer } from "./styles";

import estadoCivil from "../../../data/estadoCivil.json";
import unidadeFederativa from "../../../data/unidadeFederative.json";

import { Link } from "react-router-dom";

import { useForm } from 'react-hook-form';

import { useContext } from "react";
import { ClientesContext } from "../../../ClientsContext";

export function PessoaFisica() {

  const { register, handleSubmit, formState: { errors }} = useForm();
  const { clientes, createClient } = useContext(ClientesContext);

  async function onSubmit(data: Object) {
    await createClient(data);    
  }


  return(
    <FormularioContainer 
      onSubmit={handleSubmit(onSubmit)}
    >

      <DadosPessoais>
        <InputContainer size="grande">
          <label htmlFor="nome">
            Nome Completo
          </label>
          <input 
            required
            id="nome" 
            {...register("nome")}
            type="text" 
          />
        </InputContainer>

        <InputContainer size="grande">
          <label htmlFor="apelido">
            Apelido
          </label>
          <input 
            id="apelido"
            {...register("apelido")}
            type="text" 
          />
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="cpf">
            CPF
          </label>
          <input 
            required
            type="number" 
            placeholder="000.000.000-00" 
            id="cpf" 
            {...register("cpf")}
          />
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="nascimentoResponsavel">
            Data Nasc. Responsável
          </label>
          <input 
            type="date" 
            placeholder="00/00/0000" 
            id="nascimentoResponsavel"
            {...register("nascimentoResponsavel")}
          />
        </InputContainer>

        <InputContainer size="40%">
          <label htmlFor="EstadoCivil">Estado Civil</label>
          <select 
              required
              id="EstadoCivil" 
              {...register("EstadoCivil")}
            >
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
          <input 
            required
            type="text" 
            id="rg" 
            {...register("rg")}
          />
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="orgaoEmissor">
            Órgão Emissor
          </label>
          <input 
            type="text" 
            id="orgaoEmissor"
            {...register("orgaoEmissor")}
          />
        </InputContainer>

        <InputContainer size="40%">
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

        <InputContainer size="pequeno">
          <label htmlFor="cnh">
            CNH
          </label>
          <input 
            type="number" 
            id="cnh"
            {...register("cnh")}
          />
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="seguranca">
            Segurança
          </label>
          <input 
            type="number" 
            id="seguranca"
            {...register("seguranca")}
          />
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="cei">
            CEI
          </label>
          <input 
            type="text" 
            id="cei"
            {...register("cei")}
          />
        </InputContainer>

        <InputContainer size="100%">
          <label htmlFor="email">
            Email
          </label>
          <input 
            required
            type="email" 
            id="email"
            {...register("email")} 
          />
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="telefone">
            Telefone
          </label>
          <input 
            type="number" 
            id="telefone"
            {...register("telefone")}
          />
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="celular">
            Celular
          </label>
          <input 
            type="number" 
            id="celular"
            {...register("celular")}
          />
        </InputContainer>
      </DadosPessoais>

      <DadosResidenciais>
        <InputContainer size="pequeno">
          <label htmlFor="cep">
            CEP
          </label>
          <input 
            required
            type="number" 
            id="cep" 
            {...register("cep")}
          />
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="cidade">
            Cidade
          </label>
          <input 
            required
            type="text" 
            id="cidade" 
            {...register("cidade")}
          />
        </InputContainer>

        <InputContainer size="40%">
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

        <InputContainer size="grande">
          <label htmlFor="endereco">
            Endereço
          </label>
          <input 
            required
            type="text" 
            id="endereco" 
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
            {...register("celular")}
          />
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="complemento">
            Complemento
          </label>
          <input 
            type="text" 
            id="complemento"
            {...register("complemento")}
          />
        </InputContainer>

        <InputContainer size="grande">
          <label htmlFor="bairro">
            Bairro
          </label>
          <input 
            required
            type="text" 
            id="bairro" 
            {...register("celular")}
          />
        </InputContainer>        

        <InputContainer size='100%'>
          <label htmlFor='Observação'>
            Observação
          </label>
          <textarea 
            id="observacao"
            {...register("observacao")}
          ></textarea>           
        </InputContainer> 
      </DadosResidenciais>

      <ContainerButton>
        <Link to="/">
          <button type="submit" name="salvar">
            Salvar
          </button>
        </Link>
        <Link to="/">
          <button name="cancelar">
            Cancelar
          </button>
        </Link>
      </ContainerButton>

    </FormularioContainer>
  );
}