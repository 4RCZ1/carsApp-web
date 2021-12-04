import React, {useState} from 'react';
import styles from '../styles/Pagination.module.css';

const Pagination = ({perPage, totalCars, paginate, show, currentPage}) => {
    const pageNumbers = [];
    let visibleNumbers = [];
    const [neighbours] = useState(3);

    for (let i = 1; i <= Math.ceil(totalCars / perPage); i++) {
        pageNumbers.push(i);
    }

    const isActive = (number) => {
        if (number === currentPage) {
            return styles.paginationNumberActive;
        }
        return styles.paginationNumber;
    }

    const forwardJump = () => {
        visibleNumbers.push(pageNumbers[pageNumbers.length - 1] - (pageNumbers[pageNumbers.length - 1] - visibleNumbers[neighbours + 1]) / 2 | 0);
    };
    const backwardJump = () => {
        visibleNumbers.push((pageNumbers[currentPage - (neighbours / 2 | 0)] - pageNumbers[0]) / 2 | 0);
    };

    const defineVisibleNumbers = () => {
        if (pageNumbers.length > neighbours + 4) {
            visibleNumbers.push(pageNumbers[0]);
            if (currentPage < neighbours + 2) {
                for (let i = 1; i <= neighbours + 1; i++) {
                    visibleNumbers.push(pageNumbers[i])
                }

                forwardJump();

            } else if (currentPage > pageNumbers.length - (neighbours + 1)) {
                backwardJump();
                for (let i = pageNumbers.length - (neighbours + 1); i <= pageNumbers.length - (neighbours - 1); i++) {
                    visibleNumbers.push(pageNumbers[i])
                }
            } else {
                backwardJump();
                let neighboursHalf = neighbours / 2 | 0
                for (let i = currentPage - neighboursHalf - 1; i < currentPage + neighboursHalf; i++) {
                    visibleNumbers.push(pageNumbers[i]);
                    console.log(currentPage - (neighbours / 2 | 0));
                }
                forwardJump();
            }
            visibleNumbers.push(pageNumbers[pageNumbers.length - 1]);
        } else {
            visibleNumbers = pageNumbers;
        }
    }

    defineVisibleNumbers();

    if (show) {
        return (
            <nav>
                <ul className={styles.pagination}>
                    <li className={styles.paginationNumber} onClick={() => paginate(currentPage - 1)}>
                        <p className={styles.arrowLeft}/>
                    </li>
                    {visibleNumbers.map(number => (
                        <li onClick={() => paginate(number)} key={number} className={isActive(number)}>
                            <p>{number}</p>
                        </li>
                    ))}
                    <li className={styles.paginationNumber} onClick={() => paginate(currentPage + 1)}>
                        <p className={styles.arrowRight}/>
                    </li>
                </ul>
            </nav>
        )
    }

    return <nav/>
}

export default Pagination;
