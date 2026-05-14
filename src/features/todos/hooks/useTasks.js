import { useState } from "react";

import React from 'react'

export const useTasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Ordenar la casa",
            content: "Debo ordenar la casa antes de las 12 pm",
            date: "12/05/26"
        }
    ]);
    return (
        {tasks}
    )
}
