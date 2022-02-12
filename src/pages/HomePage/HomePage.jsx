import './homePage.scss';

import React, { useReducer, useState } from 'react';

import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import ToDoList from '../../components/ToDoList/ToDoList';

const initialTodoList = [
  { id: 0, name: 'Learn React', isDone: false },
  { id: 1, name: 'Learn Redux', isDone: true },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.isDone !== true);
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });

    default:
      return state;
  }
};

function HomePage() {
  const [todoList, dispatch] = useReducer(reducer, initialTodoList);
  const [todoName, setTodoName] = useState('');

  const addTodo = () => {
    let tempId = 0;
    if (todoList.length > 0) {
      tempId = todoList[todoList.length - 1].id + 1;
    }
    const form = {
      id: tempId,
      name: todoName,
      isDone: false,
    };
    dispatch({ type: 'ADD_TODO', payload: form });
    setTodoName('');
  };

  const removeTodo = () => {
    dispatch({ type: 'REMOVE_TODO' });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const handleTodoForm = (e) => {
    setTodoName(e.target.value);
  };

  return (
    <div className="home-page">
      <Header />
      <div className="home-page-container">
        <ToDoList
          list={todoList}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
        <Form
          todoName={todoName}
          handleTodoForm={handleTodoForm}
          addTodo={addTodo}
        />
      </div>
    </div>
  );
}

export default HomePage;
