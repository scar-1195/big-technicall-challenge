import { Button } from 'primereact/button';
import { useTasksSlice } from '../hooks/useTasksSlice';

export const DeleteTask = ({ taskData }) => {
  const { deleteTask } = useTasksSlice();

  const onDeleteTask = () => {
    deleteTask(taskData.id);
  };

  return (
    <Button
      className='p-button-rounded'
      icon='pi pi-trash'
      onClick={onDeleteTask}
      style={{ backgroundColor: 'var(--red-500)' }}
    />
  );
};
