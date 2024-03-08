import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://plant.id/api/v3/";
axios.defaults.headers.common["Api-Key"] =
  "aHSL5Hp8km0RwLRTpIqtARYK1wbvSNGOGzgn5Zpf6fgXkg4elP";

axios.defaults.headers.common["Content-Type"] = "application/json";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, options?: {}) =>
    axios.get(url, options).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Plants = {
  assessment: (images: string[], similarImages: boolean) =>
    requests.post("health_assessment", {
      images,
      similar_images: similarImages,
    }),
};

const client = {
  Plants,
};

export default client;
