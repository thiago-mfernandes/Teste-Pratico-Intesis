import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";
import {v4 as uuidv4} from 'uuid';

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
  createClient: (cliente: Object) => Promise<void>;
}

export const ClientesContext = createContext<CLientesContextProps>({} as CLientesContextProps);

export function ClientesProvider({ children }: ClienteContextProviderProps) {  
  const [clientes, setClientes] = useState<Clientes[]>([]);

  useEffect(() => {
    api.get('/clientes')
      .then(response => setClientes(response.data.clientes))
  }, [])

  async function createClient(cliente: Object) {
    const dataForm = {
      id: uuidv4(),
      ...cliente
    }
    const response = await api.post('/clientes', dataForm);
    //acessar o cliente em:
    //const { novoCliente } = response.data;
    //console.log("no context",novoCliente);
    setClientes([
      ...clientes,
      response.data.clientes
    ]);

    console.log("log de dentro do context", clientes);
  }

  return (
    <ClientesContext.Provider value={{ clientes, createClient}}>
      {children}
    </ClientesContext.Provider>
  );

}