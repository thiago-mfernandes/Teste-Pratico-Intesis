//import styled from 'styled-components';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { TabelaClientes } from './components/TabelaClientes';
import { GlobalStyle } from './styles/global';

import { PlusCircle } from 'phosphor-react';


export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <button>
        <PlusCircle />
        Cliente
      </button> {/**enviar para cadastro */}
      <input type="text" />

      <TabelaClientes />
      <Formulario />
    </div>
  );
}
