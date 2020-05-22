import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
} from '@material-ui/core';
import { config } from 'config';
import { Link } from 'react-router-dom';

type WakatimeType = 'activity' | 'language' | 'editor' | 'os';

interface Props {
  wakatimeType: WakatimeType;
  link?: string;
}

interface State {
  url: string;
  title: string;
}

const titles = {
  activity: 'Code Activity',
  language: 'Languages',
  editor: 'Editors',
  os: 'Operating Systems',
};

export class CodingActivity extends React.Component<Props, State> {
  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      url: this.generateURL(props.wakatimeType),
      title: titles[props.wakatimeType],
    };
  }

  generateURL(wakatimeType) {
    if (!config.wakatime.hasOwnProperty('username')) return '';
    if (!config.wakatime.hasOwnProperty(wakatimeType)) return '';
    if (!config.wakatime[wakatimeType]) return '';
    return `https://wakatime.com/share/@${config.wakatime.username}/${config.wakatime[wakatimeType]}.svg`;
  }

  cardContent() {
    return (
      <CardContent>
        {this.state.url ? (
          <figure>
            <embed src={this.state.url} />
          </figure>
        ) : (
          'Unavailable'
        )}
      </CardContent>
    );
  }

  render() {
    return (
      <Card>
        <CardHeader title={this.state.title} />
        {this.props.link ? (
          <CardActionArea>
            <Link to={this.props.link}>{this.cardContent()}</Link>
          </CardActionArea>
        ) : (
          this.cardContent()
        )}
      </Card>
    );
  }
}
