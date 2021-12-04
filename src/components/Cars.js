import React from 'react'
import styles from '../styles/Cars.module.css'

const Cars = ({cars, loading, show}) => {

    if (loading) {
        return <h2>Loading ...</h2>
    }

    if (show) {
        return (
            <div className={styles.carsList}>
                <ul>
                    {cars.map((car) => {
                        const {Model_ID, Make_Name, Model_Name} = car

                        return (
                            <li key={Model_ID}>
                                <h3>{Make_Name}</h3>
                                <p>Model: {Model_Name}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    return <div>
        <p>
            Enter the brand of your choice in the 'brand' field and click the 'show cars' button to see the cars of the
            selected brand. Default brand is Honda
        </p>
    </div>
}

export default Cars;
