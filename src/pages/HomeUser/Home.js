import React from "react";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectUser } from "../../app/userSlice";
import { io } from "socket.io-client";
import Nav from "../../component/HomeUser/Nav";
import Jumbotron from "../../component/HomeUser/Jumbotron";
import CallDocter from "../../component/HomeUser/CallDocter";
import Medic from "../../component/HomeUser/Medic";
import Alert from "../../component/HomeUser/Alert";
let socket;

export function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = React.useState([]);
  const cancelButtonRef = useRef(null);

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

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = {
        firstName: e.target.nama_depan.value,
        lastName: e.target.nama_belakang.value,
        number: e.target.nomor_handphone.value,
        address: e.target.alamat.value,
      };
      socket.emit("send messages", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Alert open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef} />
      <Nav />
      <Jumbotron />
      <Medic />
      <div className="p-5">
        <CallDocter setOpen={setOpen} HandleSubmit={HandleSubmit} />
      </div>
    </div>
  );
}
