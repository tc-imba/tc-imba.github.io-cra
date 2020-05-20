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
import { GitHubButton, GitHubButtonProvider } from 'react-github-button';

import config from 'config';

export class Profile extends React.Component {
  githubFollow() {
    return (
      <Box my={1} display="flex" justifyContent="center">
        <GitHubButtonProvider namespace="tc-imba">
          <GitHubButton
            type="followers"
            label={`Follow @${config.info.github}`}
          />
        </GitHubButtonProvider>
      </Box>
    );
  }

  location() {
    return (
      <Box
        my={0.1}
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Box mx={0.5}>
          <LocationOn style={{ fontSize: 20 }} />
        </Box>
        <Typography variant="body2">{config.info.location}</Typography>
      </Box>
    );
  }

  email() {
    return (
      <Box
        my={0.1}
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Box mx={0.5}>
          <Email style={{ fontSize: 20 }} />
        </Box>
        <Typography variant="body2">
          <Link href={`mailto:${config.info.email}`}>{config.info.email}</Link>
        </Typography>
      </Box>
    );
  }

  website() {
    return (
      <Box
        my={0.1}
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Box mx={0.5}>
          <LinkIcon style={{ fontSize: 20 }} />
        </Box>
        <Typography variant="body2">
          <Link href={config.info.email}>{config.info.website}</Link>
        </Typography>
      </Box>
    );
  }

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
          {config.info.github ? this.githubFollow() : null}
          {config.info.location ? this.location() : null}
          {config.info.email ? this.email() : null}
          {config.info.website ? this.website() : null}
        </CardContent>
      </Card>
    );
  }
}
