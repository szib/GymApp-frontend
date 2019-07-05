import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
// import SignUp from './UserDropdown';
import { Link } from 'react-router-dom'
// import UserDropdown from './UserDropdown';

const cogPicture = <img src={require('../images/cog.jpg')} width='35' alt=""/>
class Nav extends React.Component {
  render() {  
    const { username , signout } = this.props
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
              <Link to='/bodyWeight'><h3>Body weight</h3></Link>
            </Menu.Item>
            <Menu.Item position='right' >
              {
                username 
                ? 
                  `Logged in as: ${username}`
                : 'Not logged in'
              }
            </Menu.Item>
            <Dropdown direction='left' icon={cogPicture} style={{ marginTop: '14px', float: 'right'}}>
              <Dropdown.Menu>
                { !username ? <Dropdown.Item><Link to='/signin'>Sign In</Link></Dropdown.Item> : null }
                { !username ? <Dropdown.Item><Link to='/signup'>Sign Up</Link></Dropdown.Item> : null }
                { username ? <Dropdown.Item onClick={signout}>Sign out</Dropdown.Item> : null }
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </div>
    )}
}

export default Nav
