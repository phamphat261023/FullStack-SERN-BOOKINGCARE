import axios from "../axios";

const handleLoginAPI = (email, password) => {
  return axios.post("/api/login", { email, password });
};

let getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};

let createNewUserService = (data) => {
  return axios.post("/api/create-users", data);
};

let deleteUserService = (userId) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: userId,
    },
  });
};

let updateUserService = (data) => {
  return axios.put("/api/update-user", data);
};

export {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  updateUserService,
  handleLoginAPI,
};
