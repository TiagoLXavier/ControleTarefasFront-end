import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">Todos</option>
            <option value="Pendente">Pendente</option>
            <option value="EmAndamento">EmAndamento</option>
            <option value="Concluida">Concluida</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
