import './CurrencyConverter.css';
import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { updateFromCurrency, updateAmount, updateToCurrency, calculateConversion } from './Actions';

const CurrencyConverter = () => {

    const reducerState = useSelector(state => state);
    const dispatch = useDispatch();

    const {result, fromCurrency, toCurrency, amount} = reducerState;

    useEffect(() => {
        dispatch(calculateConversion());
    },[ dispatch, fromCurrency, toCurrency, amount ]);

    const handleFromCurrencyChange = event => {
        dispatch(updateFromCurrency(event.target.value));
    };

    const handleToCurrencyChange = event => {
        dispatch(updateToCurrency(event.target.value));
    }

    const handleAmountChange = event => {
        dispatch(updateAmount(event.target.value));
    }

    return (
        <div className="main-container">
            <div className="header"><h2>Currency Calculator</h2></div>
            <div className="calculator">
                <div className="from-currency-container">
                    <label htmlFor="from-currency">From Currency</label>
                    <select onChange={handleFromCurrencyChange} name="from-currency" value={fromCurrency} id="from-currency" data-testid="from-currency">
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
                    <input type="text" placeholder="amount" id="amount" data-testid="amount" onChange={handleAmountChange} value={amount}/>
                </div>
                <div className="to-currency-container">
                    <label htmlFor="to-currency">To Currency</label>
                    <select onChange={handleToCurrencyChange} name="to-currency" value={toCurrency} id="to-currency" data-testid="to-currency">
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
                    <label data-testid="result">Result : {result}</label>
                </div>
            </div>
            
        </div>
    )
}

export default CurrencyConverter;