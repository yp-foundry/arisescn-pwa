<template>
  <div>
    <intro-section class="mb-6" />

    <latest-messages-cards-swiper />

    <!-- <live-section /> -->

    <messages-section />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'HomePage'
})
</script>
