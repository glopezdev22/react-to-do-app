import React from 'react'
import { useState } from 'react'

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
        <div>
            <button onClick={() => setIsOpen(true)}>Crear Tarea</button>
            {
                isOpen && (
            <div>
                <input name='title' placeholder="Tarea" type="text" value={task.title} onChange={handleChange}/>
                <input name='content' placeholder='Descripcion' type="text" value={task.content} onChange={handleChange}/>
                <button onClick={() => handleSubmit()}>
                    Crear
                </button>
                <button onClick={() => setIsOpen(false)}>Cerrar modal</button>
            </div>
                )
            }
        </div>
    );
}

export default Modal;