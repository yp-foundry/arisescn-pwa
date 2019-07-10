<template>
  <div>
    <intro-section />

    <messages-section />

    <contact-section />
  </div>
</template>

<script>
import IntroSection from '~/components/IntroSection'
import MessagesSection from '~/components/MessagesSection'
import ContactSection from '~/components/ContactSection'

export default {
  components: {
    IntroSection,
    MessagesSection,
    ContactSection
  }
}
</script>
