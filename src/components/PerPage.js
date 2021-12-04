import React from 'react';
import styles from '../styles/PerPage.module.css';

const perPage = ({perPage, setPerPage}) => {

    return (
        <div className={styles.dropdown}>
            <span>Cars per page: {perPage}</span>
            <div className={styles.dropdownContent}>
                <p onClick={() => setPerPage(10)}>10</p>
                <p onClick={() => setPerPage(20)}>20</p>
                <p onClick={() => setPerPage(50)}>50</p>
            </div>
        </div>
    )
}

export default perPage
