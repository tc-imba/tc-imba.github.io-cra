import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import config from 'config';
import { GitHubFollowButton } from './GitHubFollowButton';

export class ProfileBox extends React.Component {
  render() {
    return (
      <Box>
        <Grid container justify="center">
          <Grid item xs={9} md={2}>
            <Box display="flex" justifyContent="center">
              <img
                src={`${process.env.PUBLIC_URL}/${config.info.logo}`}
                alt=""
                style={{ width: '75%' }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box my={1}>
          <Typography variant="h4" align="center">
            Hi, I am {config.info.author} !
          </Typography>
        </Box>
        <Box my={1}>
          <Typography variant="h6" align="center">
            <Typist>
              {config.info.typewrite}
            </Typist>
          </Typography>
        </Box>
        {config.info.github ? (
          <GitHubFollowButton namespace={config.info.github} />
        ) : null}
      </Box>
    );
  }
}
