import Counter from "./components/Counter";

// class component 살펴보기

import React from "react";

export default class App extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("컴포넌트가 마운트 되었음!");
  }

  componentWillUnmount() {
    console.log("컴포넌트가 곧 언마운트 될 예정임!");
  }

  render() {
    return (
      <div>
        <div>
          Total Count : {this.state.count} {this.state.count > 10 ? "🔥" : "💦"}
        </div>
        <div>
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
