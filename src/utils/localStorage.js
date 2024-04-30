export const setUserLS = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};

export const getUserLS = () => {
  const result = localStorage.getItem("user");
  return result ? JSON.parse(result) : null;
};

export const removeUserLS = () => {
  return localStorage.removeItem("user");
};
