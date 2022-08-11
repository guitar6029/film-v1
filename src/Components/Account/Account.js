import Navbar from '../Navbar/Navbar';
import Wrapper from '../Wrapper';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountOptionItem from './AccountOptionItem/AccountOptionItem';
import { UserAuth } from '../../Context/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';
import './Account.css';
import { useNavigate } from 'react-router-dom';


function Account() {


  const { user, logoutUser } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async (user) => {
    try {

      await logoutUser(user);
      navigate('/');
      console.log('logged out');
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <Wrapper>
      <Navbar />
      <div className='section__block margin-top'>
        {/* {(user) && <h3 className='section__title'>Signed as : {user.email}</h3>} */}

        <div className='section__option'>
          <LogoutIcon className='icon' onClick={handleLogout} />
          <h3 className='section__option__title'>Logout</h3>

        </div>

        <AccountOptionItem name="Account Settings" Icon={SettingsIcon} myPath="settings" />
        <AccountOptionItem name="Watchlist" Icon={BookmarkIcon} myPath="watchlist" />

      </div>
    </Wrapper>
  )
}

export default Account