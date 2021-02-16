const webSocketServ = require('ws').server;

const wss = new webSocketServ({
  port: process.env.PORT || 9090,
});

wss.on("connection", (conn) => {
  console.log("User connected");

  conn.on("message", (message) => {});

  conn.on("close", () => {
    console.log("connection closed");
  });
});

const sendToOtherUser = (connection, message) => {
  connection.send(JSON.stringify(message))
}