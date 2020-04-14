import { ref } from '@vue/composition-api'

export function useAppDrawer() {
  const isShown = ref(false)

  // const isShown = computed(() => state.value)

  const toggleAppDrawer = (bool) => {
    if (bool && typeof bool === 'boolean') {
      isShown.value = bool
    } else {
      isShown.value = !isShown.value
    }
  }

  return { isShown, toggleAppDrawer }
}
