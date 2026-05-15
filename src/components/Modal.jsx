import React from 'react'
import { useState } from 'react'
import '@/styles/components/Modal.css'

function Modal({ addTask }) {

    const [task, setTask] = useState({
        title: "",
        content: ""
    });
    const [isOpen, setIsOpen] = useState(false);
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
        <div className='modal-container'>
            <button className='modal-create-button' onClick={() => setIsOpen(true)}>Crear Tarea</button>
            {
                isOpen && (
            <div>
                <input className='modal-input' name='title' placeholder="Tarea" type="text" value={task.title} onChange={handleChange}/>
                <input className='modal-input' placeholder='Descripcion' type="text" value={task.content} onChange={handleChange}/>
                <button className='modal-submit-button' onClick={() => handleSubmit()}>
                    Crear
                </button>
                <button className='modal-close-button' onClick={() => setIsOpen(false)}>Cerrar modal</button>
            </div>
                )
            }
        </div>
    );
}

export default Modal;