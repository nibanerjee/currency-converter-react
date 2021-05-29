import './App.css';
import CurrencyConverter from './CurrencyConverter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CurrencyConverter />
      </div>
    </Provider>
  );
}

export default App;
