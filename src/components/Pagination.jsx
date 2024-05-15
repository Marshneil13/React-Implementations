import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card';

const Pagination = () => {
    const [todos, setTodos] = useState([]);
    const [todosPerPage, setTodosPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    console.log("CURRENT PAGE", currentPage);
    useEffect(() => {
    console.log("Trigger!");
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
        console.log("API Called");
        setTodos(res.data)})
    }, [])

    const totalPages = Math.ceil(todos.length/todosPerPage);
    const pages = [...Array(totalPages).keys()];
    console.log("PAGES", pages);
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    console.log("START", indexOfFirstTodo , "END" , indexOfLastTodo);
    const visibleTodos = todos.filter((todo,index) => index>=indexOfFirstTodo && index<indexOfLastTodo)
    console.log("ALL TODOS", todos);
    console.log("VISIBLE TODOS", visibleTodos);
    
  return (
    <div>
      <h1 style={{color: "red"}}>PAGINATION</h1>
      <label htmlFor="todosSelect">Todos Per Page </label>
      <select name="todos-select" id="todosSelect" onChange={(e) => {setTodosPerPage(e.target.value)}}>
        <option value="10" selected>10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
      <Card todos={visibleTodos}/>
      <span onClick={() => {if(currentPage!==1)setCurrentPage(currentPage-1)}}>Prev</span>
      <p>{pages.map(page=> <span key={page+1} onClick={() => {setCurrentPage(page+1)}} className={currentPage===page+1? "bold" : "no-bold"}>{page+1} | </span>)}</p>
      <span onClick={() => {if(currentPage!==20)setCurrentPage(currentPage+1)}}>Next</span>
    </div>
  )
}

export default Pagination
