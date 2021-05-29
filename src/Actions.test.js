import * as actions from './Actions';

describe('Currency Converter Actions', () => {

  it('updateFromCurrency should create UPDATE_FROM_CURRENCY action', () => {
    expect(actions.updateFromCurrency('USD')).toEqual({
      type: 'UPDATE_FROM_CURRENCY',
      value: 'USD'
    });
  });

  it('updateAmount should create UPDATE_AMOUNT action', () => {
    expect(actions.updateAmount('100')).toEqual({
      type: 'UPDATE_AMOUNT',
      value: '100'
    });
  });

  it('updateToCurrency should create UPDATE_TO_CURRENCY action', () => {
    expect(actions.updateToCurrency('JPY')).toEqual({
      type: 'UPDATE_TO_CURRENCY',
      value: 'JPY'
    });
  });

});