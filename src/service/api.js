export const fetchApi = async (user) => {
  const endpoint = `https://api.github.com/users/${ user }`;
  const response = await fetch(endpoint);
  const obj = await response.json();
  return obj;
};