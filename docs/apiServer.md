```js
import axios, { AxiosInstance, AxiosResponse, AxiosPromise } from 'axios';

export type ISODate = string;

export interface Config {
  apiKey: string;
}

export interface Account {
  id: string;
  name: string;
  balance: number;
  state: 'active' | 'inactive';
  public: boolean;
  created_at: ISODate;
  updated_at: ISODate;
  type: 'pocket' | 'beneficiary';
}

/* tslint:disable */

export class ApiClient {
  public client: AxiosInstance;

  constructor(public config: Config) {
    this.client = axios.create({
      baseURL: 'https://b2b.revolut.com/api/',
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
      transformRequest: [
        // transform json data to query string
        function(data) {
          return data;
        },
      ],
      timeout: 5000,
    });

    this.client.interceptors.request.use(
      config => {
        let token = 'abcdef.....';

        // if token is setted, set http Authorization header
        if (token) {
          config.headers.Authorization = `bearer ${token}`;
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    this.client.interceptors.response.use(
      response => response,
      (err: any) => {
        if (err.response && err.response.config) {
          const { url, method } = err.response.config;
        }
        try {
          delete err.response.request;
          delete err.response.config;
          delete err.config.res;
          delete err.config.data;
        } catch (e) {}
        return Promise.reject(err);
      },
    );

    return this;
  }

  get accounts() {
    return new Accounts(this.client);
  }
}

class API {
  protected client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }
}

export default class Accounts extends API {
  public get = (id: string): Promise<Account> => {
    return this.client.get(`/accounts/${id}`).then(res => res.data);
  };

  public getAll = (): Promise<Account[]> => {
    return this.client.get('/accounts').then(res => res.data);
  };
}
```
