import React from 'react';
// import Store from './components/Store'
import Home from './home/Home'
import Admin from './admin/Admin'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App (){
  return( 
    <Router>
      <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Store /> */}
    </Router>
  )
}

export default App