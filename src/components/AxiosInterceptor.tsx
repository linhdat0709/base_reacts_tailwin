import { baseRequest } from "@/requests/config";
import type {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const AxiosInterceptor = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({}); // parseJWT access token
  const navigate = useNavigate();

  useEffect(() => {
    const configure = async (requestConfig: InternalAxiosRequestConfig) => {
      const controller = new AbortController();
      // check token expired
      // if (dayjs.unix(data.exp).isBefore()) {
      // const accessToken = axios.get(/refresh token);
      // if (!accessToken) {
      //   controller.abort();
      // }

      //get refreshToken
      // 200 => get new access token
      // 401 => logout

      // }
      const targetConfig: AxiosRequestConfig | InternalAxiosRequestConfig = {
        ...requestConfig,
        signal: controller.signal,
        params: requestConfig.params,
      };
      return targetConfig as InternalAxiosRequestConfig;
    };
    const requestInterceptor = baseRequest.interceptors.request.use(
      (config) => {
        return configure(config);
      },
      (error): Promise<Error> => {
        return Promise.reject(error);
      }
    );
    const responseInterceptor = baseRequest.interceptors.response.use(
      (config) => {
        return config;
      },
      async (error: AxiosError): Promise<Error> => {
        if (error.response?.status === 401) {
          //logout
        }

        return Promise.reject(error);
      }
    );

    return () => {
      baseRequest.interceptors.request.eject(requestInterceptor);
      baseRequest.interceptors.response.eject(responseInterceptor);
    };
  }, [data]);

  return children;
};

export default AxiosInterceptor;
