import TaskList from '@/features/todos/components/TaskList';
import { useTasks } from '@/features/todos/hooks/useTasks';
import Modal from './components/Modal';
import '@/styles/globals.css'
import { useState } from 'react';

function App() {
  const { tasks, addTask } = useTasks();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex flex-col items-center justify-center mt-6">
      <h1 className='font-bold text-5xl text-center'>Mis Tareas</h1>

      {tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <p className='mt-2'>No hay tareas pendientes</p>
      )}
      <button className='bg-btn-primary hover:bg-btn-primary-hover p-3 rounded-3xl mt-2' onClick={() => setIsOpen(true)}>Crear Tarea</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} addTask={addTask} />
    </main>
  );
}

export default App;