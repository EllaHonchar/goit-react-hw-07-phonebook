import { useDispatch, useSelector } from 'react-redux';
import { filterContactAction } from 'redux/filterSlice';
import s from '../Filter/Filter.module.scss';

export function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filterContactAction(e.target.value));
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
        onChange={onChangeFilter}
      />
    </div>
  );
}
