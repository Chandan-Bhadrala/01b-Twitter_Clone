import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // To store the cookie in the browser, that will be send by the BE.
});

// Sending the code received by the FE interaction w/ the google API's to the BE for the verification purpose.
// BE will verify the above code w/ the Google and only after successful verification with the Google.
// BE will share/grant an access_token to the FE for app-access.
export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);
