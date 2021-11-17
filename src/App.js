import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import Weekly from './pages/Weekly'
import WeeklyBattle from './pages/WeeklyBattle'
import Popular from './pages/Popular'
import PopularBattle from './pages/PopularBattle'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
        {/* Navbar */}
        <Nav />

        <div className="container my-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/weekly" component={Weekly} />
            <Route path="/weekly-battle" component={WeeklyBattle} />
            <Route exact path="/popular" component={Popular} />
            <Route path="/popular-battle" component={PopularBattle} />
            <Route path="/favorites" component={Favorites} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App