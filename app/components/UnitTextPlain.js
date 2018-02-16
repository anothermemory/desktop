// @flow
import React from 'react';
import {Button, Card, Container, Form, Grid, Header, Icon, Item, Label, List, TextArea} from 'semantic-ui-react'

var classNames = require('classnames');
// import {
//   Button, Classes, Dialog, Intent, NonIdealState, ButtonGroup, NavbarGroup, NavbarHeading, NavbarDivider,
//   Card,EditableText,Tab2, Tabs2
// } from '@blueprintjs/core'

type Props = {
  // text: string
};
type State = {
};
//
// var PreviewPanel = () => (
//   <Card elevation={Card.ELEVATION_1} interactive={false} >
//     <div>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//     </div>
//   </Card>
// );
//
// var EditPanel = () => (
//   <Card elevation={Card.ELEVATION_1} interactive={false} >
//     <EditableText multiline={true} value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
//   </Card>
// );

export default class UnitTextPlain extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>Matthew Harris</Card.Header>
          <Card.Meta>Updated 22, 2018 at 11:26</Card.Meta>
        </Card.Content>
        <Card.Content>
          <Form>
            <TextArea autoHeight placeholder='Try adding multiple lines' style="width:100%"/>
          </Form>
        </Card.Content>
        <Card.Content extra>
          <Button icon="add" size="tiny"  />
          <Button icon="delete" size="tiny" floated="right" negative />
        </Card.Content>
      </Card>
    );
  }




}
