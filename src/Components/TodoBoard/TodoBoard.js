import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';

const TodoBoard = () => {
    const [openModal,setOpenModal] = useState(false);
    const handleClick = (e)=>{
        e.preventDefault();
        //e.stopPropagation();
        console.log('hi');
    }
    return (
        <div onContextMenu={handleClick} className='w-96 h-44 bg-rose-500 rounded-lg'>
            <div>
                <button onClick={()=>setOpenModal(true)} className='px-4 py-2 rounded-sm bg-teal-500'>New Task</button>
            </div>
            {openModal && <TodoForm setOpenModal={setOpenModal}/>}
        </div>
    );
};

export default TodoBoard;