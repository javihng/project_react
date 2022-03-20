import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders el texto Integración Google Maps' ,()=>{
  render(<App />);
  const textoweb = screen.getByText('Integración Google Maps');
  expect(textoweb).toBeInTheDocument();

});
