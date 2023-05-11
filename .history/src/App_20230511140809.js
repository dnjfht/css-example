// class component 살펴보기

export default class App extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    console.log("컴포넌트가 마운트 되었음!");
  }

  componentWillUnmount() {
    console.log("컴포넌트가 곧 언마운트 될 예정임!");
  }

  render() {
    return <div></div>;
  }
}
