import React, { useState, useEffect } from 'react';
import Todo from "./components/Todo";
import Filter from "./components/Filter";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { buscarItens } from './services/api';

const App = () => {
  const [itens, setItens] = useState([]);
  const [item, setItem] = useState(null);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    const carregarItens = async () => {
      setLoading(true);
      const itensCarregados = await buscarItens(filter);
      setItens(itensCarregados);
      setLoading(false);
    };
    carregarItens();
  }, [filter]);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Filter filter={filter} setFilter={setFilter} /> 
      {loading && <p>Carregando...</p>}
      <div className="todo-list">
            <Todo 
              itens={itens}
              setItens={setItens}
              setItem={setItem}
              setModoEdicao={setModoEdicao}
            />
      </div>
      <TodoForm item={item} setItens={setItens} modoEdicao={modoEdicao} setModoEdicao={setModoEdicao} />
    </div>
  );
};

export default App;