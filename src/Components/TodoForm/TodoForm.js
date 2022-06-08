import React from 'react';

const TodoForm = ({ setOpenModal }) => {
    return (
        <div className='bg-white p-6 rounded-lg relative shadow-2xl'>
            <button onClick={() => setOpenModal(false)} className='absolute p-2 rounded-full text-xl top-3 right-3'>x</button>
            <form action="">
                <div className=''>
                    <label htmlFor="title">Title</label><br />
                    <input className='bg-slate-200 p-1 w-full rounded-md outline-teal-400' type="text" placeholder='add a title' />
                </div>
                <div className=''>
                    <label htmlFor="text">Description</label><br />
                    <textarea className='bg-slate-200 p-1 w-full rounded-md outline-teal-400' name="text" placeholder='write a description...'></textarea>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;