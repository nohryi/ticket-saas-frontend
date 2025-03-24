const API_URL = "http://localhost:3001";

export async function fetchTestData() {
  const res = await fetch(`${API_URL}/`);
  const data = await res.text();
  return data;
}

