import net from 'node:net'

const server = net.createServer()

server.on('connection', (socket) => {
  socket.on('data', (chunk) => {
    console.log('Received:', chunk.toString())
  })
  const statusLine = 'HTTP/1.1 200 OK'
  const body = 'pong'
  const headers = [
    'Server: simple-server',
    'Content-Type: text/plain',
    `Content-Length: ${body.length}`
  ]
  const response = [
    statusLine,
    ...headers,
    '\r\n', // end response headers
  ].join('\r\n') + body
  socket.write(response);
})

server.listen(3000)
