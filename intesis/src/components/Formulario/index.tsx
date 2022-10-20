export function Formulario() {
  return (
    <>
      <h2>Adicionar Novo Cliente</h2>
      <form action="">
        {/*
          * fazer um estado no checkbox
          */}
        <label>
          <input type="checkbox" />
          Pessoa Jurídica
        </label>
        <label>
          <input type="checkbox" />
          Pessoa Física
        </label>

        <div>
          <button>Salvar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </>
  );
}