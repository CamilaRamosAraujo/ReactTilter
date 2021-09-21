import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org",
  params: {
    api_key: "47ad4af62c886c8f3ceaef729b2a50bf",
  },
});