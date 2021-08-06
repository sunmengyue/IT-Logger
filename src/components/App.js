import React, { useEffect, Fragment } from 'react';
import Searchbar from './layout/Searchbar';
import Logs from './logs/Logs';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import AddBtn from './layout/AddBtn';
import AddLogModal from './logs/AddLogModal';
import EditLogModal from './logs/EditLogModal';
import AddTechModal from './techs/AddTechModal';
import TechListModal from './techs/TechListModal';
import '../css/App.css';

const App = () => {
  // init materialize js
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
