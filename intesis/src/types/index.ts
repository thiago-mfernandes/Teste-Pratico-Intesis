import { ReactNode } from "react";

export interface Clientes {
  UF: string;
  ativo: boolean;
  apelido: string;
  bairro: string;
  celular: string;
  cep: string;
  cei: number;
  cidade: string;
  cnh?: string;
  cnpj?: string;
  complemento: string;
  contribuinte: string;
  cpf?: string;
  email?: string;
  emailResponsavel?: string;
  endereco: string;
  estadoCivil: string;
  id: string;
  inscEstadual: string;
  inscMunicipal: string;
  nasciResponsavel: string;
  nomeCompleto?: string;
  nomeFantasia?: string;
  nomeResponsavel: string;
  numero: string;
  observacao?: string;
  orgaoEmissor: string;
  razaoSocial: string;
  rg: string;
  seguranca: string;
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