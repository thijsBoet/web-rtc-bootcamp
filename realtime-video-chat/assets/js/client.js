const connection = new WebSocket("ws://localhost:9090");

connection.onopen = () => console.log("connected to server");

connection.onmessage = (msg) => {
  const data = JSON.parse(msg.data)
}

connection.onerror = (error) => {
  console.log(error)
}

const url_string = window.location.href;
const url = new URL(url_string);
const username = url.searchParams.get("username");

const local_video = document.querySelector("#local-video");

navigator.getUserMedia(
  {
    video: true,
    audio: true,
  },
  (myStream) => {
    stream = myStream;
    local_video.srcObject = stream;
  },
  (error) => console.log(error)
);
