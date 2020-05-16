import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './views/Search/Search'
import Home from './views/Home/Home'
import HeaderComponent from './shared/layout/Header'
import FooterComponent from './shared/layout/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />

        <Switch className="page">
          <Route path="/search/:city">
            <Search/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

        <FooterComponent />
      </Router>

    </div>
  );
}

export default App;
