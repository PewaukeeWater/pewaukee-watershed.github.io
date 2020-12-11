class App extends React.Component {
  constructor(){
    super()
    this.state = false
  }
  render(){
    if(this.state) {
      return <h1>I was clicked</h1>
    } else {
      const onclick = () => {
        this.setState(true)
      }
      return <button onclick={onclick}>Button</button>
    }
  }
}

export default App
