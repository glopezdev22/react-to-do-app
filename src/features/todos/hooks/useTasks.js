import { useState } from "react";

import React from 'react'

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (title, content) => {
        const newTask = {
            id: crypto.randomUUID(),
            title: title,
            content: content,
            date: Date.now()
        };
        setTasks([...tasks, newTask]);
    };

    return {
        tasks,
        addTask
    };
}
