import axios, { AxiosResponse } from "axios";
import { LibriModel } from "../models/LibriModel";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "https://localhost:7067";

axios.interceptors.response.use(async (response) => {
  try {
        await sleep(750);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

//stores http requests
const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Librat = {
  list: () => requests.get<LibriModel[]>('/Librat'),
  details:(id: number)=>requests.get<LibriModel>(`/Librat/${id}`),
  create:(libri:LibriModel)=>requests.post<void>('/Librat', libri ),
  update:(libri:LibriModel)=>requests.put<void>(`/Librat/${libri.id}`, libri),
  delete:(id:number)=>requests.delete<void>(`/Librat/${id}`)
};

const agent = {
  Librat
};

export default agent;
