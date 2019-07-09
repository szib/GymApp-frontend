import React from 'react'
import UserDetails from './UserDetails'
import UserDetailsForm from './UserDetailsForm'

const HomePage = props =>
  <div className="homepage-header">
    <h1>Welcome to Kratos</h1>
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
    <UserDetails />
    <UserDetailsForm />
  </div>

export default HomePage