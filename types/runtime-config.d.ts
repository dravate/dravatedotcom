// types/runtime-config.d.ts
export {}

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    API_BASE_URL: string,
    API_KEY: string
  }
}

