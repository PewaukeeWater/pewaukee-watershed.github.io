const React = window.React
class App extends React.Component {
  constructor() {
    super();
    this.state = false;
  }

  render() {
    if (this.state) {
      return /*#__PURE__*/React.createElement("h1", null, "I was clicked");
    } else {
      const onClick = () => {
        this.setState(true);
      };

      return /*#__PURE__*/React.createElement("button", {
        onClick: onClick
      }, "Button");
    }
  }

}

export default App;