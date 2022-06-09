import React from "react";
import { useNavigate } from "react-router-dom";

function DisplayDetailsButton({ userCard }) {
  let navigate = useNavigate();

  function handleClick(event) {
    let id = event.target.value;
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <button className="button" type="button" value={userCard.id} onClick={handleClick}>
        More Details
      </button>
    </div>
  );
};

export default DisplayDetailsButton;