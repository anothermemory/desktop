import React from 'react';
import {storiesOf} from '@storybook/react';
import {host} from 'storybook-host';
import { action,decorateAction } from '@storybook/addon-actions';
import 'semantic-ui-css/semantic.min.css';
import Unit from "../app/components/Unit";

var defaultProps = {
  id: "123",
  title: "Unit Title",
  created: new Date(),
  updated: new Date(),
  onTitleChanged: action("Title changed"),
  onEditClicked: action("Edit clicked"),
  onSaveClicked: action("Save clicked"),
  onDeleteClicked: action("Delete clicked"),
  viewBody: <div>VIEW</div>,
  editBody: <div>EDIT</div>,
  isEditing: false,
};

storiesOf('Unit', module)
  .addDecorator(host({
    title: 'Unit',
    align: 'left top',
    height: 400,
    width: "100%",
    background: false,

  }))
  .add('View mode', () => (
    <Unit {...defaultProps} />
  ))
  .add('View mode no title', () => (
    <Unit {...defaultProps} title=""/>
  ))
  .add('View mode long title', () => (
    <Unit {...defaultProps} title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
  ))
  .add('Edit mode', () => (
    <Unit {...defaultProps} isEditing={true}/>
  ))
;
