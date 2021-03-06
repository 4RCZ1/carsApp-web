import React, {useState} from 'react'
import BrandSelector from "./components/BrandSelector";
import PerPage from "./components/PerPage";
import Cars from "./components/Cars";
import Pagination from "./components/Pagination";

function App() {
    const [cars, SetCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showingCars, setShowingCars] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [url, setUrl] = useState('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json');

    const getCars = async () => {
        setLoading(true);
        setCurrentPage(1);
        const response = await fetch(url);
        const cars = await response.json();
        SetCars(cars.Results);
        setLoading(false);
        setShowingCars(true);
    }
    const indexOfLastCar = currentPage * perPage;
    const indexOfFirstCar = indexOfLastCar - perPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= Math.ceil(cars.length / perPage)) {
            setCurrentPage(pageNumber);
        }
    }

    return (
        <div className={'container'}>
            <div className='title'>
                <h2>Cars</h2>
            </div>
            <BrandSelector setUrl={setUrl}/>
            <PerPage perPage={perPage} setPerPage={setPerPage}/>
            <button onClick={getCars}>Show Cars</button>
            <Cars cars={currentCars} loading={loading} show={showingCars}/>
            <Pagination perPage={perPage} totalCars={cars.length} paginate={paginate} show={showingCars}
                        currentPage={currentPage}/>
        </div>
    );
}

export default App
