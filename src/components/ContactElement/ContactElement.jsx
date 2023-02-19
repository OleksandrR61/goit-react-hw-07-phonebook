import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { deleteContact } from 'redux/operations';

import styles from './ContactElement.module.css';

export const ContactElement = ({contact}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        Notify.success(`Contact ${contact.name} removed`);
        dispatch(deleteContact(contact.id));
    };

    return (
        <div className={styles.contactElement}>
            <div className={styles.contactElementInfo}>
                <p><span className={styles.contactElementText}>Name: </span>{contact.name}</p>
                <p><span className={styles.contactElementText}>Number: </span>{contact.phone}</p>
            </div>
            <button
                type="button"
                className="button"
                onClick={handleClick}
            >
                Delete
            </button>
        </div>
    );
};

ContactElement.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};