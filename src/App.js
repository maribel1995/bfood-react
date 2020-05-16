import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './components/Search'
import Home from './components/Home'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

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
