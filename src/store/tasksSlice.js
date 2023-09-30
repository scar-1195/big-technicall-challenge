import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    searchedTask: [],
  },

  reducers: {
    onSetTask: (state, { payload }) => {
      state.tasks.push(payload.task);
    },
    onDeleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter(task => task.id !== payload.id);
    },
    onSearchTask: (state, { payload }) => {
      console.log(payload);
      const searchTask = payload.title.toLocaleLowerCase().trim();
      state.searchedTask = state.tasks.filter(tasks =>
        tasks.title.toLocaleLowerCase().includes(searchTask),
      );
    },
    onUpdateTask: (state, { payload }) => {
      const taskToEdit = state.tasks.find(task => task.id === payload.id);
      taskToEdit.title = payload.title;
      taskToEdit.description = payload.description;
    },
  },
});

export const { onSetTask, onDeleteTask, onUpdateTask, onSearchTask } =
  tasksSlice.actions;
