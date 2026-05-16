import React from 'react'

export default function TaskItem({ title, content, date}) {
  return (
    <div className='task-card'>
      <h1>{title}</h1>
      <p>{content}</p>
      <span>{date}</span>
    </div>
  )
}
