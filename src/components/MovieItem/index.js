import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {moviesDetails} = props
  const {thumbnailUrl, videoUrl} = moviesDetails

  return (
    <div className="movie-item-container">
      <Popup
        model
        trigger={
          <img
            className="movie-item-image"
            alt="thumbnail"
            src={thumbnailUrl}
          />
        }
        className="pop-up-container"
      >
        {close => (
          <div className="video-container">
            <button
              className="close-btn"
              type="button"
              data-testid="closeButton"
            >
              <IoMdClose onClick={() => close()} />
            </button>
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
