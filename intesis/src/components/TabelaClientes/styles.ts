import styled from 'styled-components';

export const Table = styled.table`
  width: calc(100% - 4rem);
  border-spacing: 0 0.5rem;
  margin: 0 auto;

  thead th {
    color: var(--blue);
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: left;
    line-height: 3rem;
    padding: 0.25rem 0.5rem;
  }

  td {
    padding: 0.25rem 0.5rem;
    border: 0;
    color: var(--textTable);
    border-bottom: 1px solid var(--textTable);
  }

  td button {
    border: none;
    background-color: transparent;
  }
`;

