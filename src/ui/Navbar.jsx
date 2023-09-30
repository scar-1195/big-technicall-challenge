import { useNavigate } from 'react-router-dom';
import { TabMenu } from 'primereact/tabmenu';

export const Navbar = () => {
  const navigate = useNavigate();
  const routes = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {
        navigate('/');
      },
    },
    {
      label: 'Search',
      icon: 'pi pi-fw pi-search',
      command: () => {
        navigate('/search');
      },
    },
  ];
  return <TabMenu model={routes} />;
};
