import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import placeholder from '../assets/paragraph.png'

export default class PagesContainer extends React.Component {
	constructor(){
		super()

		this.state ={

		}
	}

	render(){
		return(

			  <Grid padded relaxed style={{ marginTop: '7em' }}>
			    <Grid.Row>
			      <Grid.Column width={8}>
			        <Image src={placeholder} alt="placeholder paragraph" />
			      </Grid.Column>
			      <Grid.Column width={8}>
			        <Image src={placeholder} alt="placeholder paragraph" />
			      </Grid.Column>
			    </Grid.Row>

			    <Grid.Row>
			      <Grid.Column width={16}>
			        <Image src={placeholder} alt="placeholder paragraph" />
			      </Grid.Column>
			    </Grid.Row>
			  </Grid>

		)
	}
}