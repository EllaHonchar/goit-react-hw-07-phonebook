import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from 'redux/filterSlice';
import { selectValue } from 'redux/selectors';
import s from '../Filter/Filter.module.scss';

export function Filter() {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    // console.log(e.target.value);
    dispatch(onChangeFilter(e.target.value));
  };

  return (
    <div className={s.container}>
      <h3 className={s.title}>Find contacts by name</h3>
      <input
        className={s.input}
        placeholder="Input name..."
        type="onSubmit"
        name="filter"
        value={value}
        onChange={handleChangeFilter}
      />
    </div>
  );
}
