import React from 'react'

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
  </div>

export default HomePage