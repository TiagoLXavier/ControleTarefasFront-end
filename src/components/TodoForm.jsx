import React, { useState, useEffect } from 'react';
import { criarItem, atualizarItem, buscarItens } from '../services/api';

const TodoForm = ({ item, setItens, modoEdicao, setModoEdicao  }) => {
  const { id, titulo, descricao, status, dataCriacao, dataConclusao } = item || {};
  const [tituloState, setTituloState] = useState('');
  const [descricaoState, setDescricaoState] = useState( '');
  const [statusState, setStatusState] = useState('');
  const [dataCriacaoState, setDataCriacao] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null); 

  useEffect(() => {
    if (item) {
      setTituloState(titulo);
      setDescricaoState(descricao);
      setStatusState(status);
      setSelectedDate(dataConclusao ? new Date(dataConclusao).toISOString().split('T')[0] : null);
      setDataCriacao(dataCriacao);
    } 
  }, [item]);

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      if(!tituloState) return alert('Título é obrigatório'); 
      if(!statusState && modoEdicao) return alert('Status é obrigatório'); 
      if(!selectedDate && modoEdicao && statusState == "Concluida") return alert('Data de conclusão é obrigatória');
      if(modoEdicao && statusState == "Concluida" && selectedDate < dataCriacaoState) return alert('Data de conclusão não pode ser menor que a Data de criação');

      const novoItem = {titulo:tituloState,descricao: descricaoState, status:statusState };
   
      if (modoEdicao) {
        await atualizarItem(item.id, {id:item.id,titulo:tituloState,descricao: descricaoState,status: statusState ,dataConclusao: statusState == "Concluida" ? new Date(selectedDate).toISOString() : null});
      } else {
        await criarItem(novoItem);
      }
  
      const itensAtualizados = await buscarItens();
      setItens(itensAtualizados);
      setTituloState('');
      setDescricaoState('');
      setStatusState('');
      setSelectedDate('');
      setModoEdicao(false);
    };

    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };

  return (
    <div className="todo-form">
      <h2>{modoEdicao ? 'Atualizar tarefa:' : 'Criar tarefa:'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          maxLength={100} 
          value={tituloState}
          placeholder="Digite o título"
          onChange={(e) => setTituloState(e.target.value)}
        />
         <input
          type="text"
          className="input"
          maxLength={100} 
          value={descricaoState}
          placeholder="Digite a descricao"
          onChange={(e) => setDescricaoState(e.target.value)}
        />
    {modoEdicao ? (
      <div>
        <select value={statusState} onChange={(e) => setStatusState(e.target.value)}>
          <option value="">Selecione um status</option>
          <option value="Pendente">Pendente</option>
          <option value="EmAndamento">EmAndamento</option>
          <option value="Concluida">Concluida</option>
        </select>
        {statusState == "Concluida" ? (
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        ) : null}
      </div>
    ) : null}

        <button type="submit">{modoEdicao ? 'Atualizar' : 'Criar'}</button>
        {modoEdicao ? (
           <button onClick={()=>{
            setTituloState('')
            setDescricaoState('')
            setStatusState('')
            setModoEdicao(false)
          }}>{"Cancelar"}</button>
           ) : null}
      </form>
    </div>
  );
};

export default TodoForm;
