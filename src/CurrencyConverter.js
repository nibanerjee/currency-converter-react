import './CurrencyConverter.css';
import React from 'react';
import { connect } from 'react-redux';
import { updateFromCurrency, updateAmount, updateToCurrency} from './Actions';

const CurrencyConverter = (props) => {

    const handleFromCurrencyChange = event => {
        props.updateFrom(event.target.value);
    };

    const handleToCurrencyChange = event => {
        props.updateTo(event.target.value);
    }

    const handleAmountChange = event => {
        props.updateAmt(event.target.value);
    }

    return (
        <div className="main-container">
            <div className="header"><h2>Currency Calculator</h2></div>
            <div className="calculator">
                <div className="from-currency-container">
                    <label htmlFor="from-currency">From Currency</label>
                    <select onChange={handleFromCurrencyChange} name="from-currency" value={props.fromCurrency} id="from-currency" data-testid="from-currency">
                        <option value="AUD">AUD</option>
                        <option value="CAD">CAD</option>
                        <option value="CNY">CNY</option>
                        <option value="CZK">CZK</option>
                        <option value="DKK">DKK</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="USD">USD</option>
                        <option value="KRW">KRW</option>
                    </select>
                </div>
                <div className="amount-container">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" placeholder="amount" id="amount" data-testid="amount" onChange={handleAmountChange} value={props.amount}/>
                </div>
                <div className="to-currency-container">
                    <label htmlFor="to-currency">To Currency</label>
                    <select onChange={handleToCurrencyChange} name="to-currency" value={props.toCurrency} id="to-currency" data-testid="to-currency">
                        <option value="AUD">AUD</option>
                        <option value="CAD">CAD</option>
                        <option value="CNY">CNY</option>
                        <option value="CZK">CZK</option>
                        <option value="DKK">DKK</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="USD">USD</option>
                        <option value="FJD">FJD</option>
                    </select>
                </div>
                <div className="result-container">
                    <label data-testid="result">Result : {props.convertedCurrency}</label>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = ({ result,fromCurrency,toCurrency,amount }) => {
    return {
      convertedCurrency : result,
      fromCurrency,
      toCurrency,
      amount
    };
};
  
const mapDispatchToProps = dispatch => ({
    updateFrom(value) {
        dispatch(updateFromCurrency(value));
    },
    updateAmt(value) {
        dispatch(updateAmount(value));
    },
    updateTo(value) {
        dispatch(updateToCurrency(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);