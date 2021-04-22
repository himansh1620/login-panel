import React, { Fragment } from 'react'
import Navbar from '../layout/Navbar';
const Home = () => {
  return (
  <Fragment>
    <Navbar />
        <div>
          <h2>You are logged in!</h2>
        </div>
  </Fragment>
  )
}

export default Home