import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v1'
});

export const buscarItens = async (filtro) => {
  let url = '/Tarefas'; 

  if (filtro && filtro !== 'Todos') {
    url += `?Status=${filtro}`;
  }

  const response = await api.get(url);
  return response.data;
};

export const criarItem = async (item) => {
  const response = await api.post('/Tarefas', item);
  return response.data;
};

export const atualizarItem = async (id, item) => {
  const response = await api.put(`/Tarefas/${id}`, item);
  return response.data;
};

export const deletarItem = async (id) => {
  await api.delete(`/Tarefas/${id}`);
};