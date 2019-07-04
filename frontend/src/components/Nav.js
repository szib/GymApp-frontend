import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
// import SignUp from './UserDropdown';
import { Link } from 'react-router-dom'
// import UserDropdown from './UserDropdown';

class Nav extends React.Component {
  render() {  
    return (
        <div>
          <Menu className="fixed-top" style={{backgroundColor:"yellow"}}>
            <Menu.Item>
              <Link to='/'><h1>Kratos</h1></Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/newWorkout'><h3>New workout</h3></Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/workoutHistory'><h3>Past workouts</h3></Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/'><h3>Body weight</h3></Link>
            </Menu.Item>
            <Menu.Item >
              {
                this.props.username 
                ? 
                  `Logged in as: ${this.props.username}`
                : 'Not logged in'
              }
            </Menu.Item>
            <Dropdown attached='bottom' icon='wrench' position='left'>
              <Dropdown.Menu>
                <Dropdown.Item><Link to='/signin'>Sign In</Link></Dropdown.Item>
                <Dropdown.Item><Link to='/signup'>Sign Up</Link></Dropdown.Item>
                <Dropdown.Item onClick={this.props.signout}>Sign out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </div>
    )}
}

export default Nav
