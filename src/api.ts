import axios from "axios";

export default axios.create({
  baseURL: server(),
  headers: {
    "Content-Type": "application/json"
  },
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: false
});

function server() {
  return "https://santadrawback.herokuapp.com";
}
