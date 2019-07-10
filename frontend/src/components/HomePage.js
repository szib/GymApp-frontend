import React from 'react'
import UserDetails from './UserDetails'
import UserDetailsForm from './UserDetailsForm'
import { Link } from 'react-router-dom'


const HomePage = props =>
  <div className="homepage-header">
    <h1>Welcome to Kratos</h1>
    {
      props.username
      ? `Welcome, ${props.username}!`
      : <p> <Link to='/signin'>Sign in</Link> or <Link to='/signup'>sign up</Link> to continue</p>
    }
    <br />
    {
      props.username &&
        <button onClick={props.signout} >
          SIGN OUT
        </button>
    }
    {
      props.username &&
        <UserDetails username={props.username}/>
    }
    {
      props.username &&
        <UserDetailsForm username={props.username}/> 
    }
  </div>

export default HomePage