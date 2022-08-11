import React from "react";
import { io } from "socket.io-client";
let socket;

export default function Table({ data }) {
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
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.number}</td>
                  <td>{item.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
