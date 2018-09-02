// app/io/controller/chat.js
// 将收到的消息发送给客户端
module.exports = app => {
  console.log('123')
  return function*() {
    const self = this
    const message = this.args[0]
    console.log("chat 控制器打印", message)
    this.socket.emit("Msg", `Hi! I've got your message: ${message}`)
  }
}
