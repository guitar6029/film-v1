import {useState} from 'react'
import TheatersIcon from '@mui/icons-material/Theaters';
import BasicModal from '../../UI/Modals/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import './Navbar.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {


  const {user, logoutUser} = UserAuth();
  const [toggleMenu, setMenu] = useState(false);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  const placeHolder = 'Search...';

  const handleLogout = async (user) =>{
    try{
    
        await logoutUser(user);
        navigate('/');
        console.log('logged out');
    }catch(e){
      console.log(e.message);
    }
  }

  const handleInput = (e) => {
      setUserInput(e.target.value);
  }

  

  return (
    <div className='navbar'>
        <div>
          <Link to="/"><TheatersIcon className='theaterIcon' /></Link>
          {/* <BasicModal className="menuIcon"/> */}
        </div>

        <div>
         <input type="text" minLength={1} placeholder={placeHolder} required onChange={handleInput}/>
         {/* <SearchIcon className='searchIcon icons' onClick={handleSubmit}/> */}
         <SearchIcon className='searchIcon icons' />
        </div>

        <div>
         { (user) ? <Link to="/user/account"><AccountCircleIcon id="account" />
        </Link> : <Link to='register/signin'>Sign In</Link>}

        </div>

    </div>
  )
}

export default Navbar