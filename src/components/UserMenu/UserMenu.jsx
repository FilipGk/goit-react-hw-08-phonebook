import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import style from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={style.userMenuContainer}>
      <p className={style.userName}>{user.name}</p>
      <button
        className={style.logOutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
