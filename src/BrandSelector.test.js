import {fireEvent, render, screen} from '@testing-library/react';
import BrandSelector from './components/BrandSelector';

test('Check if brand selector works correctly', () => {
    let return_val;
    render(<BrandSelector setUrl={(url) => return_val = url}/>);
    const input = screen.getByLabelText('brandInput');
    fireEvent.change(input, {target: {value: 'honda'}});
    expect(return_val).toBe('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json');
});
