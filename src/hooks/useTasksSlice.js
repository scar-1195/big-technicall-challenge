import { useDispatch, useSelector } from 'react-redux';
import { onSetTask, onDeleteTask, onUpdateTask, onSearchTask } from '../store/';

export const useTasksSlice = () => {
  const dispatch = useDispatch();
  const { tasks, searchedTask } = useSelector(state => state.taskReducer);

  const createTask = task => {
    dispatch(onSetTask({ task }));
  };

  const updateTask = (id, title, description) => {
    dispatch(onUpdateTask({ id, title, description }));
  };

  const deleteTask = id => {
    dispatch(onDeleteTask({ id }));
  };

  const getLastId = () => {
    if (tasks.length > 0) {
      return tasks[tasks.length - 1].id + 1;
    } else {
      return 1;
    }
  };

  const searchTask = title => {
    dispatch(onSearchTask({ title }));
  };

  return {
    tasks,
    createTask,
    updateTask,
    deleteTask,
    getLastId,
    searchTask,
    searchedTask,
  };
};
