// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import {Intent,Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Card} from "@blueprintjs/core";
import Home from "../components/Home";

import { Flex, Box } from 'reflexbox'

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  render() {


    return (
      <Provider store={this.props.store}>
        <Flex column>
          <Box>
            <Navbar>
              <NavbarGroup>
                <NavbarHeading>Blueprint</NavbarHeading>
              </NavbarGroup>
              <NavbarGroup align="right">
                <Button className="pt-minimal" iconName="home">Home</Button>
                <Button className="pt-minimal" iconName="document">Files</Button>
                <NavbarDivider />
                <Button className="pt-minimal" iconName="user"></Button>
                <Button className="pt-minimal" iconName="notifications"></Button>
                <Button className="pt-minimal" iconName="cog"></Button>
                <Button iconName="refresh" text="Press to refresh" intent={Intent.PRIMARY}/>
              </NavbarGroup>
            </Navbar>
          </Box>
          <Box pt={1}>
            <Flex>
              <Box p={1}><Home/></Box>
              <Box p={1}><Home/></Box>
              <Box p={1}><Home/></Box>
            </Flex>
          </Box>
          <Box>
            <Card interactive={true} elevation={Card.ELEVATION_THREE}>
              <h5><a href="#">Card heading</a></h5>
              <p>Card content</p>
              <Button>Submit</Button>
            </Card>
          </Box>
        </Flex>
      </Provider>
    );
  }
}
