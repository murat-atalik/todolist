import './toDo.scss';

import React from 'react';

function ToDo({ job, callback }) {
  return (
    <div className="todo-container">
      <button
        type="button"
        onClick={() => callback(job.id)}
        className={`todo-button-${job.isDone ? 'done' : 'waiting'}`}
      >
        {job.name}
      </button>
      <hr className="line-break" />
    </div>
  );
}

export default ToDo;
