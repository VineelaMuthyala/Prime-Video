import {Component} from 'react'

import './index.css'

import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMoviesList = moviesList.filter(
      eachItem => eachItem.categoryId === 'ACTION',
    )
    const comedyMoviesList = moviesList.filter(
      eachItem => eachItem.categoryId === 'COMEDY',
    )

    return (
      <div className="bg-container">
        <img
          className="prime-video-image"
          alt="prime video"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        />
        <div className="movie-list-container">
          <MoviesSlider
            actionMoviesList={actionMoviesList}
            comedyMoviesList={comedyMoviesList}
          />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
