import React from 'react'

import { Link } from 'react-router-dom'

const HomePage = props =>
  <div className="homepage-header">
    <h1>Welcome to Kratos</h1>
    {
      props.username
      ? null
      : <div><Link to='/signin'>Sign In</Link></div>
    }
    {
      props.username
      ? null
      : <div><Link to='/signup'>Sign Up</Link></div>
    }
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
    {/* {
      props.username
      ? <div>
        <Link to='/newWorkout'>Work out!</Link>
        <br />
        <Link to='/workoutHistory'>Workout history</Link>
        </div>
      : null
    } */}

  </div>

export default HomePage