import axios, { AxiosResponse } from 'axios';
import { LibraPerFemije } from '../models/LibraPerFemije';
import { LibratModel } from '../models/LibratModel';
import { RevistaModel } from '../models/RevistaModel';
import { TeksteModel } from '../models/TeksteModel';

axios.defaults.baseURL = 'https://localhost:7067';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Revistat = {
    revistaList: () => requests.get<RevistaModel[]>('/revistat'),
    revistaById: (id: number) => requests.get<RevistaModel>('/revistat/'+id),
    revistaCreate: (revista: RevistaModel) => requests.post<void>('revistat', revista),
    revistaUpdate: (revista: RevistaModel) => requests.put<void>('revistat/${id}', revista),
    revistaDelete: (id: number) => requests.delete<void>('revistat/'+id) // hedhja nje sy prap
}

const Librat = {
    libratList: () => requests.get<LibratModel[]>('/librat'),
    revistaById: (id: number) => requests.get<RevistaModel>('/revistat/'+id),
    revistaCreate: (revista: RevistaModel) => requests.post<void>('revistat', revista),
    revistaUpdate: (revista: RevistaModel) => requests.put<void>('revistat/${id}', revista),
    revistaDelete: (id: number) => requests.delete<void>('revistat/'+id) // hedhja nje sy prap
}

const LibraPerFemije = {
    libraPerFemijeList: () => requests.get<LibraPerFemije[]>('/libraPerFemije'),
    revistaById: (id: number) => requests.get<RevistaModel>('/revistat/'+id),
    revistaCreate: (revista: RevistaModel) => requests.post<void>('revistat', revista),
    revistaUpdate: (revista: RevistaModel) => requests.put<void>('revistat/${id}', revista),
    revistaDelete: (id: number) => requests.delete<void>('revistat/'+id) // hedhja nje sy prap
}

const Tekste = {
    teksteList: () => requests.get<TeksteModel[]>('/tekte'),
    revistaById: (id: number) => requests.get<RevistaModel>('/revistat/'+id),
    revistaCreate: (revista: RevistaModel) => requests.post<void>('revistat', revista),
    revistaUpdate: (revista: RevistaModel) => requests.put<void>('revistat/${id}', revista),
    revistaDelete: (id: number) => requests.delete<void>('revistat/'+id) // hedhja nje sy prap
}

const agent = {
    Revistat
}

export default agent;