const {WebSocketServer} = require('ws');

const server = new WebSocketServer({
    port: 5000
});

server.on('connection', (socket) => {
    console.log('Client connected')
     socket.on("message", (data)=>{
        const sent_data = JSON.parse(data);
        console.log(sent_data.chat_message)
     }
     )
})