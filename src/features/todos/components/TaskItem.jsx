import React from 'react'
import '@/styles/components/TaskItem.css'

export default function TaskItem({ title = "Sin Titulo", content = "Aliqua proident tempor laborum esse ex voluptate incididunt reprehenderit magna.", date = "dd/MM/yyyy"}) {
  return (
    <div className='task-card'>
      <h1>{title}</h1>
      <p>{content}</p>
      <span>{date}</span>
    </div>
  )
}
