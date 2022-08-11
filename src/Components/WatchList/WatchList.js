import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Wrapper from '../Wrapper';
import Navbar from '../Navbar/Navbar';
import WatchListItem from './WathListItem/WatchListItem';
import './WatchList.css';

function WatchList({ removeWatchItemList, filmAddedToWatchList }) {


  const handleRemoveFilmItem = (id) => {
    removeWatchItemList(id);
  }

  return (
    <Wrapper>
      <Navbar />
      <div className="section__block watchlist">

        <h3 className='section__title' on>Watchlist
          <BookmarkAddIcon />
        </h3>
        {(filmAddedToWatchList.length < 1) && <h3>Nothing in watchlist, add something</h3>}
        {filmAddedToWatchList.map(film =>

          <WatchListItem film={film} getID={handleRemoveFilmItem} />

        )}

      </div>

    </Wrapper>
  )
}

export default WatchList