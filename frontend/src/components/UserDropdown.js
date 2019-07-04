import React from 'react';

class UserDropdown extends React.Component {
  state = {
    showMenu: false
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
  return (
    <div>
      <img src={require('../images/cog.jpg')} width='35' onClick={this.toggleMenu} alt=""/>
      {
        this.state.showMenu
          ? 
            <div className="menu">

            </div>
          : null
      }
    </div>
  )}
}

export default UserDropdown


