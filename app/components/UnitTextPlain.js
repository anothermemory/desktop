// @flow
import React from 'react';
import {Form, TextArea} from 'semantic-ui-react'
import Unit from "./Unit";

type Props = {
  id: string,
  title: string,
  created: Date,
  updated: Date,
  onTitleChanged: (title : string) => void,
};
type State = {
};
export default class UnitTextPlain extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Unit {...this.props} body={this.renderBody()}/>
    )
  };

  renderBody(): React$Node {
    return <Form>
      <TextArea autoHeight placeholder='Add some text here...' style="width:100%"/>
    </Form>
  }
}
