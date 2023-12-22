import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  
  Routes
} from 'react-router-dom';

import Users from './Users';
import NewPlace from './NewPlace';
import MainNavigation from './MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
         
        </Routes>
      </main>
    </Router>
  );
};

export default App;
