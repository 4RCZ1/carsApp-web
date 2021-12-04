import React from 'react';
import styles from '../styles/BrandSelector.module.css';

const BrandSelector = ({setUrl}) => {
    const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/';

    const setBrandUrl = (brand) => {
        setUrl(url + brand + '?format=json');
    }

    return (
        <div className={styles.brandSelector}>
            <input id='brand' className={styles.input} type='text' placeholder="Brand"
                   onChange={(e) => setBrandUrl(e.target.value)}
                   aria-label={'brandInput'}/>
        </div>
    )
}

export default BrandSelector;
