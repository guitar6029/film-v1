import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MenuItem from './MenuItem';
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import './Menu.css';

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} id="menuTitle"><MenuIcon id="menuIcon" />Menu</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* sx={style} */}
        <Box className='box'>

        <CancelIcon id="closeMenu" onClick={handleClose}/>
          <div>
          <div className="menu__block">
            <div className='menu__block__title'>
                <h3>Movies</h3>
            </div>
              <div className='menu__block__items' >
                <MenuItem path="/calendar" name="Released Calendar" />
                <MenuItem path="/chart" name="Top 250 Movies" />
                <MenuItem path="/chart/moviemeter" name="Most Popular Movies" />
                <MenuItem path="/feature/genre" name="Browse Movies By Genre" />
                <MenuItem path="/chart/boxoffice" name="Top Box Office" />
                <MenuItem path="/showtimes" name="Showtimes &amp; Tickets" />
                <MenuItem path="/news/movies" name="Movie News" />
              </div>
          </div>
            <div className='menu__block'>
              <div className='menu__block__title'>
                <h3>TV Shows</h3>
              </div>
              <div className='menu__block__items' >
                <MenuItem path="/whats-on-tv" name="What's on TV &amp; Steaming" />
                <MenuItem path="/chart/toptv" name="Top 250 TV Shows" />
                <MenuItem path="/chart/tvmeter" name="Most Popular TV Shows" />
                <MenuItem path="/feature/genre" name="Browse TV Shows By Genre" />
                <MenuItem path="/showtimes" name="Showtimes &amp; Tickets" />
                <MenuItem path="/news/tv" name="TV News" />
              </div>
            </div>

            <div className='menu__block'>
              <div className='menu__block__title'>
                <h3>Watch</h3>
              </div>
              <div className='menu__block__items' >
                <MenuItem path="/what-to-watch" name="What to Watch" />
                <MenuItem path="trailers" name="Trailers" />
                <MenuItem path="/originals" name="IMDB Originals" />
                <MenuItem path="/imdbpicks" name="IMDB Picks" />
                <MenuItem path="/showtimes" name="Showtimes &amp; Tickets" />
                <MenuItem path="/podcasts" name="IMDB Podcasts" />
              </div>
            </div>
          </div>

          <div className='menu__block' id="awards">
            <div className='menu__block__title'>
              <h3>Awards &amp; Events</h3>
            </div>
            <div className='menu__block__items' >
              <MenuItem path="/oscars" name="Oscars" />
              <MenuItem path="/feature/bestpicture" name="Best Picture Winners" />
              <MenuItem path="/emmys" name="Emmys" />
              <MenuItem path="/starmeterawards" name="STARmeter Awards" />
              <MenuItem path="/comic-com" name="San Diego Comin-Con" />
              <MenuItem path="/nycc" name="New York Comic-Con" />
              <MenuItem path="/sundance" name="Sundance Film Festival" />
              <MenuItem path="/toronto" name="Toronto Int'l Film Festival" />
              <MenuItem path="/awards-central" name="Awards Central" />
              <MenuItem path="/festival-central" name="Festival Central" />
              <MenuItem path="/events/all" name="All Events" />
            </div>
          </div>

          <div className='menu__block' id="celebs">
            <div className='menu__block__title'>
              <h3>Celebs</h3>
            </div>
            <div className='menu__block__items'>
              <MenuItem path="/feature/bornondate" name="Born Today" />
              <MenuItem path="/starmeter" name="Most Popular Celebs" />
              <MenuItem path="news/celebrity" name="Celebrity News" />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
