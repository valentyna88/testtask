import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/users";
import UserCard from "../UserCard/UserCard";
import Button from "../Button/Button";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(1, 6)
      .then((data) => setUsers(Array.isArray(data.users) ? data.users : []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="users" className="users" aria-labelledby="users-title">
      <div className="container">
        <h2 className="users-title">Working with GET request</h2>
        <ul className="users-list">
          {users.map((user) => (
            <li key={user.id} className="user-card">
              <UserCard user={user} />
            </li>
          ))}
        </ul>
        <Button>Show more</Button>
      </div>
    </section>
  );
};
export default Users;
