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

  thead th[id="id"] {
    width: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  td {
    padding: 0.25rem 0.5rem;
    border: 0;
    color: var(--textTable);
    border-bottom: 1px solid var(--textTable);
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  td button {
    border: none;
    background-color: transparent;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;

  a {
    align-self: flex-start;
    text-decoration: none;
  }
`;

export const ContainerSearch = styled.div`
  position: relative;
  align-self: flex-end;

  label {
    position: absolute;
    right: 50px;
    top: 0.4rem;
  }

  input {
    border-radius: 8px;
    border: 1px solid var(--input);
    margin-right: 2rem;
    height: 2rem;
    padding: 0.25rem 0.75rem;

    &:focus {
      outline: var(--textTable);
    }
  }
`;

export const BotaoAdicionar = styled.button`
  background-color: var(--blue);
  border: none;
  border-radius: 8px;
  width: 8rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  margin-top: 2rem;
  margin-left: 2rem;
  align-self: flex-start;
  padding: 0 1rem;
  transition: background-color .1s;
  &:hover {
    background-color: var(--blue-light);
  }

  & svg {
    margin: 0 0.5rem;
  }
`;