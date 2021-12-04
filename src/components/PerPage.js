import React from 'react';

const perPage = ({perPage, setPerPage}) => {

    return (
        <div className="dropdown">
            <span>Cars per page: {perPage}</span>
            <div className="dropdown-content">
                <p onClick={() => setPerPage(10)}>10</p>
                <p onClick={() => setPerPage(20)}>20</p>
                <p onClick={() => setPerPage(50)}>50</p>
            </div>
        </div>
    )
}

export default perPage
