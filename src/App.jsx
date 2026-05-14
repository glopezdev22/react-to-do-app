import TaskList from '@/features/todos/components/TaskList';
import { useTasks } from '@/features/todos/hooks/useTasks';

function App() {
  const { tasks } = useTasks();

  return (
    <main className="app-container">
      <h1>Mis Tareas</h1>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <p>No hay tareas pendientes</p>
      )}
    </main>
  );
}

export default App;