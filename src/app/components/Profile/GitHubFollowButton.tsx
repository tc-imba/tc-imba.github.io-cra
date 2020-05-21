import React from 'react';

import { Box } from '@material-ui/core';
import { GitHubButton, GitHubButtonProvider } from 'react-github-button';

interface Props {
  namespace: string;
}

export class GitHubFollowButton extends React.Component<Props, {}> {
  render() {
    return (
      <Box my={1} display="flex" justifyContent="center">
        <GitHubButtonProvider namespace={this.props.namespace}>
          <GitHubButton
            type="followers"
            label={`Follow @${this.props.namespace}`}
          />
        </GitHubButtonProvider>
      </Box>
    );
  }
}
