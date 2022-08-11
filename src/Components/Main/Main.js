import Navbar from '../Navbar/Navbar';
import Wrapper from '../Wrapper';
import Section from './Section/Section';
//import {Notify} from '../../Context/NotificationContext';
import './Main.css';

function Main({ addToWatchList,
  getFilmID,
  filmFeatured,
  filmExclusive }) {

    // const {notifyUser} = Notify();

  const handleGetFilmID = (id) => {

    getFilmID(id);
  }

  

  const handleFilmData = (filmObj) => {

    addToWatchList(filmObj);
  }

  return (
    <Wrapper>

      <Navbar />

      <Section title="What to Watch" films={filmFeatured} getFilmID={handleGetFilmID} getFilmData={handleFilmData} />
      
      <Section title="Fan Favorites" films={filmExclusive} getFilmID={handleGetFilmID} getFilmData={handleFilmData} />

    </Wrapper>
  )
}

export default Main