import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { TabelaClientes } from './components/TabelaClientes';
import { GlobalStyle } from './styles/global';
import {  BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={ <TabelaClientes /> }/>
          <Route path='novoCliente' element={ <Formulario /> } />          
        </Routes>
      </BrowserRouter>
    </>
  );
}
