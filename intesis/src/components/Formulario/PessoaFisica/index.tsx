import { 
  ContainerButton, 
  DadosPessoais, 
  DadosResidenciais, 
  FormularioContainer, 
  InputContainer } from "./styles";

import estadoCivil from "../../../data/estadoCivil.json";
import unidadeFederativa from "../../../data/unidadeFederative.json";
import tipoLogradouro from '../../../data/tipoLogradouro.json';

import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ClientesContext } from "../../../ClientsContext";
import { Erro } from '../Erro';

import InputMask from 'react-input-mask';


export function PessoaFisica() {

  const { adicionarCliente, cliente } = useContext(ClientesContext);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: cliente
  });

  async function onSubmit(data: Object) {
    await adicionarCliente(data);    
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
            defaultValue={cliente.nome}
            id="nome" 
            {...register("nome", { required: true})}
            type="text" 
          />
          {errors.nome && <Erro/>}
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
          <InputMask
            mask="999.999.999-99" 
            type="text" 
            placeholder="000.000.000-00" 
            id="cpf" 
            {...register("cpf", { required: true})}
          />
          {errors.cpf && <Erro/>}
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="nascimentoResponsavel">
            Data Nasc. Responsável
          </label>
          <InputMask 
            mask="99/99/9999"
            type="text" 
            placeholder="00/00/0000" 
            id="nascimentoResponsavel"
            {...register("nascimentoResponsavel")}
          />
        </InputContainer>

        <InputContainer size="40%">
          <label htmlFor="EstadoCivil">Estado Civil</label>
          <select 

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
          <InputMask  
            mask="99.999.999-*" 
            placeholder="00.000.000-0"
            type="text" 
            id="rg" 
            {...register("rg", { required: true})}
          />
          {errors.rg && <Erro/>}
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
            id="UF"
            {...register("UF", { required: true})}
          >
            {
              unidadeFederativa.map((item, index) => (
                <option key={index} value={item.uf}>{item.uf}</option>
              ))
            }
          </select>
          {errors.UF && <Erro/>}
        </InputContainer>

        <InputContainer size="pequeno">
          <label htmlFor="cnh">
            CNH
          </label>
          <InputMask  
            mask="99999999999" 
            placeholder="00000000000"
            type="text" 
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
            type="number" 
            id="cei"
            {...register("cei")}
          />
        </InputContainer>

        <InputContainer size="100%">
          <label htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            id="email"
            {...register("email", { required: true})} 
          />
          {errors.email && <Erro/>}
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="telefone">
            Telefone
          </label>
          <InputMask
            mask="(99)9999-9999" 
            placeholder="(00)0000-0000"
            type="text" 
            id="telefone"
            {...register("telefone")}
          />
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="celular">
            Celular
          </label>
          <InputMask 
            mask="(99)9 9999-9999" 
            placeholder="(00)0 0000-0000"
            type="text" 
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
          <InputMask
            mask="99999-999" 
            placeholder="00000-000" 
            type="text" 
            id="cep" 
            {...register("cep", { required: true})}
          />
          {errors.cep && <Erro/>}
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="cidade">
            Cidade
          </label>
          <input 
            type="text" 
            id="cidade" 
            {...register("cidade", { required: true})}
          />
        </InputContainer>

        <InputContainer size="40%">
          <label htmlFor="UF">UF</label>
          <select 
            id="UF" 
            {...register("UF", { required: true})}
          >
            {
              unidadeFederativa.map((item, index) => (
                <option key={index} value={item.uf}>{item.uf}</option>
              ))
            }
          </select>
          {errors.UF && <Erro/>}
        </InputContainer>

        <InputContainer size='pequeno'>
          <label htmlFor='tipoLogradouro'>
            Tipo Logradouro
          </label>
          <select 
            id="tipoLogradouro" 
            {...register("tipoLogradouro", { required: true})}
          >
            {
              tipoLogradouro.map((item, index) => (
                <option key={index} value={item.tipo}>{item.tipo}</option>
              ))
            }
          </select>
          {errors.tipoLogradouro && <Erro/>}
        </InputContainer>

        <InputContainer size="grande">
          <label htmlFor="endereco">
            Endereço
          </label>
          <input 
            type="text" 
            id="endereco" 
            {...register("endereco", { required: true})}
          />
          {errors.endereco && <Erro/>}
        </InputContainer>

        <InputContainer size='50%'>
          <label htmlFor='numero'>
            Número
          </label>
          <input 
            type="number" 
            id='numero' 
            {...register("celular", { required: true})}
          />
          {errors.numero && <Erro/>}
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
            type="text" 
            id="bairro" 
            {...register("celular", { required: true})}
          />
          {errors.bairro && <Erro/>}
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
        <button type="submit" name="salvar">
          Salvar
        </button>
        <Link to="/">
          <button type="reset" name="cancelar">
            Cancelar
          </button>
        </Link>
      </ContainerButton>

    </FormularioContainer>
  );
}