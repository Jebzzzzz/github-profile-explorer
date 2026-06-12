const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const headers: HeadersInit = TOKEN ? { Authorization: `Bearer ${TOKEN}`} : {};