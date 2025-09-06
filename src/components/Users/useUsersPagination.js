import { useEffect, useState } from "react";

const byRegDesc = (a, b) => {
  const at = Number(a?.registration_timestamp ?? 0);
  const bt = Number(b?.registration_timestamp ?? 0);
  if (bt !== at) return bt - at;
  return (b?.id ?? 0) - (a?.id ?? 0);
};

export default function useUsersPagination(fetchUsers, pageSize = 6) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load(nextPage = 1, replace = false) {
    if (loading) return;
    setLoading(true);
    setError("");
    try {
      const data = await fetchUsers(nextPage, pageSize);
      const nextUsers = Array.isArray(data.users) ? data.users : [];

      setUsers((prev) => {
        const merged = replace ? nextUsers : [...prev, ...nextUsers];
        return merged.sort(byRegDesc);
      });

      setPage(data.page ?? nextPage);
      setTotalPages(data.total_pages ?? nextPage);
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
