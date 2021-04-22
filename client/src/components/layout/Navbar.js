import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className="user">Hello <span className="text-second">{user && user.name}! </span></li>
      <li>
        <a className="current" href='/'>Home</a>
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          Logout
        </a>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        Dashboard
      </h1>
      <ul>{ authLinks }</ul>
    </div>
  );
};

export default Navbar;
