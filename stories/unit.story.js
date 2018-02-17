import React from 'react';
import {storiesOf} from '@storybook/react';
import {host} from 'storybook-host';
import 'semantic-ui-css/semantic.min.css';
import Unit from "../app/components/Unit";

var Lorem = require('react-lorem-component');

storiesOf('Unit', module)
  .addDecorator(host({
    title: 'Unit',
    align: 'left top',
    height: 400,
    width: "100%",
    background: false,
  }))
  .add('Simple unit', () => (
    <Unit id="123" title="Some Unit Title" created={new Date()} updated={new Date()}/>
  ))
  .add('Unit without title', () => (
    <Unit id="123" title="" created={new Date()} updated={new Date()}/>
  ))
  .add('Unit with very long title', () => (
    <Unit id="123" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." created={new Date()} updated={new Date()}/>
  ))
;
