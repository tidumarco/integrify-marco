import React from 'react';
import DisplayDetailsButton from "./DisplayDetailsButton";

function AllUsers({ userData }) {
  return (
    <div className="item-container">
        <div className="card">
          <p>{userData.name}</p>
          <p>www.{userData.website}</p>
          <p>{userData.email}</p>
          <DisplayDetailsButton userCard={userData}></DisplayDetailsButton>
        </div>
    </div>
  );
};
export default AllUsers;