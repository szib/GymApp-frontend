import React from 'react';
import { Menu } from 'semantic-ui-react';
import SignUp from './UserDropdown';
import { Link } from 'react-router-dom'

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
            <Menu.Item position='right'>
              {
                this.props.username 
                ? 
                  `Logged in as: ${this.props.username}`
                : 'Not logged in'
              }
            </Menu.Item>
            <Menu.Item position="right">
              <SignUp />
            </Menu.Item>
          </Menu>
        </div>
    )}
}

export default Nav
