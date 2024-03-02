import React from 'react';
import './App.css';

import Inventory from './components/Inventory';

function App() {
  return (
    <div className="three-col">
      <div className="item-col">
        <Inventory name="foo" description="lorem ipsum dolor set amet" health={10} pollution={20} />
      </div>

      <div className="item-col">
        <Inventory name="Inventory" description="Currently empty" health={0} pollution={0} />
      </div>

      <div className="stat-col">

      </div>
    </div>
  );
}

export default App;
