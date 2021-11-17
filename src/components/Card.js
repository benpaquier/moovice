import React, { Component } from 'react'

class Card extends Component {
  render() {
    const { poster, title, year, description, handleClick } = this.props

    return (
      <div className="col-6 my-3">
        <div className="card" onClick={handleClick}>
          <img src={poster} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{year}</h6>
            <p className="card-text">{description.substr(0,125)}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card