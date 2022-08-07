import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, selectUser } from "../../app/userSlice";
import Nav from "../../component/HomeUser/Nav";
import Jumbotron from "../../component/HomeUser/Jumbotron";
import CallDocter from "../../component/HomeUser/CallDocter";

export function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <Nav />
      <Jumbotron />
      <div className="p-5">
        <CallDocter />
      </div>
    </div>
  );
}
