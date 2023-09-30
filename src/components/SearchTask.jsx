import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useForm, useTasksSlice } from '../hooks';
import { SearchList } from './';

export const SearchTask = () => {
  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: '',
  });

  const { searchTask, searchedTask } = useTasksSlice();
  const showContainer = searchedTask.length !== 0;

  const onSubmit = e => {
    e.preventDefault();
    if (searchText.trim().length > 0) {
      searchTask(searchText);
      onResetForm();
    }
  };

  return (
    <div className='flex justify-content-around w-screen'>
      <div className='d-flex w-30rem'>
        <h1>Search Task</h1>
        <form
          className='flex flex-column align-content-center'
          onSubmit={onSubmit}
        >
          <label className='text-2xl mb-1'>Task Title</label>
          <InputText
            className='mb-3'
            type='text'
            name='searchText'
            onChange={onInputChange}
            value={searchText}
          />
          <Button
            className='align-self-center'
            icon='pi pi-search'
            label='Search'
            style={{ width: '8rem' }}
          />
        </form>
      </div>

      <div className='w-30rem' style={{ display: showContainer ? '' : 'none' }}>
        <SearchList tasks={searchedTask} />
      </div>
    </div>
  );
};
