// @flow
import React from 'react';
import {Button, Card, Container, Form, Grid, Header, Icon, Item, Label, List, TextArea} from 'semantic-ui-react'
import UnitTextPlain from "./UnitTextPlain";

var faker = require('faker');

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

    const itemCount = 10;

    return (
      <div>
        <List>
          {[...Array(itemCount)].map((e, i)=> <List.Item><List.Content>
            <UnitTextPlain {...defaultProps}
                           title={faker.random.words()}
                           updated={faker.date.past()}
                           isEditing={faker.random.boolean()}
                           data={faker.lorem.paragraphs(10)}
            />
          </List.Content></List.Item>)}
        </List>
      </div>
    );
  }




}
