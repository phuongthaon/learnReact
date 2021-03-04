import React, {useState} from "react";
import PropTypes from "prop-types";
import TodoList from "../components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status:'completed',
    },
    {
      id: 2,
      title: "Sleep",
      status:'completed',
    },
    {
      id: 3,
      title: "Code",
      status:'new',
    },
  ];
  const [todoList,setTodoList] = useState(initTodoList);
  const handleTodoClick = (todo,idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',

    };
    setTodoList(newTodoList);
    console.log(todo,idx);
  }
  return <div>
      <h3>TodoList</h3>
      <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
  </div>;
}

export default TodoFeature;
