import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../css/App.css';

const App = () => {
  // init materialize js
  useEffect(() => {
    M.AutoInit();
  });
  return <div>App</div>;
};

export default App;
