import { currencyMatrix, amountValidator, isNumeric } from './Constants';

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

      if(!amountValidator.test(state.amount))
          return 'Please enter a valid value for amount field';

      let matrixKey = state.fromCurrency + state.toCurrency;

      let decimalPoints = state.toCurrency === 'JPY' ? 0 : 2;
      
      if(!currencyMatrix[matrixKey]) {

          return `Unable to find rate for ${state.fromCurrency}/${state.toCurrency}`;

      } else if(currencyMatrix[matrixKey] === '1:1') {

          let rate = 1 * Number(state.amount);
          return `${state.toCurrency} ${rate.toFixed(decimalPoints)}`;

      } else if (currencyMatrix[matrixKey] === 'INV') {

          let flippedKey = state.toCurrency + state.fromCurrency;
          let rate = ( 1 / currencyMatrix[flippedKey] ) * Number(state.amount);
          return `${state.toCurrency} ${rate.toFixed(decimalPoints)}`;

      } else {
          
          let rate = currencyMatrix[matrixKey];

          if (isNumeric(rate)) {
  
             return `${state.toCurrency} ${(rate * Number(state.amount)).toFixed(decimalPoints)}`;

          } else {
              let { fromCurrency, toCurrency, amount } = state;
              function currencyRateHelper(rate){

                  if(isNumeric(rate)) {
                    amount = Number(amount) * rate;
                    return;
                  }

                  let left = currencyMatrix[fromCurrency + rate];
                  if(left === 'INV') 
                      left = 1 / currencyMatrix[rate + fromCurrency];
                  let right = currencyMatrix[rate + toCurrency];
                  if(right === 'INV') 
                      right = 1 / currencyMatrix[toCurrency + rate];

                  fromCurrency = rate;
                  currencyRateHelper(left);
                  currencyRateHelper(right);

              }
              currencyRateHelper(rate);
              return `${state.toCurrency} ${amount.toFixed(decimalPoints)}`;
          }

      }

    }

    if (type === 'UPDATE_FROM_CURRENCY') {

      state.fromCurrency = value;
      return {
            ...state,
            result : calculateCurrencyConversion()
      };

    }
  
    if (type === 'UPDATE_AMOUNT') {

      state.amount = value;
      return {
            ...state,
            result : calculateCurrencyConversion()
      };

    }
  
    if (type === 'UPDATE_TO_CURRENCY') {

        state.toCurrency = value;
        return {
            ...state,
            result : calculateCurrencyConversion()
        };

    }
  
    return state;
}