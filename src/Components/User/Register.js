import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { UserAuth } from '../../Context/AuthContext';

export default function Register() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    const { createUser } = UserAuth();

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
            await createUser(email , password);
           navigate('/register/signin');
        } catch (err) {
            console.log(err.messsage);
        }
    }


    return (
        <div className="register">
            <div className="register__form">
                <form onSubmit={handleSubmit}>
                    <div className="register__form__block">
                        <h3 className="register__form__blockTitle">Register</h3>
                    </div>
                    <div className='register__form__block'>
                        <label>Email</label>
                        <input type="email" required onChange={handleEmail} />
                    </div>
                    <div className='register__form__block'>
                        <label>Password</label>
                        <input type="password" required onChange={handlePassword} />
                    </div>
                    <div className='register__form__block'>
                    <button>Create Account</button>
                    </div>
                    <div className="register__form__block">
                    <h3>Already have an account? <Link to='/register/signin'>Sign in</Link></h3>
                    </div>
                </form>
            </div>
        </div>
    )
}