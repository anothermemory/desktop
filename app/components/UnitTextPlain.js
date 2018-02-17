// @flow
import React from 'react';
import {Container, Form, TextArea} from 'semantic-ui-react'
import Unit from "./Unit";

type Props = {
  id: string,
  title: string,
  created: Date,
  updated: Date,
  onTitleChanged: (title : string) => void,
  onEditClicked: () => void,
  onSaveClicked: () => void,
  onDeleteClicked: () => void,
  isEditing: boolean,
  data:string,
};
type State = {
  data: string,
};
export default class UnitTextPlain extends React.Component<Props,State> {

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {data: props.data};
  }

  handleDataChange = (e: SyntheticEvent<TextArea>, d: { value: string }) => {
    this.setState({data: d.value})
  };

  render() {
    const editBody =
      <Form>
        <TextArea autoHeight placeholder='Add some text here...' style="width:100%"
                  onChange={(e, d) => this.handleDataChange(e, d)} value={this.state.data}/>
      </Form>;

    const viewBody = <Container fluid>{this.state.data}</Container>;

    return (
      <Unit {...this.props} viewBody={viewBody} editBody={editBody}/>
    )
  };
}
