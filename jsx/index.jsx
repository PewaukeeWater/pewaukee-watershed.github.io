class App extends React.Component {
  constructor(){
    super()
    this.state = { clicked: false }
  }
  render(){
    if(this.state.clicked) {
      return <h1>I was clicked</h1>
    } else {
      const onClick = () => {
        this.setState({ clicked: true })
      }
      return <button onClick={onClick}>Button</button>
    }
  }
}

export default App
