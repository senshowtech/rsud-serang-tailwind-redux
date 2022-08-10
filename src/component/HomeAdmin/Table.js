import React from "react";
import { io } from "socket.io-client";
let socket;

export default function Table() {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    socket = io("http://localhost:5000");
    socket.on("new message", () => {
      socket.emit("load messages");
    });
    loadMessages();
    socket.on("connect_error", (err) => {
      console.error(err.message);
    });
    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const loadMessages = () => {
    socket.on("messages", (data) => {
      if (data.length > 0) {
        console.log(data);
        setMessages(data);
      }
    });
  };
  return (
    <div className="mt-2 p-2">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Nama Depan</th>
              <th>Nama Belakang</th>
              <th>Nomor Telpon</th>
              <th>Alamat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
