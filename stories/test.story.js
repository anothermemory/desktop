import React from 'react';
import { storiesOf } from '@storybook/react';
import {ProgressBar, Intent} from '@blueprintjs/core';
import { host } from 'storybook-host';

import "@blueprintjs/core/dist/blueprint.css";

storiesOf('Progress', module)
  .addDecorator(host({
    title: 'A host container for components under test.',
    align: 'center middle',
    height: '80%',
    width: 400,
    background: true,
  }))
  .add('Bar with value', () => (
    <ProgressBar intent={Intent.SUCCESS} value={0.7} />
  ))
  .add('Bar indeterminate', () => (
    <ProgressBar intent={Intent.WARNING} />
  ));
