import React from 'react'

import { Link } from 'react-router-dom'

const HomePage = props =>
  <div>
    <h1>Gym Homepage!</h1>
    {
      props.username
      ? ""
      : <Link to='/signin'>Sign In</Link>
    }
    <br />
    {
      props.username
      ? ""
      : <Link to='/signup'>Sign Up</Link>
    }
    <br />
    {
        props.username
        ? `Welcome, ${props.username}!`
        : `Sign in to continue`
    }
    <br />
    {
        props.username &&
          <button onClick={props.signout} >
            SIGN OUT
          </button>
    }
  </div>

export default HomePage