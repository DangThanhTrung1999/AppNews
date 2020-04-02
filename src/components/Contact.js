import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ok: false,
      fName: "",
      fEmail: "",
      fPhone: "",
      fMessage: "",
      fNgay:'Thứ 4'
    };
  }
  submitForm = event => {
    event.preventDefault();
    this.setState({
      ok: true
    });
    console.log(this.state);
  };
  isInput = event => {
    const name = event.target.name;
    const giatri = event.target.value;
    this.setState({
      [name]: giatri
    });
  };
  render() {
    if (this.state.ok) {
      return <Redirect to="/" />;
    }
    return (
      <div className="contact">
        <h3>Liên hệ với chúng tôi</h3>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={event => this.isInput(event)}
              name="fName"
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              onChange={event => this.isInput(event)}
              name="fEmail"
              type="text"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              onChange={event => this.isInput(event)}
              name="fPhone"
              type="text"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              onChange={event => this.isInput(event)}
              name="fMessage"
              type="text"
              rows="5"
              className="form-control"
              placeholder="Message"
            />
          </div>

          <div className="form-group">
            <label>Ngày gặp</label>
            <select className="form-control" name="fNgay" defaultValue={this.state.fNgay}>
              <option value="Thứ 2">Thứ 2</option>
              <option value="Thứ 3">Thứ 3</option>
              <option value="Thứ 4">Thứ 4</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={event => this.submitForm(event)}
          >
            SEND
          </button>
        </form>
      </div>
    );
  }
}
