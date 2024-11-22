import { ref } from 'vue';
import axios from 'axios';

export function useAxios(baseURL = '') {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // 创建 Axios 实例
  const instance = axios.create({
    baseURL: baseURL ,
    timeout: 5000, // 请求超时
  });

  // 返回自定义的响应对象
  const makeRequest = async ({ method = 'GET', url = '', params = {}, body = {} }) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await instance({
        method,
        url,
        params,
        data: body,
      });

      // 返回完整的响应对象，包含需要的属性
      return {
        data: response.data,
        status: response.status,
        headers: response.headers,
        config: response.config,
      };
    } catch (err) {
      error.value = err;
      return {
        data: null,
        status: err.response?.status || 500,
        headers: err.response?.headers || {},
        error: err.message,
      };
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    loading,
    error,
    makeRequest,
  };
}
