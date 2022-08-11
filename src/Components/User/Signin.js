import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';
import './Signin.css';


export default function Signin() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signInUser} = UserAuth();
    const navigate = useNavigate();

    const handleEmail = (e) => {

        let userEmail = e.target.value;
        setEmail(userEmail);

    }

    const handlePassword = (e) => {

        let userPassword = e.target.value;
        setPassword(userPassword);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInUser(email, password);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    }
    
    return (
        <div className="signin">
            <div className="signin__form">
                <form onSubmit={handleSubmit}>
                    <div className="signin__form__block">
                        <h3 className="signin__form__blockTitle">Sign in</h3>
                    </div>
                    <div className='signin__form__block'>
                        <label>Email</label>
                        <input type="email" required onChange={handleEmail} />
                    </div>
                    <div className='signin__form__block'>
                        <label>Password</label>
                        <input type="password" required onChange={handlePassword} />
                    </div>
                    <div className='signin__form__block'>
                    <button>Sign in</button>
                    </div>
                    <div className="signin__form__block">
                    <h3>Don't have an account? <Link to='/register'>Create Account</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    )
}