// class component 살펴보기

import React from "react";
import Counter2 from "./components/Counter2";

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
          <Counter2 total={this.state.count} onClick={this.onClick} />
          <Counter2 total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

// 함수형 컴포넌트는 렌더링이 될 때마다 함수 전체가 호출이 되는데
// 클래스형 컴포넌트는 멤버 함수로 정의되어 있기 때문에 상태가 변경될 때마다 렌더 함수만 호출이 된다
// 기존의 멤버 함수는 그대로 유지되기 때문에 useCallback이나 useMemo 같은 별도의 처리를 하지 않아도 된다
