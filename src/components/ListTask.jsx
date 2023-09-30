import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { DeleteTask, UpdateTask } from '../components';
import { useTasksSlice } from '../hooks';

export const ListTask = () => {
  const { tasks } = useTasksSlice();

  return (
    <div className='card'>
      <DataTable value={tasks} tableStyle={{ minWidth: '50rem' }}>
        <Column field='title' header='Title' />
        <Column field='description' header='Description' />
        <Column
          header='Edit'
          body={rowData => <UpdateTask taskData={rowData} />}
        />
        <Column
          header='Delete'
          body={rowData => <DeleteTask taskData={rowData} />}
        />
      </DataTable>
    </div>
  );
};
