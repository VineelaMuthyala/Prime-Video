import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {actionMoviesList, comedyMoviesList, movieSelectedId} = props

  const settings = {
    dots: true,

    slidesToShow: 4,
    slidesToScroll: 4,
  }

  const movieSelected = id => {
    movieSelectedId(id)
  }

  return (
    <div>
      <div style={{padding: 10}}>
        <h1 style={{color: 'white'}}>Action Movies</h1>
        <Slider {...settings}>
          {actionMoviesList.map(eachItem => (
            <MovieItem
              key={eachItem.id}
              moviesDetails={eachItem}
              movieSelected={movieSelected}
            />
          ))}
        </Slider>
      </div>
      <div style={{padding: 10}}>
        <h1 style={{color: 'white'}}>Comedy Movies</h1>
        <Slider {...settings}>
          {comedyMoviesList.map(eachItem => (
            <MovieItem key={eachItem.id} moviesDetails={eachItem} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default MoviesSlider
