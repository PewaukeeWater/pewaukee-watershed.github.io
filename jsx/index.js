const React = window.react
class App extends React.Component {
  constructor() {
    super();
    this.state = false;
  }

  render() {
    if (this.state) {
      return /*#__PURE__*/React.createElement("h1", null, "I was clicked");
    } else {
      const onclick = () => {
        this.setState(true);
      };

      return /*#__PURE__*/React.createElement("button", {
        onclick: onclick
      }, "Button");
    }
  }

}

export default App;