import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "Name",
      phone: "949-000-0000",
      id: 0
    }
  };

  state = {
    // if true, show value in input form
    editing: false,
    name: "",
    phone: ""
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  // when onChange triggers
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // when editing changed

    const { info, onUpdate } = this.props;
    if (!prevState.editing && this.state.editing) {
      // editing changed false -> true
      // add info value to state
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }

    if (prevState.editing && !this.state.editing) {
      // editing value changed true -> false
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    const { editing } = this.state;

    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="Phone Number"
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>Edit</button>
          <button onClick={this.handleRemove}>Delete</button>
        </div>
      );
    }

    const { name, phone, id } = this.props.info;

    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>Edit</button>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}
