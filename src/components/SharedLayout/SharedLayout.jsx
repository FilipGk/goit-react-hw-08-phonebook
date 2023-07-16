import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import style from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <div className={style.sharedLayoutBar}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
