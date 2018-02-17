// @flow
import React from 'react';
import {Container, Form, TextArea} from 'semantic-ui-react'
import Unit from "./Unit";
import styles from "./UnitTextPlain.css"

type Props = {
  id: string,
  title: string,
  created: Date,
  updated: Date,
  onTitleChanged: (title: string) => void,
  onEditClicked: () => void,
  onSaveClicked: () => void,
  onDeleteClicked: () => void,
  isEditing: boolean,
  data: string,
};
type State = {
  data: string,
};
export default class UnitTextPlain extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {data: props.data};
  }

  handleDataChange = (e: SyntheticEvent<TextArea>, d: { value: string }) => {
    this.setState({data: d.value})
  };

  render() {
    const editBodyProps = {
      autoHeight: true,
      placeholder: ' Add some text here...',
      style: {
        padding: 0,
        fontFamily: 'monospace',
        fontSize: '14px',
        lineHeight: '18px',
        border: '0',
      },
      onChange: (e, d) => this.handleDataChange(e, d),
      value: this.state.data,
      rows: 1,
    };
    return (<Unit {...this.props}
                  viewBody={<Container fluid className={styles.view_container}>{this.state.data}</Container>}
                  editBody={<Form><TextArea {...editBodyProps} /></Form>}
    />)
  };
}
