import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Erro } from "../Erro";

import unidadeFederativa from "../../../data/unidadeFederative.json";
import tipoLogradouro from "../../../data/tipoLogradouro.json";

import { 
  DadosEmpresariais, 
  DadosPessoais, 
  FormularioContainer, 
  InputContainer, GrupoEscolha, ContainerButton } from "./styles";

import { ClientesContext } from "../../../ClientsContext";
import InputMask from "react-input-mask";


export function PessoaJuridica() {

  const { id } = useParams();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { adicionarCliente, cliente, editarCliente } = useContext(ClientesContext);

  async function onSubmit(data: Object) {
    if(id) {
      await editarCliente(id, data);
    } else {
      await adicionarCliente(data);
    }
  }

  useEffect(() => {
    if (id) {
      reset(cliente);
    }
  }, [cliente]);

  return (
    <FormularioContainer 
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
    >

      <DadosEmpresariais>  
        <InputContainer size="grande">
          <label htmlFor="razaoSocial">
            Razão Social
          </label>
          <input 
            type="text" 
            id="razaoSocial" 
            {...register("razaoSocial", { required: true})}
          />
          {errors.razaoSocial && <Erro/>}
        </InputContainer>

        <InputContainer size="grande">
          <label htmlFor="nomeFantasia">
            Nome Fantasia
          </label>
          <input 
            type="text" 
            id="nomeFantasia" 
            {...register("nomeFantasia", { required: true})}
          />
          {errors.nome && <Erro/>}
        </InputContainer>

        <InputContainer size="" direction="row" align="flex-end">
          <input 
            type="checkbox" 
            id="ativo"
            {...register("ativo")}
          />
          <label htmlFor="ativo">
            Ativo
          </label>
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="cnpj">
            CNPJ
          </label>
          <InputMask  
            mask="99.999.999/9999-99"
            type="text" 
            placeholder="00.000.000/0000-00"
            id="cnpj" 
            {...register("cnpj", { required: true})}
          />
          {errors.cnpj && <Erro/>}
        </InputContainer>

        <InputContainer size="60%" align="flex-start">
          <GrupoEscolha>
            <legend>Contruibuinte</legend>

            <label htmlFor="sim">Sim</label>
            <input 
              type="radio" 
              id="contribuinte"
              {...register("contribuinte")}
            />

            <label htmlFor="nao">Não</label>
            <input 
              checked
              type="radio" 
              id="contribuinte" 
              {...register("contribuinte")}
            />
          </GrupoEscolha>
        </InputContainer>        

        <InputContainer size="medio">
          <label htmlFor="inscEstadual">
            Insc. Estadual
          </label>
          <InputMask
            mask="999.999.999.999" 
            placeholder="000.000.000.000"
            type="text" 
            id="inscEstadual"
            {...register("inscEstadual", { required: true})}
          />
          {errors.inscEstadual && <Erro/>}
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="inscMunicipal">
            Insc. Municipal
          </label>
          <InputMask
            mask="999999" 
            placeholder="000000"
            type="text" 
            id="inscMunicipal"
            {...register("inscMunicipal", { required: true})}
          />
          {errors.inscMunicipal && <Erro/>}
        </InputContainer>

        <InputContainer size="grande">
          <label htmlFor="emailResponsavel">
            Email Responsável
          </label>
          <input 
            type="email"
            id="emailResponsavel"
            {...register("emailResponsavel", { required: true})}
            />
            {errors.email && <Erro/>}
        </InputContainer>

      </DadosEmpresariais>

      <DadosPessoais>        
        <InputContainer size="100%">
          <label htmlFor="nomeResponsavel">
            Nome do Responsável
          </label>
          <input 
            type="text" 
            id="nomeResponsavel"
            {...register("nomeResponsavel")}
          />
        </InputContainer>

        <InputContainer size="medio">
          <label htmlFor="cpf">
            CPF
          </label>
          <InputMask
            mask="999.999.999-99"
            type="text" 
            placeholder="000.000.000-00" 
            id="cpf"
            {...register("cpf")}
            />
        </InputContainer>

        <InputContainer size="60%">
          <label htmlFor="nasciResponsavel">
            Data Nasc. Responsável
          </label>
          <InputMask
            mask="99/99/9999" 
            type="text" 
            placeholder="00/00/0000"
            id="nasciResponsavel"
            {...register("nasciResponsavel")}
          />
        </InputContainer>

        <InputContainer size="pequeno">
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

          
        <InputContainer size="pequeno">
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

        <InputContainer size="grande">
          <label htmlFor="emailResponsavel">
            Email Responsável
          </label>
          <input 
            type="email"
            id="emailResponsavel"
            {...register("emailResponsavel", { required: true})}
          />
          {errors.emailResponsavel && <Erro/>}
        </InputContainer>

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

        <InputContainer size="pequeno">
          <label htmlFor="tipoLogradouro">
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
          <label htmlFor="cidade">
            Cidade
          </label>
          <input 
            type="text" 
            id="cidade" 
            {...register("cidade", { required: true})}
          />
          {errors.cidade && <Erro/>}
        </InputContainer>


        <InputContainer size="pequeno">
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

        <InputContainer size="50%">
          <label htmlFor="numero">
            Número
          </label>
          <input 
            type="number" 
            id="numero" 
            {...register("numero", { required: true})}
          />
          {errors.numero && <Erro/>}
        </InputContainer>

        <InputContainer size="pequeno">
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
            {...register("bairro", { required: true})}
          />
          {errors.bairro && <Erro/>}
        </InputContainer>

        <InputContainer size="100%">
          <label htmlFor="bairro">
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
