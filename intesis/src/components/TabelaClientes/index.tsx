import { Table, Container, BotaoAdicionar, ContainerSearch } from './styles';
import { PencilSimple, UserMinus, ArrowUp, PlusCircle, MagnifyingGlass } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ClientesContext } from '../../ClientsContext';
import { Clientes } from '../../ClientsContext'


export function TabelaClientes() {
  
  const { clientes, deletarCliente, editarCliente } = useContext(ClientesContext);  
  console.log("Tabela Clientes state =>", clientes);

  const[busca, setBusca] = useState('');
  console.log("Tabela Clientes state busca =>", busca);

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
          <input 
            type="search" 
            id="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </ContainerSearch>  
      </Container>

      <Table>
        <thead>
          <tr>
            <th id="id">ID</th>
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
            // eslint-disable-next-line array-callback-return
            clientes.filter((value) => {
              if(busca === '') {
                //retorna todo o mock
                return value;
              } else if(value.razaoSocial.includes(busca)){
                //retorna somente o que der match
                return value;
              }
            }).map((cliente: Clientes) => (
              <tr key={cliente.id}>
                <td id="id">{cliente.id}</td>
                <td>{cliente.razaoSocial !== '' ? cliente.razaoSocial : cliente.nome}</td>
                <td>{cliente.cnpj !== '' ? cliente.cnpj : cliente.cpf}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.celular}</td>
                <td>
                  <button onClick={() => editarCliente(cliente.id)}>
                    <PencilSimple color='#2873B6'/>
                  </button>
                </td>
                <td>
                  <button onClick={() => deletarCliente(cliente.id)}>
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