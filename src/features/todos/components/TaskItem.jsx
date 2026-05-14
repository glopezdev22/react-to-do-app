import React from 'react'
import '@/styles/components/TaskItem.css'

export default function TaskItem({ title, content, date}) {
  return (
    <div className='task-card'>
      <h1>{title}</h1>
      <p>{content}</p>
      <span>{date}</span>
    </div>
  )
}
