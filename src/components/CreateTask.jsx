import { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useForm, useTasksSlice } from '../hooks';

const header = (
  <div className='flex align-items-center justify-content-center'>
    <i className='pi pi-file-edit' style={{ fontSize: '1.5rem' }}></i>
    <h3 className='ml-3'>Create Task</h3>
  </div>
);

export const CreateTask = () => {
  const [createVisible, setCreateVisible] = useState(false);
  const toast = useRef(null);
  const { getLastId, createTask } = useTasksSlice();

  const { title, description, formState, onInputChange, onResetForm } = useForm(
    {
      title: '',
      description: '',
    },
  );

  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Task Created',
      life: 2000,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (title.trim().length > 0 && description.trim().length > 0) {
      formState.id = getLastId();
      createTask(formState);
      setCreateVisible(false);
      showSuccess();
      onResetForm();
    }
  };

  return (
    <div className='flex' style={{ justifyContent: 'end' }}>
      <Toast ref={toast} />
      <Button
        className='mb-5'
        icon='pi pi-pencil'
        label='Create Task'
        onClick={() => setCreateVisible(true)}
      />
      <Dialog
        header={header}
        visible={createVisible}
        style={{ width: '40vw' }}
        onHide={() => setCreateVisible(false)}
      >
        <form
          className='flex flex-column align-content-center'
          onSubmit={onSubmit}
        >
          <label className='text-2xl mb-1'>Title</label>
          <InputText
            className='mb-3'
            name='title'
            onChange={onInputChange}
            value={title}
          />

          <label className='text-2xl mb-1'>Description</label>
          <InputText
            className='mb-3'
            name='description'
            onChange={onInputChange}
            value={description}
          />

          <Button
            className='align-self-center'
            icon='pi pi-save'
            label='Create'
            style={{ backgroundColor: 'var(--green-500)', width: '10rem' }}
          />
        </form>
      </Dialog>
    </div>
  );
};
