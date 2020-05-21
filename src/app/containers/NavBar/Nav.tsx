import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';

import {
  AppBar,
  Toolbar,
  Link,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  page: string;
}

interface State {
  tab: number;
}

const mapPageToTab = {
  home: 0,
  profile: 1,
  posts: 2,
};

export class Nav extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      tab: mapPageToTab.hasOwnProperty(props.page)
        ? mapPageToTab[props.page]
        : 0,
    };
  }

  render() {
    return (
      <AppBar>
        <Toolbar>
          <Tabs value={this.state.tab}>
            <Tab label="Home" component={RouterLink} to="/" />
            <Tab label="Profile" component={RouterLink} to="/profile" />
            <Tab label="Posts" component={RouterLink} to="/posts" />
          </Tabs>
        </Toolbar>
      </AppBar>
    );
  }
}

export function Nav2() {
  return (
    <Wrapper>
      <Item
        href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
        target="_blank"
        title="Documentation Page"
        rel="noopener noreferrer"
      >
        <DocumentationIcon />
        Documentation
      </Item>
      <Item
        href="https://github.com/react-boilerplate/react-boilerplate-cra-template"
        target="_blank"
        title="Github Page"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        Github
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
