import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined")
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("next", nextProps.data);
    return nextProps.data !== this.props.data;
  }

  render() {
    console.log("render PhoneInfoList");
    console.log("this", this.props.data);
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(info => (
      <PhoneInfo
        key={info.id}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    ));

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
