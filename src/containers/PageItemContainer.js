import React from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Divider, Header, Icon, Container, Tab } from 'semantic-ui-react'
import PageLoader from '../components/PageLoader.js'
import TabNgramItemGrid from '../components/TabNgramItemGrid.js'
import TabSEODataTable from '../components/TabSEODataTable.js'
import TabPageItemBody from '../components/TabPageItemBody.js'
import TabPageInsightsTable from '../components/TabPageInsightsTable.js'
import { filterUnigrams, getBigrams } from '../utilities/ngrams.js'

import { fetchPage } from '../actions/pageActions.js'

class PageItemContainer extends React.Component {

	componentDidMount() {
		if(!!this.props.thisPage) {
			this.props.fetchPage(this.props.thisPage.id)
		}
	}

	render() {
		if(!!this.props.thisPage) {
			const	panes = [
				{ menuItem: 'Page Insights', render: () =>
					<TabPageInsightsTable insights={this.props.pageInsights} />
				},
			  { menuItem: 'Essential SEO Data', render: () =>
			  	<TabSEODataTable
			  		pageData={ this.props.thisPage }
			  		siteData={ this.props.parentSite }
		  		/>
		  	},
			  { menuItem: 'Term Usage Frequency in Document', render: () =>
			  	<TabNgramItemGrid
						unigrams={ filterUnigrams(this.props.thisPage.body_text).slice(0,12) }
						bigrams={ getBigrams(this.props.thisPage.body_text).slice(0,12) }
					/>
				},
			  { menuItem: 'Captured Page Text', render: () =>
			  	<TabPageItemBody bodyText={this.props.thisPage.body_text} />
			  }
			]
			const { thisPage } = this.props

			return(
				<Segment>
				  <Grid padded relaxed style={{ marginTop: '7em' }}>
				  	<Divider hidden />
				  	<Header as="h1" style={{marginTop: '2em'}}>
				  		<Icon name="file text outline" />
				  		{thisPage.title}
				  	</Header>
			  	</Grid>
			  	<Tab style={{ marginTop: '2em' }} menu={{ pointing: true }} panes={ panes } />

			  </Segment>
			)
		} else {
			return(
				<Container style={{ marginTop: '7em' }}>
					<PageLoader />
				</Container>
			)
		}
	}
}

function mapStateToProps(state) {
	const currPageId = +window.location.pathname.split("/")[4]
	const currPage = state.pages.find(page => currPageId === page.id)
	const parentSiteId = +window.location.pathname.split("/")[2]
	const currSite = state.sites.find(site => parentSiteId === site.id)
	const pageInsights = state.insights.filter(insight => insight.page_id === currPageId)

	return {
		loggedIn: state.loggedIn,
		thisPage: currPage,
		parentSite:  currSite,
		pageInsights: pageInsights
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPage: (id) => {
			dispatch(fetchPage(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PageItemContainer)
