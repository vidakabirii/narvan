import axios from "axios";

export const BaseURL = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBOhhoHK54OUsYee8FDQkOsLEg23vGjqzg&cx=407f30d1f6bdc2ea3&q=";

export default {
  async get(requestUrl) {
    const URL = `${BaseURL}/${requestUrl}`;
    return await axios(URL, {
      method: "GET",
    })
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error) => {
        return error;
      });
  },
};
