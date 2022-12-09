import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/xampp8.0.8/htdocs/every_engineer/every_engineer/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}