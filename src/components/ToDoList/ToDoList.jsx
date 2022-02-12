import './toDoList.scss';

import React from 'react';

import Button from '../Button/Button';
import ToDo from '../ToDo/ToDo';

function ToDoList({ list, removeTodo, toggleTodo }) {
  return (
    <div className="todo-list-container">
      <div>
        {list.map((todo) => (
          <ToDo job={todo} callback={toggleTodo} key={todo.id} />
        ))}
        {list.length === 0 && (
          <div className="empty-list">
            <p>That`s it for today : &#41; </p>
          </div>
        )}
      </div>
      <Button
        callback={removeTodo}
        title="Clear Completed"
        className="custom-btn"
        disabled={false}
      />
    </div>
  );
}

export default ToDoList;
