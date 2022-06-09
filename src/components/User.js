import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function User() {
  let { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [user, updateUser] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        updateUser(response.data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <div className="className-container">
          <div className="userDetails">
            <span> </span>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Company: {user.company.name}</p>
            <p>Website: <a href={user.website}>{user.website}</a></p>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.suite}</p>
            <p>City: {user.address.city}</p>
            <p>Zipcode: {user.address.zipcode}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default User;
