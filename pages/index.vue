<template>
  <div>
    <intro-section class="mb-6" />

    <latest-messages-cards-swiper class="pb-16" />

    <live-section class="my-8 my-md-16" />

    <messages-section />

    <give-online-section />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePage',

  head: {
    title: 'Arise!'
  }
})
</script>
