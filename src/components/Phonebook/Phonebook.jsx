import { ContactForm, Filter, ContacList } from 'components';

import styles from './Phonebook.module.css';

export const Phonebook = () => (
    <div className={styles.Phonebook}>
        <h1 className={styles.header}>Phonebook</h1>
        <ContactForm/>

        <h2 className={styles.header}>Contacts</h2>
        <Filter/>
        <ContacList/>
    </div>
);