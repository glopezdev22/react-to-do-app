import React from 'react'
import { useState } from 'react'

function Modal({ addTask, isOpen, setIsOpen }) {

    const [task, setTask] = useState({
        title: "",
        content: ""
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask({
            ...task,
            [name]:value
        });
    };

    const handleSubmit = () => {
        addTask(task)
        cleanFields();
        setIsOpen(false);
    }

    const cleanFields = () => {
        setTask({
            title: "",
            content: ""
        });
    };

    return (
        <div className='relative'>
            {
                isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-[#1e293b] border border-slate-700 p-6 rounded-xl shadow-2xl w-full max-w-md flex flex-col gap-4">
                            <input
                                className='w-full bg-slate-800 border border-slate-600 rounded-lg p-2 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500'
                                name='title'
                                placeholder="Tarea"
                                type="text"
                                value={task.title}
                                onChange={handleChange}
                            />

                            <input
                                className='w-full bg-slate-800 border border-slate-600 rounded-lg p-2 text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500'
                                placeholder='Descripción'
                                type="text"
                                value={task.content}
                                onChange={handleChange}
                            />
                            <div className="flex flex-col items-center gap-2 mt-2 w-full">
                                <button
                                    className='bg-btn-primary hover:bg-btn-primary-hover p-3 rounded-3xl w-32 transition-colors'
                                    onClick={() => handleSubmit()}
                                >
                                    Crear
                                </button>

                                <button
                                    className='text-slate-400 hover:text-white text-sm transition-colors pt-1'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancelar y cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Modal;