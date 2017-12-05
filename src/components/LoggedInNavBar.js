import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/userActions.js'

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
      <Menu pointing inverted className="fixed" size="huge">
        <Menu.Item 
        	as={Link} 
        	to="/dashboard" 
        	name='dashboard' 
        	active={activeItem === 'dashboard'} 
        	onClick={this.handleItemClick} 
      	/>
        <Menu.Item 
        	as={Link} 
        	to="/sites" 
        	name='sites' 
        	active={activeItem === 'sites'} 
        	onClick={this.handleItemClick} 
      	/>
        <Menu.Item 
        	as={Link} 
        	to="/insights" 
        	name='insights' 
        	active={activeItem === 'insights'} 
        	onClick={this.handleItemClick} 
      	/>
        <Menu.Menu position='right'>
          <Menu.Item 
        		name='logout' 
        		active={activeItem === 'logout'} 
        		onClick={this.props.logOutUser} 
      		/>
        </Menu.Menu>
      </Menu>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    logOutUser: () => {
      dispatch(logOutUser())
    }
  }
}

export default connect(null, mapDispatchToProps)(NavBar);