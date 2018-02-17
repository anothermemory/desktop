// @flow
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import UnitList from "../components/UnitList";

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{padding: '10px', margin: '10px'}}>
        <UnitList />
        </div>
      </Provider>
    );
  }
}
