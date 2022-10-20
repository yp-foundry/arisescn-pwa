import messagesData from '@/data/messages'

export const useMedia = () => {
  // const messages = reactive(messagesData)

  // const social = computed(() => filterRoutesBy('basic'))

  const messages = computed(() =>
    messagesData.map((message) =>
      Object.assign(message, {
        timestamp: message.date.getTime(),
        year: message.date.getFullYear()
      })
    )
  )

  const messagesByLatest = computed(() => {
    return messages.value.sort((messageA, messageB) => {
      if (messageA.timestamp < messageB.timestamp) return 1

      if (messageA.timestamp > messageB.timestamp) return -1

      return 1
    })
  })

  const latestMessage = computed(() => messagesByLatest.value[0])

  return { messages, messagesByLatest, latestMessage }
}
