import React from 'react'
import { Link } from 'react-router-dom';
import './AccountOptionItem.css';

function AccountOptionItem({name, Icon, myPath }) {
  return (
    <div className='section__option'>
            <Link to={`/user/account/${myPath}`}>
                <Icon className="icon"/>
                <h3 className='section__option__title'>{name}</h3>

            </Link>
                </div>
  )
}

export default AccountOptionItem