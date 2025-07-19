export const getUsers = async (pageNumber = 1, pageSize = 20) => {
  const res = await fetch(`https://dummyjson.com/users?limit=${pageNumber}&skip=${pageSize}`);
  return res.json();
};
