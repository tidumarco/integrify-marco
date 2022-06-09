import { useState, useEffect } from "react";
import './App.css';
import AllUsers from "./components/AllUsers";
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Users Card</h1>
      <div className="item-container">
        {users.map((user, index) => (
          <AllUsers userData={user} key={user.id}></AllUsers>
        ))}
      </div>
    </div>
  );
}

export default App;
