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


  async function adicionarCliente(cliente: Object) {
    const dataForm = {
      id: uuidv4(),
      ...cliente
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