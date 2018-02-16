// @flow
import React from 'react';
import {Button, Card, Container, Form, Grid, Header, Icon, Item, Label, List, TextArea} from 'semantic-ui-react'
import UnitTextPlain from "./UnitTextPlain";

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

export default class UnitList extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <List>
          <List.Item><List.Content><UnitTextPlain/></List.Content></List.Item>
          <List.Item><List.Content><UnitTextPlain/></List.Content></List.Item>
          <List.Item><List.Content><UnitTextPlain/></List.Content></List.Item>
          <List.Item><List.Content><UnitTextPlain/></List.Content></List.Item>
        </List>
      </div>
    );
  }




}
