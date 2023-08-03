import React from 'react';
import ReactDOM from 'react-dom';
import WalletGenerator from './compo/WalletGenerator';

const App = () => {
  return (
    <div>
      <h1>Wallet Generator</h1>
      <WalletGenerator />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;