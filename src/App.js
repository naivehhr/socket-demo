import React, { Component } from "react"
import io from "socket.io-client"
class App extends Component {
  constructor() {
    super()
    this.state = {
      percent: "0%",
      endpoint: "http://localhost:3000", // koa 端口自己设置下
      // endpoint: "http://localhost:7001" // egg
    }
  }

  componentDidMount() {
    const { endpoint } = this.state
    const socket = io(endpoint)
    console.log(process.env)
    socket.on("Msg", data => this.setState({ percent: `${data * 10}%` }))
  }

  render() {
    const { percent } = this.state
    console.log("percent", percent)
    return (
      <div className="progress">
        完成
        {percent}
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: percent }}
        >
          <span className="sr-only">完成</span>
        </div>
      </div>
    )
  }
}

export default App
