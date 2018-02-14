// @flow
import React from 'react';
import {Button, Classes, Dialog, Intent, NonIdealState} from '@blueprintjs/core'

type Props = {};
type State = {
  test: boolean,
};

export default class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = ({test: false})
  }

  handleClick = () => {
    this.setState(prevState => ({
      test: !prevState.test,
    }));
  };


  render() {
    return (
      <div>
        <Button onClick={this.handleClick} text="Show dialog"/>
        <Dialog
          iconName="refresh"
          isOpen={this.state.test}
          onClose={this.handleClick}
          title="Dialog header"
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
