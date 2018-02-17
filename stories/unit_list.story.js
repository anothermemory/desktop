import React from 'react';
import {storiesOf} from '@storybook/react';
import { decorateAction } from '@storybook/addon-actions';
import {host} from 'storybook-host';
import 'semantic-ui-css/semantic.min.css';
import UnitList from "../app/components/UnitList";


var defaultProps = {
  id: "123",
  title: "Unit Title",
  created: new Date(),
  updated: new Date(),
  onTitleChanged: decorateAction([args => args]),
};

storiesOf('UnitList', module)
  .addDecorator(host({
    title: 'UnitList.',
    align: 'left top',
    height: 400,
    width: "100%",
    background: false,
  }))
  .add('Simple', () => (
    <UnitList {...defaultProps} />
  ))
  ;
