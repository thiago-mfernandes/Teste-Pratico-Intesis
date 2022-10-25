import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from "react-router-dom";

export interface Clientes {
  UF: string;
  ativo: boolean;
  bairro: string;
  celular: string;
  cep: string;
  cidade: string;
  cnpj?: string;
  complemento: string;
  contribuinte: string;
  cpf?: string;
  email: string;
  endereco: string;
  id: string;
  incEstadual: string;
  incMunicipal: string;
  nasciResponsavel: string;
  nome?: string;
  nomeFantasia?: string;
  nomeResponsavel: string;
  numero: string;
  razaoSocial: string;
  telefone: string;
  tipoLogradouro: string;
}

interface ClienteContextProviderProps {
  children: ReactNode;
}

interface CLientesContextProps {
  clientes: Clientes[];
  cliente: any;
  adicionarCliente: (cliente: Object) => Promise<void>;
  deletarCliente: (id: string) => void;
  editarCliente: (id: string) => Promise<void>;
}

export const ClientesContext = createContext<CLientesContextProps>({} as CLientesContextProps);

export function ClientesProvider({ children }: ClienteContextProviderProps) {  

  const navigate = useNavigate();
  const [clientes, setClientes] = useState<Clientes[]>([]);
  const [cliente, setCliente] = useState({});

  //listar clientes na tabela
  useEffect(() => {
    api.get('/clientes')
      .then((response) => setClientes(response.data))
  }, []) 


  async function adicionarCliente(cliente: Object) {

    const dataForm = {
      id: uuidv4(),
      ...cliente
    }

    //console.log(dataForm);
  
    await api
      .post('/clientes', dataForm)
        .then(() => {
        api.get('/clientes')
          .then(response => setClientes(response.data))
      });

    navigate("/");
  }

  function deletarCliente(id: string) {
    api.delete(`/clientes/${id}`)
    .then(() => {
      api.get('/clientes')
        .then(response => setClientes(response.data))
    });
  }

  async function editarCliente(id: string) {

    const { data } = await api.get(`/clientes/${id}`);
    setCliente(data);
    




    //console.log(request);
    // await api.put(`/editarCliente/${id}`)
    //   .then(() => {
    //     api.get('/clientes')
    //     .then(response => {
    //       const clienteEdit = clientes.find(cliente => cliente.id === id);
    //       //parado aqui, apenas pegando o id do cliente
    //       console.log("ClientesContext function editarCliente =>", clienteEdit);
    //     })
    //   })

  }

  return (
    <ClientesContext.Provider value={{ clientes, cliente, adicionarCliente, deletarCliente, editarCliente }}>
      {children}
    </ClientesContext.Provider>
  );

}