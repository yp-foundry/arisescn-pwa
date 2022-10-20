const _isShown = ref(false)

export const useAppDrawer = () => {
  // const _isShown = ref(false)

  const isShown = computed({
    get: () => _isShown.value,
    set: (bool) => {
      if (!bool && typeof bool !== 'boolean') {
        return
      }

      _isShown.value = bool
    }
  })

  const toggleAppDrawer = (bool) => {
    if (bool && typeof bool === 'boolean') {
      _isShown.value = bool
    } else {
      _isShown.value = !_isShown.value
    }
  }

  return { isShown, toggleAppDrawer }
}
