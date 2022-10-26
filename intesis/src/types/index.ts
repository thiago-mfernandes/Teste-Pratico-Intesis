import { ReactNode } from "react";

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
  nomeCompleto?: string;
  nomeFantasia?: string;
  nomeResponsavel: string;
  numero: string;
  razaoSocial: string;
  telefone: string;
  tipoLogradouro: string;
}

export interface ClienteContextProviderProps {
  children: ReactNode;
}

export interface CLientesContextProps {
  clientes: Clientes[];
  setClientes: React.Dispatch<React.SetStateAction<Clientes[]>>
  cliente: any;
  adicionarCliente: (cliente: Object) => Promise<void>;
  deletarCliente: (id: string) => void;
  obterClienteId: (id: string) => Promise<void>;
  editarCliente: (id: string, data: Object) => Promise<void>;
}

export interface InputContainerProps {
  size: string;
  direction?: string;
  align?: string;
}