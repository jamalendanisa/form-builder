import React, { Component } from "react";
import { ReactFormGenerator, ElementStore } from 'react-form-builder2';
import * as variables from './variables';

export default class FormGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        previewVisible: false,
    };

    const update = this._onChange.bind(this);
    ElementStore.subscribe(state => update(state.data));
  }

  showPreview() {
    this.setState({
      previewVisible: true,
    });
  }

  closePreview() {
    this.setState({
      previewVisible: false,
      shortPreviewVisible: false,
      roPreviewVisible: false,
    });
  }

  _onChange(data) {
    this.setState({
      data,
    });
  }

  _onSubmit(data) {
    console.log('onSubmit', data);
    // Place code to post json data to server here
  }

  render() {
    let modalClass = 'modal';
    if (this.state.previewVisible) {
      modalClass += ' show d-block';
    }

    return (
        <div className="clearfix head">
          <h4 className="float-left">Preview</h4>
          <button className="btn btn-primary float-right" style={{ marginRight: '10px' }} onClick={this.showPreview.bind(this)}>Preview Form</button>
  
          { this.state.previewVisible &&
            <div className={modalClass}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <ReactFormGenerator
                    download_path=""
                    back_action="/"
                    back_name="Back"
                    answer_data={{}}
                    action_name="Save"
                    form_action="/"
                    form_method="POST"
                    onSubmit={this._onSubmit}
                    variables={variables}
                    data={this.state.data} />
  
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closePreview.bind(this)}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      );
  }
}