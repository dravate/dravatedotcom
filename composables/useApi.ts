// composables/useApi.ts
import axios from 'axios'

export const useApi = () => {
  const config = useRuntimeConfig()

  return axios.create({
    baseURL: config.public.API_BASE_URL, // this should now be from .env
    headers: {
      Accept: 'application/json',
    },
  })
}
