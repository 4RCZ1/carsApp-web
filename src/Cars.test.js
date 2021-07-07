import {render, screen, waitFor} from '@testing-library/react';
import Cars from './Cars';
import cars from './jsons/cars.json';

test('renders welcoming message correctly', () => {
    render(<Cars/>);
    const linkElement = screen.getByText(/Brand/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders loading message correctly', async () => {
    render(<Cars loading={true}/>);
    const linkElement = screen.getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
});
test('renders cars correctly', async () => {
    render(<Cars cars={[{"Make_ID":471,"Make_Name":"OPEL","Model_ID":1840,"Model_Name":"Ampera"}]} loading={false} show={true}/>);
    const linkElement = screen.getByText(/Model/i);
    expect(linkElement).toBeInTheDocument();
});
