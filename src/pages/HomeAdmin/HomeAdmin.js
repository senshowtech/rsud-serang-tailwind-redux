import React from "react";
import Nav from "../../component/HomeAdmin/Nav";
import Table from "../../component/HomeAdmin/Table";
export function HomeAdmin() {
  const URL = "ws://127.0.0.1:8000";
  const [ws, setWs] = React.useState(new WebSocket(URL));
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (e) => {
      setData((datas) => [...datas, JSON.parse(e.data)]);
      // setData(JSON.parse(e.data));
    };

    return () => {
      ws.onclose = () => {
        console.log("WebSocket Disconnected");
        setWs(new WebSocket(URL));
      };
    };
  }, [ws.onmessage, ws.onopen, ws.onclose]);
  return (
    <div>
      <Nav />
      <Table data={data} />
    </div>
  );
}
