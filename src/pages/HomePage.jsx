import { Card } from 'primereact/card';
import { CreateTask, ListTask } from '../components';

export const HomePage = () => {
  return (
    <div className='card flex flex-column align-items-center mt-5'>
      <h1>Big technicall challenge</h1>
      <Card className="min-w-min md:min-w-max">
        <CreateTask />
        <ListTask />
      </Card>
    </div>
  );
};
