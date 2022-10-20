import { Table } from './styles';
import { PencilSimple, UserMinus, ArrowUp } from 'phosphor-react';

export function TabelaClientes() {
  return (
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
  );
}