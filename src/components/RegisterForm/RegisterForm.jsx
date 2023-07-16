import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import style from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={style.formLabel}>
        Username
        <input className={style.formInput} type="text" name="name" />
      </label>
      <label className={style.formLabel}>
        Email
        <input className={style.formInput} type="email" name="email" />
      </label>
      <label className={style.formLabel}>
        Password
        <input className={style.formInput} type="password" name="password" />
      </label>
      <button className={style.registerBtn} type="submit">
        Register
      </button>
    </form>
  );
};
