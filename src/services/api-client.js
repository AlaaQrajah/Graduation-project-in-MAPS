import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "02af14dc97ec4ed1bb94ecc9b2c50006",
  },
});
