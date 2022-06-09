import React from 'react';

const TodoForm = ({ setOpenModal, todos, setTodos }) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const todo = {
            id:todos.length+1,
            title,
            description
        }
        const newTodos = [...todos,todo]
        setTodos(newTodos);
        localStorage.setItem('todos',JSON.stringify(newTodos));
        setOpenModal(false);
    }
    return (
        <div className='bg-white p-6 rounded-lg w-96 h-max shadow-2xl absolute top-0 left-0 right-0 bottom-0 m-auto'>
            <button onClick={() => setOpenModal(false)} className='absolute p-2 w-6 h-6 rounded-full top-2 right-3 bg-rose-600 text-white font-extrabold flex justify-center items-center'>x</button>
            <form action="" onSubmit={handleSubmit}>
                <div className=''>
                    <label htmlFor="title">Title</label><br />
                    <input className='bg-slate-200 p-1 w-full rounded-md outline-teal-400' type="text" name='title' placeholder='add a title' />
                </div>
                <div className=''>
                    <label htmlFor="text">Description</label><br />
                    <textarea className='bg-slate-200 p-1 w-full rounded-md outline-teal-400' name="description" placeholder='write a description...' rows={5}></textarea>
                </div>
                <input className='p-2 rounded-md bg-rose-500 text-white' type="submit" value="Add"/>
            </form>
        </div>
    );
};

export default TodoForm;