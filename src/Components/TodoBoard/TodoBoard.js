import React, { useEffect, useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';

const TodoBoard = () => {
    const [openModal, setOpenModal] = useState(false);
    const [addTodo, setAddTodo] = useState('');
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        let localTodos = JSON.parse(localStorage.getItem('todos'));
        if(localTodos){
            setTodos(localTodos)
        }
    },[])
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setAddTodo(e);
    }
    const handleTodo = (e,id)=>{
        e.preventDefault();
        console.log(id);
    }
    return (
        <div className='w-96 h-44 bg-white shadow-2xl rounded-lg'>
            <h2 className='text-center text-xl text-gray-700 font-semibold uppercase'>Add Todo</h2>
            <div onContextMenu={handleClick} className='todos w-full h-full relative'>

                {
                    todos.map((todo, index) => <div onContextMenu={(e)=>handleTodo(e,todo.id)} key={index} className='flex flex-col m-2 bg-white shadow-xl'>
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                    </div>)
                }

                {
                    addTodo && <button onClick={(e) => setOpenModal(true)} className={`px-4 py-2 rounded-sm bg-teal-500 absolute`} style={{ top: addTodo.pageY, left: addTodo.pageX }}>New Task</button>
                }
            </div>
            {openModal && <TodoForm setOpenModal={setOpenModal} todos={todos} setTodos={setTodos} />}
        </div>
    );
};

export default TodoBoard;