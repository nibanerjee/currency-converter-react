import reducer from './Reducer';

describe('Currency Calculator Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        fromCurrency: 'AUD',
        amount: '0',
        toCurrency: 'AUD',
        result: 'AUD 0.00'
    });
  });
  it('should return calculated currency when to-currency is changed', () => {
    expect(reducer({
        fromCurrency: 'AUD',
        amount: '100',
        toCurrency: 'AUD',
        result: 'AUD 100.00'
    }, {
        type: 'UPDATE_TO_CURRENCY',
        value: 'DKK'
    })).toEqual({
        fromCurrency: 'AUD',
        amount: '100',
        toCurrency: 'DKK',
        result: 'DKK 505.76'
    });
  });
  it('should return appropriate msg to user when conversion rate for a currency is unavailable', () => {
    expect(reducer({
        fromCurrency: 'AUD',
        amount: '100',
        toCurrency: 'AUD',
        result: 'AUD 100.00'
    }, {
        type: 'UPDATE_TO_CURRENCY',
        value: 'FJD'
    })).toEqual({
        fromCurrency: 'AUD',
        amount: '100',
        toCurrency: 'FJD',
        result: 'Unable to find rate for AUD/FJD'
    });
  });
  it('should return appropriate error message to user when wrong amount is inserted in textbox', () => {
    expect(reducer({
        fromCurrency: 'AUD',
        amount: '100',
        toCurrency: 'AUD',
        result: 'AUD 100.00'
    }, {
        type: 'UPDATE_AMOUNT',
        value: 'Hii'
    })).toEqual({
        fromCurrency: 'AUD',
        amount: 'Hii',
        toCurrency: 'AUD',
        result: 'Please enter a valid value for amount field'
    });
  });
});