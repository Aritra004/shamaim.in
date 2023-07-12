import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/add-address";

const addAddress = async (addressData) => {
  try {
    const response = await axios.post(API_URL, addressData);

    if (response.data && response.data.success) {
      const address = response.data;
      return address;
    }
  } catch (error) {
    throw new Error(error.response.data.message || error.message);
  }
};

const addressService = {
  addAddress,
};

export default addressService;
