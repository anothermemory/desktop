// @flow
import * as React from 'react';
import {Intent,Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button} from "@blueprintjs/core";

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
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
        {this.props.children}
      </div>
    );
  }
}
