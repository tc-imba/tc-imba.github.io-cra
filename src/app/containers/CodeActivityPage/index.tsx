import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { Grid } from '@material-ui/core';

import { PageWrapper } from 'app/components/PageWrapper';
import { CodingActivity } from 'app/components/CodingActivity';

export class CodeActivityPage extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Code Activity</title>
          <meta name="description" content="code activity page" />
        </Helmet>
        <NavBar />
        <PageWrapper>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <CodingActivity wakatimeType="activity" />
            </Grid>
            <Grid item md={6}>
              <CodingActivity wakatimeType="language" />
            </Grid>
            <Grid item md={6}>
              <CodingActivity wakatimeType="editor" />
            </Grid>
            <Grid item md={6}>
              <CodingActivity wakatimeType="os" />
            </Grid>
          </Grid>
        </PageWrapper>
      </>
    );
  }
}
