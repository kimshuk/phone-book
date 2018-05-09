import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "Andrew Kim",
        phone: "949-132-9912"
      },
      {
        id: 1,
        name: "Peter Parker",
        phone: "714-222-6124"
      }
    ]
  };

  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;
