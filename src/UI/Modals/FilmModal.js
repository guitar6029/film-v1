import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import Modal from '@mui/material/Modal';
import './FilmModal.css';
import { Film } from '../../Context/FilmItemContext';
import axios from 'axios';
import { Link } from '@mui/material';

function FilmModal(imdbID) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const id = imdbID.imdbID;

  const { film, getFilmID } = Film();


  const URL = `https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_KEY}`

  //console.log(URL);
  const [filmItem, setFilmItemData] = useState([]);


  const handleAddToWatchlist = () => {
    console.log(id);
    getFilmID(id)
    


  }



  useEffect(() => {


    const fetchFilmData = async () => {
      try {
        const response = await axios.get(URL);
        let data = response.data;
        setFilmItemData(data);


      } catch (e) {
        if (e.message) {
          console.log(e.message);
        } else {
          console.log(`Error: ${e.message}`);
        }
      }

    }
    fetchFilmData();
  }, []);


  return (
    <div>
      <span className="film__watchOptions" onClick={handleOpen}>Watch Options</span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="film__modal">
          <CancelIcon className="closeFilmModal" onClick={handleClose} />
          <div className='film__modal__divisonSection'>

            <div className='film__modal__image'>
              <img src={filmItem.Poster} alt={id} />
            </div>

            <div className='film__modal__rightSide'>
              <div className='film__modal__title'>
                <h3>{filmItem.Title}</h3>
              </div>

              <div className='film__modal__details__top'>
                <span>{filmItem.Year}</span><span>{filmItem.Runtime}</span><span>{filmItem.Rated}</span>
              </div>

              <div className='film__modal__details__middle'>
                <span>{filmItem.Genre}</span>
              </div>

              <div className="film__modal__details__bottom">
                <span>{filmItem.imdbRating}</span><span> * Rate</span>
              </div>

            </div>
          </div>

          <div className='film__modal__filmPlot'>
            <p>{filmItem.Plot}</p>
          </div>

          <div className='film__modal__director'>
            <span><b>Director</b> {filmItem.Director}</span>
          </div>


          <div className="film__modal__actors">
            <span><b>Stars</b> {filmItem.Actors}</span>
          </div>
            <hr/>
          <div className='film__modal__userOptions'>
            <div className='film__modal__userOptions__btn'>
              <button>Trailer</button>
            </div>
            <div className='watchNow'>
              <h4>Watch Now</h4>
              <h6>Hulu</h6>
              <a href="https://www.hulu.com">on Hulu</a>
            </div>
          </div>



        </Box>
      </Modal>
    </div>
  )
}

export default FilmModal