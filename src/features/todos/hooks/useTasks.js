import { useState } from "react";

import React from 'react'

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
        const newTask = {
            id: crypto.randomUUID(),
            title: task.title,
            content: task.content,
            date: new Date().toLocaleDateString('es-CR'),
        };
        setTasks([...tasks, newTask]);
    };

    return {
        tasks,
        addTask
    };
}
