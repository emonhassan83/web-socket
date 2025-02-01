const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//* Socket Connection
io.on("connection", (socket) => {
    socket.on("user-message", (message) =>{
        io.emit("message", message);
    })
})

const port = 9000;

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    return res.sendFile('/public/index.html')
})

server.listen(port, () => console.log(`Server Start at Port: ${port}`));
