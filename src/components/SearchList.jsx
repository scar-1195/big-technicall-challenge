import { OrderList } from 'primereact/orderlist';

export const SearchList = ({ tasks }) => {
  const itemTemplate = task => {
    return (
      <div className='flex flex-wrap p-2 align-items-center gap-3'>
        <div className='flex-1 flex flex-column gap-2 xl:mr-8'>
          <span className='font-bold'>{task.title}</span>
          <div className='flex align-items-center gap-2'>
            <span>{task.description}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='card xl:flex xl:justify-content-center'>
      <OrderList
        value={tasks}
        itemTemplate={itemTemplate}
        header='Tasks'
      ></OrderList>
    </div>
  );
};
