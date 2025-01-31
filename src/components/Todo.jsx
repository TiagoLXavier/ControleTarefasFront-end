import { deletarItem, buscarItens } from '../services/api';

const Todo = ({  itens, setItens, setItem, setModoEdicao  }) => {
    const handleDeletar = async (id) => {
        await deletarItem(id);
        const itensAtualizados = await buscarItens();
        setItens(itensAtualizados);
    };

    const handleEditar = async (item) => {
      setItem(item);
      setModoEdicao(true);
    };

    const formatDate = (dateString) => {
      if (!dateString) return ""; // Lida com datas nulas ou undefined
      const date = new Date(dateString);
      const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };
      return date.toLocaleDateString('pt-BR', options);
    };
   
  return (
    <ul>
    {itens.map((item) => (
       <div key={item.id}
      className="todo"
      style={{ textDecoration: item.dataConclusao ? "line-through" : "" }}
    >
      <div className="content">
        <p>{item.titulo}</p>
        <p>{item.descricao}</p>
        <p className="status">({item.status})</p>
        <div className="info">
        <p>Criado em: {formatDate(item.dataCriacao)}</p>
        {item.dataConclusao ? (<p>Concluído em: {formatDate(item.dataConclusao)}</p>) : null}
      </div>
      </div>
      <div>
        <button className="editar" onClick={() => handleEditar(item)}>
          Editar
        </button>
        <button className="remove" onClick={() => handleDeletar(item.id)}>
          x
        </button>
      </div>
    </div>
    ))}
  </ul>
  );
};

export default Todo;
