// @flow
import React from 'react';
import {Card, Confirm, Dropdown, Grid} from 'semantic-ui-react'
import {EditableText} from '@blueprintjs/core'

const moment = require('moment');

type Props = {
  id: string,
  title: string,
  created: Date,
  updated: Date,
  onTitleChanged: (title : string) => void,
  onEditClicked: () => void,
  onSaveClicked: () => void,
  onDeleteClicked: () => void,
  editBody: React$Node,
  viewBody: React$Node,
  isEditing: boolean,
};

type State = {
  isDeleteConfirmOpened: boolean
};

export default class Unit extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {isDeleteConfirmOpened: false};
  }

  handleDeleteConfirm = () => {
    this.hideDeleteConfirm();
    this.props.onDeleteClicked();
  };

  showDeleteConfirm = () => {
    this.setState({isDeleteConfirmOpened: true});
  };

  hideDeleteConfirm = () => {
    this.setState({isDeleteConfirmOpened: false});
  };


  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            <Grid columns='equal'>
              <Grid.Row stretched>
                <Grid.Column>
                  <EditableText defaultValue={this.props.title} onConfirm={(value) => this.props.onTitleChanged(value)} placeholder="Click to Edit Title"/>
                </Grid.Column>
                <Grid.Column floated='right' width={1}>
                  <Dropdown icon='ellipsis horizontal' compact floating>
                    <Dropdown.Menu className='left'>
                      {!this.props.isEditing && <Dropdown.Item icon="edit" text='Edit' onClick={()=>this.props.onEditClicked()}/>}
                      {this.props.isEditing && <Dropdown.Item icon="save" text='Save' onClick={()=>this.props.onSaveClicked()}/>}
                      <Dropdown.Item icon='delete' text='Delete' onClick={this.showDeleteConfirm}/>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Header>
          <Card.Meta>Updated {moment(this.props.updated).format("D, YYYY [at] HH:mm:ss")}</Card.Meta>
        </Card.Content>
        {this.props.isEditing && <Card.Content>{this.props.editBody}</Card.Content>}
        {!this.props.isEditing && <Card.Content>{this.props.viewBody}</Card.Content>}
        <Confirm open={this.state.isDeleteConfirmOpened}
                 content='Are you sure wants to delete this unit?'
                 onConfirm={this.handleDeleteConfirm}
                 onCancel={this.hideDeleteConfirm}/>
      </Card>
    );
  }
}
