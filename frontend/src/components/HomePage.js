import React from 'react'
import UserDetails from './userDetails/UserDetails'
import UserDetailsForm from './userDetails/UserDetailsForm'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  state = {
    showForm: false,
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm})
  }

  closeForm = () => {
    this.setState({ showForm: false})
  }

  render() {
    return (
      <div className="homepage-header">
      <h1>Welcome to Kratos</h1>
      {
        this.props.username
        ? null
        : <p> <Link to='/signin'>Sign in</Link> or <Link to='/signup'>sign up</Link> to continue</p>
      }
      <br />
      {
        this.props.username &&
          <>
            <UserDetails username={this.props.username}/>
            {this.state.showForm ? <UserDetailsForm username={this.props.username} closeForm={this.closeForm}/> : <button onClick={this.toggleForm}> Update your profile </button> }
          </>
      }
      </div>
    );
  }
}

export default HomePage;
