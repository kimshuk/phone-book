import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    // 페이지 리로딩 방지
    e.preventDefault();
    //상태값을 onCreate를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    //상태 초기화
    this.setState({
      name: "",
      phone: ""
    });
  };

  render() {
    return (
      <form>
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="Phone Number"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <h1>
          {this.state.name} {this.state.phone}
        </h1>
      </form>
    );
  }
}

export default PhoneForm;
