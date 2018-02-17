import React from 'react';
import {storiesOf} from '@storybook/react';
import { decorateAction } from '@storybook/addon-actions';
import {host} from 'storybook-host';
import 'semantic-ui-css/semantic.min.css';
import UnitTextPlain from "../app/components/UnitTextPlain";


var defaultProps = {
  id: "123",
  title: "Unit Title",
  created: new Date(),
  updated: new Date(),
  onTitleChanged: decorateAction([args => args]),
};

storiesOf('UnitTextPlain', module)
  .addDecorator(host({
    title: 'Text Plain unit.',
    align: 'left top',
    height: 400,
    width: "100%",
    background: false,
  }))
  .add('Normal mode with small amount of text', () => (
    <UnitTextPlain {...defaultProps} />
  ))
  .add('Normal mode with a couple paragraphs', () => (
    <UnitTextPlain {...defaultProps} />
  ))
  ;
