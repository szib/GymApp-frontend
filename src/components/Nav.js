import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { getCurrentUser } from '../services/api';

const cogPicture = <img style={{marginRight: '5px'}} src={require('../images/cog3.png')} width='35' alt=""/>
class Nav extends React.Component {
  state = {
    img: 'data:image/png;base64,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',
    anon: 'data:image/png;base64,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'
  }

  componentDidMount = () => {
    getCurrentUser()
    .then(data => {
        if (data.img === null) {
          this.setState({ img: this.state.anon })
        } else {
          this.setState({ img: data.img })
        }
    })
  }

  // componentDidUpdate = () => {
  //   if (!this.props.username) {
  //     this.setState({ img: this.state.anon})
  //   }
  // }

  render() {  
    const { username , signout } = this.props
    return (
        <div>
          <Menu className="fixed-top" style={{backgroundColor:"yellow"}}>
            <Menu.Item>
              <Link to='/'><h1>Kratos</h1></Link>
            </Menu.Item>
            {
              username && 
              <>
            <Menu.Item>
              <Link to='/newWorkout'><h3>New workout</h3></Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/workoutHistory'><h3>Past workouts</h3></Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/bodyWeight'><h3>Body weight</h3></Link>
            </Menu.Item>
              </>
            }
            <Menu.Item position='right' >
              {
                username 
                ? 
                  <>
                  <img id='avatar' style={{marginRight: '10px'}} src={this.state.img} alt=""/>
                    <div>
                      <p id='loggedIn'> Logged in as:</p>
                      <p> {username} </p>
                    </div>
                  </>
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
