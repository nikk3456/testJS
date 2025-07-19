export const getUsers = async (limit = 10, skip = 0) => {
  const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
  return res.json();
};
