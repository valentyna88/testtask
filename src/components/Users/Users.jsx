import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/users";
import UserCard from "../UserCard/UserCard";
import Button from "../Button/Button";

const PAGE_SIZE = 6;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPage(1, true);
  }, []);

  async function loadPage(nextPage, replace = false) {
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      const data = await fetchUsers(nextPage, PAGE_SIZE);

      const nextUsers = Array.isArray(data.users) ? data.users : [];
      setUsers((prev) => (replace ? nextUsers : [...prev, ...nextUsers]));

      setPage(data.page ?? nextPage);
      setTotalPages(data.total_pages ?? nextPage);
    } catch (e) {
      setError(e.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  }

  const canLoadMore = page < totalPages;
  return (
    <section id="users" className="users" aria-labelledby="users-title">
      <div className="container">
        <h2 className="users-title">Working with GET request</h2>
        {error && (
          <p role="alert" className="error">
            {error}
          </p>
        )}
        <ul className="users-list">
          {users.map((user) => (
            <li key={user.id} className="user-card">
              <UserCard user={user} />
            </li>
          ))}
        </ul>
        {canLoadMore && (
          <div className="users-btn-wrapper">
            <Button
              type="button"
              onClick={() => loadPage(page + 1)}
              disabled={loading}
            >
              {loading ? "Loading..." : "Show more"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
export default Users;
