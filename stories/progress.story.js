import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Home from '../app/components/Home';

import "@blueprintjs/core/dist/blueprint.css";
import {host} from "storybook-host";

storiesOf('Home', module)
  .addDecorator(host({
    title: 'A host container for components under test.',
    align: 'center middle',
    height: '80%',
    width: 400,
    background: true,
  }))
  .add('with text', () => (
    <Home />
  ))
  .add('with some emoji', () => (
    <Home />
  ));
