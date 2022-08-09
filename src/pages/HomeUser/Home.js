import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectUser } from "../../app/userSlice";
import Nav from "../../component/HomeUser/Nav";
import Jumbotron from "../../component/HomeUser/Jumbotron";
import CallDocter from "../../component/HomeUser/CallDocter";
import Medic from "../../component/HomeUser/Medic";
import Alert from "../../component/HomeUser/Alert";

export function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  return (
    <div>
      <Alert open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef} />
      <Nav />
      <Jumbotron />
      <Medic />
      <div className="p-5">
        <CallDocter />
      </div>
    </div>
  );
}
