import React from 'react';

import './item.css'

function TodoItem(props) {

const onCompleted = () =>{
  alert('Ya completaste el TODO ' + props.text);
};

const onDeleted = () =>{
  alert('Borraste el TODO ' + props.text);
};

  return ( 
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        ᄼ 
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export {TodoItem};