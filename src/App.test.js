import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Currency Converter Component', () => {
  render(<App />);
  const currencyCalcHeading = screen.getByText(/Currency Calculator/i);
  expect(currencyCalcHeading).toBeInTheDocument();
});
