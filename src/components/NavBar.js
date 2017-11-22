import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {
	constructor(){
		super()

		this.state = {
			activeItem: ''
		}
	}

	handleItemClick = (e, { name }) => {
		this.setState({
			activeItem: name
		})
	}

	render(){
		const { activeItem } = this.state

		return (
			<div className="menu ui">
        <Menu pointing secondary>
          <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/dashboard" name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/sites" name='sites' active={activeItem === 'sites'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/insights" name='insights' active={activeItem === 'insights'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
			</div>
		)
	}
}

export default NavBar