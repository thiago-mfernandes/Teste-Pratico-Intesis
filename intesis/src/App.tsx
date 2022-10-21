import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { TabelaClientes } from './components/TabelaClientes';
import { GlobalStyle } from './styles/global';
import { MagnifyingGlass, PlusCircle } from 'phosphor-react';

import { Container, BotaoAdicionar, ContainerSearch } from './styles';


export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <Container>
        <BotaoAdicionar>
          <PlusCircle size={20}/>
          Cliente
        </BotaoAdicionar> {/**enviar para cadastro */}

        <ContainerSearch>
          <label htmlFor="search">
            <MagnifyingGlass color='#2873B6' size={20}/>
          </label>
          <input type="search" id="search"/>
        </ContainerSearch>  
      </Container>

      {/*<TabelaClientes /> */}
      <Formulario />
    </div>
  );
}
