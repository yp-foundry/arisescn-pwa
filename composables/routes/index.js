import { reactive, computed } from '@vue/composition-api'
import state from './state'

export const useRoutes = () => {
  const routes = reactive(state)

  const basic = computed(() => filterRoutesBy('basic'))
  const main = computed(() => filterRoutesBy('main'))
  const social = computed(() => filterRoutesBy('social'))

  const filterRoutesBy = (query) => {
    return routes.all.filter((route) => {
      return route.type.includes(query)
    })
  }

  return { routes, basic, main, social }
}
