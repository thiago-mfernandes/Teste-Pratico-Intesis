import { Table, Container, BotaoAdicionar, ContainerSearch } from './styles';
import { PencilSimple, UserMinus, ArrowUp, PlusCircle, MagnifyingGlass } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ClientesContext } from '../../ClientsContext';
import { Clientes } from '../../ClientsContext'


export function TabelaClientes() {

  const { clientes } = useContext(ClientesContext);
  console.log(clientes);

  return (
    <>
      <Container>
        <Link to="/novoCliente">
          <BotaoAdicionar>
            <PlusCircle size={20}/>
            Cliente
          </BotaoAdicionar>
        </Link>

        <ContainerSearch>
          <label htmlFor="search">
            <MagnifyingGlass color='#2873B6' size={20}/>
          </label>
          <input type="search" id="search"/>
        </ContainerSearch>  
      </Container>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome/Razão Social <ArrowUp size={18}/></th>
            <th>CPF/CNPJ</th>
            <th>Email</th>
            <th>Tel</th>
            <th>Cel</th>
            <th>{' '}</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          {
            clientes.map((cliente: Clientes) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.razaoSocial !== '' ? cliente.razaoSocial : cliente.nome}</td>
                <td>{cliente.cnpj !== '' ? cliente.cnpj : cliente.cpf}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.celular}</td>
                <td>
                  <button>
                    <PencilSimple color='#2873B6'/>
                  </button>
                </td>
                <td>
                  <button>
                    <UserMinus color='#EA3F7A'/>
                  </button>
                </td>
              </tr>   
            ))
          }
        </tbody>
      </Table>
    </>
  );
}