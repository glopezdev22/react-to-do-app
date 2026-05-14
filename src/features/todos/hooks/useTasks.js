import { useState } from "react";

import React from 'react'

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    return (
        {tasks}
    )
}
