import React from 'react';

import { Box } from '@material-ui/core';
import { GitHubButton, GitHubButtonProvider } from 'react-github-button';

interface Props {
  namespace: string;
  size?: 'large';
}

export class GitHubFollowButton extends React.Component<Props, {}> {
  render() {
    let btnProps = {};
    if (this.props.size) btnProps['size'] = this.props.size;
    return (
      <Box my={1} display="flex" justifyContent="center">
        <GitHubButtonProvider namespace={this.props.namespace}>
          <GitHubButton
            {...btnProps}
            type="followers"
            label={`Follow @${this.props.namespace}`}
          />
        </GitHubButtonProvider>
      </Box>
    );
  }
}
