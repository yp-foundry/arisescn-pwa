<template>
  <v-app>
    <app-bar :routes="routes" />

    <v-content>
      <nuxt />
    </v-content>

    <!-- Download latest message button -->
    <v-btn
      fixed
      dark
      style="bottom: 24px; right: 24px; width: 84px; height: 84px; z-index: 10;"
      class="rounded-50 elevation-20 hidden-md-and-up fab-transition"
      color="black"
      :href="latestMessage.link"
      target="_blank"
      rel="noopener"
    >
      <div class="d-flex flex-column align-center justify-center">
        <v-icon v-text="mdiCloudDownload"></v-icon>
        <span class="pt-1 pb-2 subtitle-2" style="line-height: 1.2;"
          >Latest<br />Message</span
        >
      </div>
    </v-btn>
  </v-app>
</template>

<script>
import { mdiCloudDownload } from '@mdi/js'

import AppBar from '@/components/AppBar'

import { useMedia } from '@/composables/media'

export default {
  components: {
    AppBar
  },

  setup() {
    const { latestMessage } = useMedia()

    return { latestMessage }
  },

  data() {
    return {
      appDrawerIsShown: false,

      routes: [
        {
          text: 'What We Do',
          link: '#what-we-do',
          sectionIsReady: true
        },
        {
          text: 'Core Values',
          link: '#core-values',
          sectionIsReady: true
        },
        {
          text: 'Contact',
          link: '#contact',
          sectionIsReady: true
        }
      ],

      mdiCloudDownload
    }
  }
}
</script>
