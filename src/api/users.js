const API = "https://frontend-test-assignment-api.abz.agency/api/v1";

export async function fetchUsers(page = 1, count = 6) {
  const url = `${API}/users?page=${page}&count=${count}`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
