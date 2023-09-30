import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { HomePage, SearchPage } from '../pages';
import { Navbar } from '../ui';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
