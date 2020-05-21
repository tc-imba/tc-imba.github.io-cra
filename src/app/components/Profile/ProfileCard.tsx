import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
} from '@material-ui/core';
import { LocationOn, Email, Link as LinkIcon } from '@material-ui/icons';

import 'react-github-button/src/styles.css';
import { GitHubFollowButton } from './GitHubFollowButton';
import { Info } from './Info';

import config from 'config';

export class ProfileCard extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Grid container justify="center">
            <Grid item xs={9} md={6}>
              <img
                src={`${process.env.PUBLIC_URL}/${config.info.logo}`}
                alt=""
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>
          <Box my={1}>
            <Typography variant="h4" align="center">
              {config.info.author}
            </Typography>
          </Box>
          <Box my={1}>
            <Typography variant="body2" align="center">
              {config.info.bio}
            </Typography>
          </Box>
          {config.info.github ? (
            <GitHubFollowButton namespace={config.info.github} />
          ) : null}
          {config.info.location ? (
            <Info icon={LocationOn}>{config.info.location}</Info>
          ) : null}
          {config.info.email ? (
            <Info icon={Email}>
              <Link href={`mailto:${config.info.email}`}>
                {config.info.email}
              </Link>
            </Info>
          ) : null}
          {config.info.website ? (
            <Info icon={LinkIcon}>
              <Link href={config.info.email}>{config.info.website}</Link>
            </Info>
          ) : null}
        </CardContent>
      </Card>
    );
  }
}
