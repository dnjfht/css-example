// class component 살펴보기

import React from "react";
import Counter2 from "./components/Counter2";

export default class App14 extends React.Component {
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

// 클래스에 객체지향 프로그래밍으로 클라이언트 사이드에서 조금 복잡한 일을 해야 한다, 상속을 이용해서 무언가 해야 한다면
// 클래스를 요긴하게 사용해볼 수 있다

// 하지만 요즘 대세는 함수형 컴포넌트고,
// 리액트 팀에서 내부적으로 컴포넌트들을 재사용할 수 있는 방법들을
// 컴파일했을 때 값이 변경되지 않았다면 다시 렌더링되지 않도록 만드는
// 이런 방법들도 고안하고 있으니까 크게 걱정할 필요가 없음
