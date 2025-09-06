import { fetchUsers } from "../../api/users";
import UserCard from "../UserCard/UserCard";
import Button from "../Button/Button";
import useUsersPagination from "./useUsersPagination";

const Users = () => {
  const { users, loading, error, canLoadMore, loadMore } = useUsersPagination(
    fetchUsers,
    6
  );

  return (
    <section id="users" className="users" aria-labelledby="users-title">
      <div className="container">
        <h2 className="users-title">Working with GET request</h2>

        {error && <p className="error">{error}</p>}

        <ul className="users-list">
          {users.map((user) => (
            <li key={user.id} className="user-card">
              <UserCard user={user} />
            </li>
          ))}
        </ul>

        {canLoadMore && (
          <div className="users-btn-wrapper">
            <Button type="button" onClick={loadMore} disabled={loading}>
              {loading ? "Loading..." : "Show more"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Users;
