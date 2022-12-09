import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/xampp8.0.8/htdocs/every_engineer/every_engineer/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}