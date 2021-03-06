import React from 'react';
import { Table, Grid } from 'semantic-ui-react';
import Page from './Page.js';

const PageTable = (props) => {
  const pages = props.pages.map((page, idx) => {
    return <Page key={idx} {...page} siteId={props.siteId} />;
  });

  return (
    <Grid.Column>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Details</Table.HeaderCell>
            <Table.HeaderCell>Page Path</Table.HeaderCell>
            <Table.HeaderCell>Page Title</Table.HeaderCell>
            <Table.HeaderCell>Word Count</Table.HeaderCell>
            <Table.HeaderCell collapsing textAlign="right">
              Actions
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{pages}</Table.Body>
      </Table>
    </Grid.Column>
  );
};

export default PageTable;
