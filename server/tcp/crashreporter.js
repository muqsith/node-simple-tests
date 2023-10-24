#!/usr/bin/env node

const net = require("net");

const options = {
  port: 24224,
  host: "172.17.0.1",
  exclusive: true,
};

function handleClientData(data) {
  console.log(data.toString("utf8"));
}

function handleError(err) {
  console.error(err);
}

function handleClientEnd() {
  console.log("Client disconnected");
}

function handleClientConnect() {
  console.log("Client connected");
}

function handleListen() {
  console.log(`Server listening at : tcp://${options.host}:${options.port}`);
}

function handleClose() {
  console.log("Server closed");
}

const server = net.createServer((client) => {
  client.on("end", handleClientEnd);
  client.on("connect", handleClientConnect);
  client.on("data", handleClientData);

  client.write("Echo server\r\n");
  client.pipe(client);
});

server.on("error", handleError);
server.on("close", handleClose);

server.listen(options, handleListen);
