import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <div className="carga"></div>
      <p>Cargando TODOs...</p>
    </div>
  );
}

export { TodosLoading };