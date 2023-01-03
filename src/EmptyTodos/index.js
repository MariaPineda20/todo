import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {
  return(
  <div className='container'>
    <p>¡Crea tu primer TODO!</p>
    <img src="https://cdn-icons-png.flaticon.com/512/2666/2666436.png" alt="imagen de vacio"></img>
  </div>
  
  );
}

export { EmptyTodos };