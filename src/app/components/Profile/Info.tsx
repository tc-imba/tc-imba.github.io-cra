import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';

interface Props {
  icon: SvgIconComponent;
}

export class Info extends React.Component<Props, {}> {
  render() {
    const Icon = this.props.icon;

    return (
      <Box
        my={0.1}
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Box mx={0.5}>
          <Icon style={{ fontSize: 20 }} />
        </Box>
        <Typography variant="body2">{this.props.children}</Typography>
      </Box>
    );
  }
}
