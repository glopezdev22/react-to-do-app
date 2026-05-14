import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks}) {
  return (
    <div>
        {tasks.map((task) => (
            <TaskItem 
                key={task.id}
                title={task.title}
                content={task.content}
                date={task.date}
            />
        ))}
    </div>
  );
}

export default TaskList;