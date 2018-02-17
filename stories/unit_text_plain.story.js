import React from 'react';
import {storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {host} from 'storybook-host';
import 'semantic-ui-css/semantic.min.css';
import UnitTextPlain from "../app/components/UnitTextPlain";


var defaultProps = {
  id: "123",
  title: "Unit Title",
  created: new Date(),
  updated: new Date(),
  onTitleChanged: action("Title changed"),
  onEditClicked: action("Edit clicked"),
  onSaveClicked: action("Save clicked"),
  onDeleteClicked: action("Delete clicked"),
  isEditing: false,
  data: 'Some data'
};

storiesOf('UnitTextPlain', module)
  .addDecorator(host({
    title: 'Text Plain unit.',
    align: 'left top',
    height: 400,
    width: "100%",
    background: false,
  }))
  .add('View mode with small amount of text', () => (
    <UnitTextPlain {...defaultProps} />
  ))
  .add('View mode with a couple paragraphs', () => (
    <UnitTextPlain {...defaultProps} data='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
  ))
  .add('Edit mode with small amount of text', () => (
    <UnitTextPlain {...defaultProps} isEditing={true}/>
  ))
  .add('Edit mode with a couple paragraphs', () => (
    <UnitTextPlain {...defaultProps} isEditing={true} data='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
  ))
  ;
