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
import { Image } from '@material-ui/icons';

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
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Image />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={post.title} secondary={post.date} />
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
