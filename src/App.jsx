import TaskList from '@/features/todos/components/TaskList';
import { useTasks } from '@/features/todos/hooks/useTasks';
import Modal from './components/Modal';
import '@/styles/App.css'

function App() {
  const { tasks, addTask } = useTasks();

  return (
    <main className="app-container">
      <h1 className='app-title'>Mis Tareas</h1>

      {tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <p>No hay tareas pendientes</p>
      )}

      <Modal addTask={addTask} />
    </main>
  );
}

export default App;