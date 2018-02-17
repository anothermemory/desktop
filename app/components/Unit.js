// @flow
import React from 'react';
import {Button, Card} from 'semantic-ui-react'
import {EditableText} from '@blueprintjs/core'

const moment = require('moment');

type Props = {
  id: string,
  title: string,
  created: Date,
  updated: Date,
  onTitleChanged: (title : string) => void,
};
type State = {};

export default class Unit extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <EditableText defaultValue={this.props.title} onConfirm={this.props.onTitleChanged} />
            <Button icon="delete" size="mini" floated="right" negative compact/>
          </Card.Header>
          <Card.Meta>Updated {moment(this.props.updated).format("D, YYYY [at] HH:mm")}</Card.Meta>
        </Card.Content>
        <Card.Content>
          {this.renderBody()}
        </Card.Content>
      </Card>
    );
  }

  renderBody(): React$Node {

  }
}
