import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {v4 as uuidv4} from 'uuid';

import { createServer, Model } from 'miragejs';

interface ClienteProps {
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

createServer({
  //modelo de banco de dados
  models: {
    clientes: Model,
  },

  //pré-carregamento
  seeds(server) {
    server.db.loadData({
      clientes: [
        {
          ativo: true,
          bairro: "Vila Sônia",
          celular: "987654321",
          cep: "13456789",
          cidade: "Piracicaba",
          cnpj: "00.000.0000/0000-00",
          complemento: "bloco 12",
          contribuinte: "sim",
          cpf: "000.000.000-00",
          email: "thiago@gmail.com",
          endereco: "Av Independencia",
          id: uuidv4(),
          incEstadual: "0000000000",
          incMunicipal: "0000000000",
          nasciResponsavel: "01/01/1980",
          nome: "José da Silva",
          nomeFantasia: "José da Silva Sauro",
          nomeResponsavel: "José Silva",
          numero: "240",
          razaoSocial: "Casa de Máquinas",
          telefone: "1934343434",
          tipoLogradouro: "avenida"
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/clientes', () => {
      return this.schema.all('clientes');
    })

    this.post('/clientes', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('clientes', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
