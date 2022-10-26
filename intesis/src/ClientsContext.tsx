import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ClienteContextProviderProps, Clientes, CLientesContextProps } from "./types";

import { api } from "./services/api";
import {v4 as uuidv4} from "uuid";


export const ClientesContext = createContext<CLientesContextProps>({} as CLientesContextProps);

export function ClientesProvider({ children }: ClienteContextProviderProps) {  

  const navigate = useNavigate();
  const [clientes, setClientes] = useState<Clientes[]>([]);
  const [cliente, setCliente] = useState({});

  //listar clientes na tabela
  useEffect(() => {
    api.get("/clientes")
      .then((response) => setClientes(response.data))
  }, []) 

  function onlyNumbers(str:string) {
    if(str) {
      return str.replace(/[^0-9]/g, '');
    } else {
      return '';
    }
  }

  async function adicionarCliente(cliente: any) {

    const dataForm = {
      id: uuidv4(),
      UF: cliente.UF,
      ativo: cliente.ativo,
      apelido: cliente.apelido,
      bairro: cliente.bairro,
      cei: cliente.cei,
      celular: onlyNumbers(cliente.celular),
      cep: onlyNumbers(cliente.cep),
      cidade: cliente.cidade,
      cnh: onlyNumbers(cliente.cnh),
      cnpj: onlyNumbers(cliente.cnpj),
      complemento: cliente.complemento,
      contribuinte: cliente.contribuinte,
      cpf: onlyNumbers(cliente.cpf),
      email: cliente.email,
      emailResponsavel: cliente.emailResponsavel,
      endereco: cliente.endereco,
      estadoCivil: cliente.estadoCivil,
      inscEstadual: onlyNumbers(cliente.inscEstadual),
      inscMunicipal: onlyNumbers(cliente.inscMunicipal),
      nasciResponsavel: onlyNumbers(cliente.nasciResponsavel),
      nomeCompleto: cliente.nomeCompleto,
      nomeFantasia: cliente.nomeFantasia,
      nomeResponsavel: cliente.nomeResponsavel,
      numero: cliente.numero,
      observacao: cliente.observacao,
      orgaoEmissor: cliente.orgaoEmissor,
      razaoSocial: cliente.razaoSocial,
      rg: onlyNumbers(cliente.rg),
      seguranca: cliente.seguranca,
      telefone: onlyNumbers(cliente.telefone),
      tipoLogradouro: cliente.tipoLogradouro,
    }  
    
    await api
    .post("/clientes", dataForm)
      .then(() => {
      api.get("/clientes")
        .then(response => setClientes(response.data))
    });

    navigate("/");    
  }
  

  function deletarCliente(id: string) {
    api.delete(`/clientes/${id}`)
    .then(() => {
      api.get("/clientes")
        .then(response => setClientes(response.data))
    });
  }

  async function obterClienteId(id: string) {
    const { data } = await api.get(`/clientes/${id}`);
    setCliente(data);
  }

  async function editarCliente(id: string, data: Object) {
    console.log("inside context =>", data);
    await api.put(`/clientes/${id}`, data)
    .then(() => {
      api.get("/clientes")
        .then(response => setClientes(response.data))
    });
    navigate("/")
  }

  return (
    <ClientesContext.Provider value={{ 
        clientes, 
        cliente, 
        adicionarCliente, 
        deletarCliente, 
        obterClienteId, 
        setClientes, 
        editarCliente
      }}>
      {children}
    </ClientesContext.Provider>
  );

}