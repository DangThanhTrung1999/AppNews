import React, { Component } from "react";

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThai: 0
    };
  }
  renderButton = () => {
    return (
      <div className="row">
        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.editState}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.thongBao2("ok r do")}
          >
            Remove
          </button>
        </span>
      </div>
    );
  };
  renderForm = () => {
    return (
      <div className="row">
        <div className="form-group">
          <input
            ref={
              ((duLieuNhap) => {
                this.trungGian = duLieuNhap;
              })
            }
            defaultValue={this.props.tieuDe}
            type="text"
            className="form-control"
            placeholder="Input field"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.saveState}>
          Save
        </button>
      </div>
    );
  };
  displayCheck = () => {
    if (this.state.trangThai === 0) {
      return this.renderButton();
    } else {
      return this.renderForm();
    }
  };
  editState = () => {
    this.setState({
      trangThai: 1
    });
  };
  saveState = () => {
    this.setState({
      trangThai: 0
    }); 
    console.log(this.trungGian.value);
  };
  thongBao2 = x => {
    alert(x);
  };
  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <img src={this.props.link} className="img-responsive" alt="Image" />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h1>{this.props.tieuDe}</h1>
          {this.displayCheck()}
        </div>
      </div>
    );
  }
}
