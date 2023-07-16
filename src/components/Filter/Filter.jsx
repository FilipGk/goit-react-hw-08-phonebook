import style from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectStatusFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <h4 className={style.highlight}>Find contacts by name</h4>
      <input
        className={style.filterinput}
        type="text"
        name={filter}
        value={filter}
        onChange={onChange}
        placeholder="Please write name here"
      ></input>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  OnChange: PropTypes.func,
};

export default Filter;
