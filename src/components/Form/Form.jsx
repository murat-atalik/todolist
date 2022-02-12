import './form.scss';

import React from 'react';

import Button from '../Button/Button';

function Form({ todoName, handleTodoForm, addTodo }) {
  const handleEnter = (e) => {
    if (e.key === 'Enter' && todoName !== '') {
      addTodo();
    }
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={todoName}
        onChange={handleTodoForm}
        onKeyPress={handleEnter}
        placeholder="Add a new to-do"
        className="form-input"
      />
      <Button
        callback={addTodo}
        title="Submit"
        className={`${todoName === '' ? 'create-btn-disabled' : 'create-btn'}`}
        disabled={todoName === ''}
      />
    </div>
  );
}

export default Form;
