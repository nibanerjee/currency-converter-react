import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyConverter from './CurrencyConverter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './Reducer';

const store = createStore(Reducer, {
    fromCurrency: 'AUD',
    amount: '0',
    toCurrency: 'AUD',
    result: 'AUD 0.00'
});

describe('Currency Converter Component', ()=> {
    test('currency converter component should have from-currency dropdown', () => {
        render(
          <Provider store={store}>
              <CurrencyConverter />
          </Provider>
        );
        const fromCurrencyDropdown = screen.getByTestId('from-currency');
        expect(fromCurrencyDropdown).toBeInTheDocument();
    });
    test('currency converter component should have amount textbox', () => {
        render(
          <Provider store={store}>
              <CurrencyConverter />
          </Provider>
        );
        const amountTextbox = screen.getByTestId('amount');
        expect(amountTextbox).toBeInTheDocument();
    });
    test('currency converter component should have to-currency dropdown', () => {
        render(
          <Provider store={store}>
              <CurrencyConverter />
          </Provider>
        );
        const toCurrencyDropdown = screen.getByTestId('to-currency');
        expect(toCurrencyDropdown).toBeInTheDocument();
    });
    test('changing value of from-currency dropdown,to-currency dropdown and amount should update calculated result', () => {
        render(
          <Provider store={store}>
              <CurrencyConverter />
          </Provider>
        );
        fireEvent.change(screen.getByTestId('from-currency'), { target: { value: 'AUD' } });
        fireEvent.change(screen.getByTestId('amount'), { target: { value: '100' } });
        fireEvent.change(screen.getByTestId('to-currency'), { target: { value: 'USD' } });
        const resultDiv = screen.getByTestId('result');
        expect(resultDiv).toHaveTextContent('USD 83.71');
    });
});








