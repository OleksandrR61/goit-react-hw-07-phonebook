import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        dispatch(changeFilter(target.value));
    };

    return (
        <label style={{marginBottom: '16px'}}>
            Filter

            <input type="text" className="input" value={filter} onChange={handleChange}/>
        </label>
    );
};