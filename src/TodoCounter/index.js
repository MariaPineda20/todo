import React from 'react' ;
import { TodoContext } from '../TodoContext/index';

import './counter.css';

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <h2 className='counter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export {TodoCounter};