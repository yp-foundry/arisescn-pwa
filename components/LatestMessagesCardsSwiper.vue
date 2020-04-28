<template>
  <v-container class="mt-12 mb-8">
    <h3 shrink class="headline mb-5">Latest Messages</h3>

    <a-horizontal-swiper>
      <v-layout>
        <a-card
          v-for="item in messages"
          :key="item.title"
          :title="item.title"
          :minister="item.minister"
          :link="item.link"
          :img-src="
            item.imgSrc
              ? item.imgSrc
              : '/img/album-arts/arise-album-art-placeholder.jpg'
          "
          :album="item.series ? item.series : ''"
          :date="item.date"
          class="mr-6 transition-swing"
          shrink
        />

        <div class="py-4 max-width-400">
          <p class="mb-8 body-1">
            Here is only a few of the latest of our messages, to get more click
            the button below
          </p>

          <v-btn color="secondary">More Messages</v-btn>
        </div>
      </v-layout>
    </a-horizontal-swiper>
  </v-container>
</template>

<script>
import AHorizontalSwiper from '@/components/core/CoreHorizontalSwiper.vue'
import ACard from '@/components/core/CoreCard.vue'

import {
  mdiFilter,
  mdiSort,
  mdiArrowUp,
  mdiArrowDown,
  mdiMenuDown
} from '@mdi/js'

import { useMedia } from '@/composables/media'

export default {
  name: 'LatestMessagesCardsSwiper',

  components: {
    AHorizontalSwiper,
    ACard
  },

  setup() {
    const { messagesByLatest } = useMedia()

    const messages = messagesByLatest.value.slice(0, 3)

    return { messages }
  },

  data() {
    return {
      mdiFilter,

      mdiSort,

      mdiArrowUp,

      mdiArrowDown,

      mdiArrowExpandDown: mdiMenuDown,

      showFilters: true,

      search: ''
    }
  },

  computed: {},

  created() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
