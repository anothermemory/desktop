import React from 'react';
import {storiesOf} from '@storybook/react';
import {Card, Intent, ProgressBar, Text} from '@blueprintjs/core';
import {host} from 'storybook-host';
import "@blueprintjs/core/dist/blueprint.css";

var Lorem = require('react-lorem-component');

storiesOf('Unit.TextPlain', module)
  .addDecorator(host({
    title: 'Text Plain unit.',
    align: 'left top',
    height: 400,
    width: 400,
    background: false,
  }))
  .add('Normal mode with small amount of text', () => (
    <Card elevation={Card.ELEVATION_1} interactive={false} >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </Card>
  ))
  .add('Normal mode with a couple paragraphs', () => (
    <Card elevation={Card.ELEVATION_1} interactive={false} >
        <Lorem format="plain" />
    </Card>
  ))
  .add('Normal mode multiple instances', () => (
    <div>
      <Card elevation={Card.ELEVATION_1} interactive={false}>
        <Lorem format="plain"/>
      </Card>
      <Card elevation={Card.ELEVATION_1} interactive={false}>
        <Lorem format="plain"/>
      </Card>
    </div>
  ))
  ;
