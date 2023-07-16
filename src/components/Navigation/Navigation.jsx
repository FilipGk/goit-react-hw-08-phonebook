import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={style.navigationContainer}>
      <NavLink className={style.link} to="/">
        PhoneBook
      </NavLink>
      {isLoggedIn && (
        <NavLink className={style.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
