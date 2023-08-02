// custom api
import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c1932d10ef6b43ff82ce302da395e467",
  },
});

export { CanceledError };
