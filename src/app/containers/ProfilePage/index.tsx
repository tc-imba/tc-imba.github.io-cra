import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
// import { Masthead } from './Masthead';
// import { Features } from './Features';
import { Box, Grid } from '@material-ui/core';

import { PageWrapper } from 'app/components/PageWrapper';
import { CodingActivity } from 'app/components/CodingActivity';
import { ProfileCard } from 'app/components/Profile';

export function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="profile page" />
      </Helmet>
      <NavBar page="profile" />
      <PageWrapper>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Box mb={3}>
              <ProfileCard />
            </Box>
            <Box my={3}>
              <CodingActivity wakatimeType="activity" link="/profile/code" />
            </Box>
            <Box my={3}>
              <CodingActivity wakatimeType="language" link="/profile/code" />
            </Box>
          </Grid>
          <Grid item md={8}></Grid>
        </Grid>
        {/*<Masthead />*/}
        {/*<Features />*/}
      </PageWrapper>
    </>
  );
}
