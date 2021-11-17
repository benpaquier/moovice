import React, { Component } from 'react'

import Card from '../components/Card'

class Favorites extends Component {
  constructor() {
    super()

    this.state = {
      favoriteMovies: [],
      favIDs: this.getStorage("favorites"),
      weeklyFavoriteMovies: [],
      weeklyFavIDs: this.getStorage("weeklyFavorites")
    }
  }

  componentDidMount() {
    this.state.favIDs.forEach(id => {
      this.getMovie(id, "favorites")
    })

    this.state.weeklyFavIDs.forEach(id => {
      this.getMovie(id, "weeklyFavorites")
    })
  }

  getStorage(key) {
    const favorites = localStorage.getItem(key)
    const array = JSON.parse(favorites)

    if (array === null) {
      return []
    }

    return array
  }

  getMovie(id, key) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9958597c07ec90e02675c97691bf4506`)
      .then(response => response.json())
      .then(data =>  {
        if (key === "favorites") {
          this.setState({ favoriteMovies: [...this.state.favoriteMovies, data] })
        } else if (key === "weeklyFavorites") {
          this.setState({ weeklyFavoriteMovies: [...this.state.weeklyFavoriteMovies, data] })
        }
      })
  }

  render() {
    const { favoriteMovies, weeklyFavoriteMovies } = this.state

    return (
      <>
        <h1>Favorites</h1>
        
        <h4>Global favorite movies</h4>
        <div className="row">
          {favoriteMovies.length === 0 ? (
            <p>Vous n'avez pas de favoris globaux</p>
          ) : (
            <>
              {favoriteMovies.map(movie => (
                <Card
                  key={movie.title}
                  poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  title={movie.title}
                  year={movie.release_date}
                  description={movie.overview}
                />
              ))}
            </>
          )}
        </div>

        <h4>Weekly favorite movies</h4>
        <div className="row">
          {weeklyFavoriteMovies.length === 0 ? (
            <p>Vous n'avez pas de favoris cette semaine</p>
          ) : (
            <>
              {weeklyFavoriteMovies.map(movie => (
                <Card
                  key={movie.title}
                  poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  title={movie.title}
                  year={movie.release_date}
                  description={movie.overview}
                />
              ))}
            </>
          )}
        </div>
      </>
    )
  }
}

export default Favorites