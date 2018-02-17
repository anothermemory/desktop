// @flow
import React from 'react';
import {Button, Card, Container, Form, Grid, Header, Icon, Item, Label, List, TextArea} from 'semantic-ui-react'
import UnitTextPlain from "./UnitTextPlain";


type Props = {
};
type State = {
};

export default class UnitList extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render() {

    var defaultProps = {
      id: "123",
      title: "Unit Title",
      created: new Date(),
      updated: new Date(),
      onTitleChanged: (title : string) => {},
      onEditClicked: () => {},
      onSaveClicked: () => {},
      onDeleteClicked: () => {},
      isEditing: false,
      data: 'Some data'
    };

    return (
      <div>
        <List>
          <List.Item><List.Content><UnitTextPlain {...defaultProps}/></List.Content></List.Item>
          <List.Item><List.Content><UnitTextPlain {...defaultProps} isEditing={true}/></List.Content></List.Item>
          <List.Item><List.Content><UnitTextPlain {...defaultProps}/></List.Content></List.Item>
          <List.Item><List.Content><UnitTextPlain {...defaultProps}/></List.Content></List.Item>
          <List.Item><List.Content><UnitTextPlain {...defaultProps}/></List.Content></List.Item>
          <List.Item><List.Content><UnitTextPlain {...defaultProps}/></List.Content></List.Item>
        </List>
      </div>
    );
  }




}
