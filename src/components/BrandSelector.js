import React from 'react';

const BrandSelector = ({setUrl}) => {
    const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/';

    const setBrandUrl = (brand) => {
        setUrl(url + brand + '?format=json');
    }

    return (
        <div className='brand-selector'>
            <input id='brand' type='text' placeholder="Brand" onChange={(e) => setBrandUrl(e.target.value)}
                   aria-label={'brandInput'}/>
        </div>
    )
}

export default BrandSelector;
