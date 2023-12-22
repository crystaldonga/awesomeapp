import React from 'react';
import {
  BrowserRouter as Router,
  Route,
 
  Routes
} from 'react-router-dom';

import Users from './Users';
import NewPlace from './NewPlace';

const App1 = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        
      </Routes>
    </Router>
   
  );
};

export default App1;