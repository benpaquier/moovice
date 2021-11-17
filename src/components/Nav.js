import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Moovice</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/weekly">Weekly</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weekly-battle">Weekly Battle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/popular">Popular</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/popular-battle">Popular Battle</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">Favorites</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav