import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "https://339c-41-90-70-114.in.ngrok.io/api",
});

const get = apiClient.get;
apiClient.get = async (url,params, axiosConfig) => {

  const response = await post(url, params,axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
