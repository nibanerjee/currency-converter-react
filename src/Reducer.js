import { currencyMatrix, amountValidator, handleCalculation } from './Utility';

export default function reducer( 
  state = {
    fromCurrency: 'AUD',
    amount: '0',
    toCurrency: 'AUD',
    result: 'AUD 0.00'
  }, 
  action) {

    let { type, value } = action;

    const calculateCurrencyConversion = () => {
      let {fromCurrency, toCurrency, amount} = state;
      if(!amountValidator.test(amount))
          return 'Please enter a valid value for amount field';
      let matrixKey = fromCurrency + toCurrency;
      let decimalPoints = toCurrency === 'JPY' ? 0 : 2;
      if(!currencyMatrix[matrixKey]) {
          return `Unable to find rate for ${fromCurrency}/${toCurrency}`;
      } else {
          let convertedAmount = handleCalculation(fromCurrency, toCurrency, amount);
          return `${state.toCurrency} ${Number(convertedAmount).toFixed(decimalPoints)}`;
      }
    }

    if (type === 'UPDATE_FROM_CURRENCY') {
      return {
          ...state,
          fromCurrency : value
      };
    }
  
    if (type === 'UPDATE_AMOUNT') {
      return {
          ...state,
          amount : value
      };
    }
  
    if (type === 'UPDATE_TO_CURRENCY') {
        return {
          ...state,
          toCurrency : value
        };
    }

    if (type === 'CALCULATE_CONVERSION') {
        return {
          ...state,
          result : calculateCurrencyConversion()
        };
    }

    return state;
}