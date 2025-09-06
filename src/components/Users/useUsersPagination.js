import { useEffect, useState } from "react";

export default function useUsersPagination(fetchUsers, pageSize = 6) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load(nextPage, replace = false) {
    setLoading(true);
    setError("");
    try {
      const data = await fetchUsers(nextPage, pageSize);
      const list = Array.isArray(data.users) ? data.users : [];
      setUsers((prev) => (replace ? list : [...prev, ...list]));
      setPage(data.page ?? nextPage);
      setTotalPages(data.total_pages ?? 1);
    } catch (e) {
      setError(e.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(1, true);
  }, []);

  const canLoadMore = page < totalPages;
  const loadMore = () => {
    if (!loading && canLoadMore) load(page + 1);
  };

  return { users, loading, error, canLoadMore, loadMore };
}
