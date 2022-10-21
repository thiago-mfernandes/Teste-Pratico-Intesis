import { Table, Container, BotaoAdicionar, ContainerSearch } from './styles';
import { PencilSimple, UserMinus, ArrowUp, PlusCircle, MagnifyingGlass } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function TabelaClientes() {
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
          <tr>
            <td>1</td>
            <td>Cerri & Santos Equipamentos</td>
            <td>23.123.456/0001-01</td>
            <td>assistech19@gmail.com</td>
            <td>19 3456-7890</td>
            <td>19 98765-4321</td>
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

          <tr>
            <td>1</td>
            <td>Cerri & Santos Equipamentos</td>
            <td>23.123.456/0001-01</td>
            <td>assistech19@gmail.com</td>
            <td>19 3456-7890</td>
            <td>19 98765-4321</td>
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

          <tr>
            <td>1</td>
            <td>Cerri & Santos Equipamentos</td>
            <td>23.123.456/0001-01</td>
            <td>assistech19@gmail.com</td>
            <td>19 3456-7890</td>
            <td>19 98765-4321</td>
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
          
        </tbody>
      </Table>
    </>
  );
}