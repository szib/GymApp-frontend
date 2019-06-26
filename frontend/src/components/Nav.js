import React from 'react';
// import TrackWorkout from './TrackWorkout';
// import BodyWeight from './BodyWeight';
import { Menu } from 'semantic-ui-react';
import SignUp from './SignUp';

const Nav = (props) => {
    return (
      <div>
        <Menu className="fixed-top" style={{backgroundColor:"yellow"}}>
        <Menu.Item>
          <h1>Gym App</h1>
        </Menu.Item>
        <Menu.Item position="right">
          <SignUp />
        </Menu.Item>
        </Menu>
      </div>
    )
}

export default Nav
