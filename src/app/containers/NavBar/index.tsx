import React from 'react';
import { AppBar, Tab, Tabs, Toolbar, Container } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  page?: 'home' | 'profile' | 'posts';
}

interface State {
  tab: number;
}

const mapPageToTab = {
  home: 0,
  profile: 1,
  posts: 2,
};

export class NavBar extends React.Component<Props, State> {
  static defaultProps = {
    page: '',
  };

  getTabFromPage(page: string) {
    if (mapPageToTab.hasOwnProperty(page)) {
      return mapPageToTab[page];
    }
    return false;
  }

  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      tab: this.getTabFromPage(props.page || ''),
    };
  }

  render() {
    return (
      <header>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <Tabs value={this.state.tab}>
                <Tab label="Home" component={RouterLink} to="/" />
                <Tab label="Profile" component={RouterLink} to="/profile" />
                <Tab label="Posts" component={RouterLink} to="/posts" />
              </Tabs>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
    );
  }
}
