import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { Icon } from '@material-ui/core';

import appdata from 'appdata.json';
import { Post as PostType } from 'types/Post';

interface Props {}

interface State {}

export class PostList extends React.Component<Props, State> {
  posts: Array<PostType>;

  constructor(props: Props, context: any) {
    super(props, context);
    this.posts = appdata.posts.slice(0, 4);
  }

  post(post: PostType) {
    let secondary = post.date;
    if (post.abstract) {
      secondary += ' - ' + post.abstract;
    }
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={post.title} secondary={secondary} />
      </ListItem>
    );
  }

  render() {
    return (
      <Box my={5}>
        <Card>
          <CardHeader title="Recent Posts" />
          <CardContent>
            <List>{this.posts.map(post => this.post(post))}</List>
          </CardContent>
        </Card>
      </Box>
    );
  }
}
