import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

export class HttpService {
  public get<T>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.makeRequest<T>({
      url,
      method: 'get',
      ...options,
    });
  }

  public post<T>(url: string, data?: object, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.makeRequest<T>({
      url,
      method: 'post',
      data,
      ...options,
    });
  }

  public put<T>(url: string, data?: object, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.makeRequest<T>({
      url,
      method: 'put',
      data,
      ...options,
    });
  }

  public delete<T>(url: string, data?: object, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.makeRequest<T>({
      url,
      method: 'delete',
      data,
      ...options,
    });
  }

  private makeRequest<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise<AxiosResponse<T>>((resolve, reject) => {
      const source = axios.CancelToken.source();
      const cancelToken = source.token;

      return resolve(axios.request({...config, cancelToken}));
    });
  }
}

export const httpService = new HttpService();
