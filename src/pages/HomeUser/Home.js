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
  const URL = "ws://127.0.0.1:8000";
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cancelButtonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [ws, setWs] = useState(new WebSocket(URL));

  React.useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    return () => {
      ws.onclose = () => {
        console.log("WebSocket Disconnected");
        setWs(new WebSocket(URL));
      };
    };
  }, [ws.onmessage, ws.onopen, ws.onclose]);

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
      ws.send(JSON.stringify(data));
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
