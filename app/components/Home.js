// @flow
import React from 'react';
var classNames = require('classnames');
import {Button, Classes, Dialog, Intent, NonIdealState,Menu, MenuItem,ContextMenu,MenuDivider } from '@blueprintjs/core'

type Props = {};
type State = {
  test: boolean,
  isContextMenuOpen: boolean
};

export default class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = ({test: false, isContextMenuOpen:false})
  }

  handleClick = () => {
    this.setState(prevState => ({
      test: !prevState.test,
    }));
  };

  showContextMenu = (e: SyntheticMouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ContextMenu.show(
      <Menu>
        <MenuItem icon="search-around" text="Search around..." />
        <MenuItem icon="search" text="Object viewer" />
        <MenuItem icon="graph-remove" text="Remove" />
        <MenuItem icon="group-objects" text="Group" />
        <MenuDivider />
        <MenuItem disabled={true} text="Clicked on node" />
      </Menu>,
      { left: e.clientX, top: e.clientY },
      () => this.setState({ isContextMenuOpen: false }),
    );
    // indicate that context menu is open so we can add a CSS class to this element
    this.setState({ isContextMenuOpen: true });
  }

  renderContextMenu() {
    return (
      <Menu>
        <MenuItem icon="select" text="Select all" />
        <MenuItem icon="insert" text="Insert...">
          <MenuItem icon="new-object" text="Object" />
          <MenuItem icon="new-text-box" text="Text box" />
          <MenuItem icon="star" text="Astral body" />
        </MenuItem>
        <MenuDivider />
        <MenuItem icon="layout" text="Layout...">
          <MenuItem icon="layout-auto" text="Auto" />
          <MenuItem icon="layout-circle" text="Circle" />
          <MenuItem icon="layout-grid" text="Grid" />
        </MenuItem>
      </Menu>
    );
  }


  render() {
    const classes = classNames("context-menu-node", { "context-menu-open": this.state.isContextMenuOpen });
    return (
      <div>
        <div className={classes} onContextMenu={this.showContextMenu}>CLICK ME</div>
        <Button onClick={this.handleClick} text="Show dialog"/>
        <Dialog
          iconName="refresh"
          isOpen={this.state.test}
          onClose={this.handleClick}
          title="Dialog headers"
        >
          <div className="pt-dialog-body">
            Some content
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button text="Secondary"/>
              <Button
                intent={Intent.PRIMARY}
                onClick={this.handleClick}
                text="Primary"
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }


}
