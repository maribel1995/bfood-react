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
        <Switch className="page">
          <Route path="/search/:city">
            <HeaderComponent className='header-home' />
            <Search/>
          </Route>
          <Route path="/">
            <HeaderComponent className='pages-header' />
            <Home/>
          </Route>
        </Switch>

        <FooterComponent />
      </Router>

    </div>
  );
}

export default App;
