import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/register-customer";
const API_URL2 = "http://127.0.0.1:8000/api/login-customer";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);

    if (response.data && response.data.success) {
      const user = response.data;

      // Check if the user is already logged in
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
      if (loggedInUser && loggedInUser.success) {
        toastMessage("Already a Registered User");
        // Navigate to the login page
        window.location.href = "/login";
      } else {
        localStorage.setItem("user", JSON.stringify(user));
        return response.data;
      }
    } else {
      throw new Error(response.data.message || "Registration failed");
    }
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

export const loginUser = async (userData) => {
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } else {
      const response = await axios.post(API_URL2, userData);

      if (response.data && response.data.success) {
        const user = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        return response.data;
      } else {
        throw new Error("User not registered");
      }
    }
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};
