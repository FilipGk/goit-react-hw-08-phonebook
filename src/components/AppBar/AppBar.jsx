import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import style from './AppBar.module.css';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <header className={style.headerContainer}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
