import TaskList from '@/features/todos/components/TaskList';
import { useTasks } from '@/features/todos/hooks/useTasks';
import Modal from './components/Modal';
import '@/styles/App.css'
import { useState } from 'react';

function App() {
  const { tasks, addTask } = useTasks();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="app-container">
      <h1 className='app-title'>Mis Tareas</h1>

      {tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <p>No hay tareas pendientes</p>
      )}
      <button className='modal-create-button' onClick={() => setIsOpen(true)}>Crear Tarea</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} addTask={addTask} />
    </main>
  );
}

export default App;