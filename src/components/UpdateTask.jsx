import { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useForm, useTasksSlice } from '../hooks';

const header = (
  <div className='flex align-items-center justify-content-center'>
    <i className='pi pi-file-edit' style={{ fontSize: '1.5rem' }}></i>
    <h3 className='ml-3'>Edit Task</h3>
  </div>
);

export const UpdateTask = ({ taskData }) => {
  const [updateVisible, setVisible] = useState(false);
  const toast = useRef(null);
  const { title, description, onInputChange } = useForm({
    title: taskData.title,
    description: taskData.description,
  });

  const { updateTask } = useTasksSlice();

  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Task Updated',
      life: 2000,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (title.trim().length > 0 && description.trim().length > 0) {
      updateTask(taskData.id, title, description);
    }
    setVisible(false);
    showSuccess();
  };

  return (
    <div className='card'>
      <Toast ref={toast} />
      <Button
        className='p-button-rounded'
        icon='pi pi-file-edit'
        onClick={() => setVisible(true)}
        style={{ backgroundColor: 'var(--green-500)' }}
      />
      <Dialog
        header={header}
        visible={updateVisible}
        style={{ width: '40vw' }}
        onHide={() => setVisible(false)}
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
            label='Save'
            style={{ backgroundColor: 'var(--green-500)', width: '10rem' }}
          />
        </form>
      </Dialog>
    </div>
  );
};
