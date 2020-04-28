<template>
  <div class="a-horizontal-swiper position-relative overflow-hidden">
    <v-slide-x-reverse-transition>
      <v-btn
        v-show="showLeftControl"
        color="transparent"
        class="a-horizontal-swiper__control a-horizontal-swiper__control--left h-100 elevation-6 px-2 py-3"
        small
        @click="scrollToLeft"
      >
        <v-icon color="primary" class="text--lighten-1" large>{{
          mdiChevronLeft
        }}</v-icon>
      </v-btn>
    </v-slide-x-reverse-transition>

    <v-slide-x-transition>
      <v-btn
        v-show="showRightControl"
        color="transparent"
        class="a-horizontal-swiper__control a-horizontal-swiper__control--right h-100 elevation-6 px-2 py-3"
        small
        @click="scrollToRight"
      >
        <v-icon color="primary" class="text--lighten-1" large>{{
          mdiChevronRight
        }}</v-icon>
      </v-btn>
    </v-slide-x-transition>

    <div ref="wrapper" class="overflow-x-auto">
      <slot />
    </div>
  </div>
</template>

<script>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

export default {
  name: 'CoreHorizontalSwiper',

  data() {
    return {
      mdiChevronLeft,
      mdiChevronRight,

      showLeftControl: false,
      showRightControl: false
    }
  },

  computed: {
    scrollSize() {
      return this.$refs.wrapper.clientWidth - 32
    }
  },

  mounted() {
    this.onScroll()

    this.$refs.wrapper.addEventListener('scroll', () => {
      this.onScroll()
    })
  },

  destroy() {
    this.$refs.wrapper.removeEventListener('scroll')
  },

  methods: {
    onScroll() {
      const wrapper = this.$refs.wrapper
      // @ts-ignore
      if (wrapper.scrollLeft > 0) {
        this.showLeftControl = true
      } else {
        this.showLeftControl = false
      }

      // @ts-ignore
      if (wrapper.scrollLeft + wrapper.clientWidth < wrapper.scrollWidth) {
        this.showRightControl = true
      } else {
        this.showRightControl = false
      }
    },
    scrollToLeft() {
      // @ts-ignore
      this.$refs.wrapper.scrollBy({
        left: -this.scrollSize,
        behavior: 'smooth'
      })
      // this.$refs.wrapper.scrollBy(-this.scrollSize, 0)
    },

    scrollToRight() {
      // @ts-ignore
      this.$refs.wrapper.scrollBy({ left: this.scrollSize, behavior: 'smooth' })
      // this.$refs.wrapper.scrollBy(this.scrollSize, 0)
    }
  }
}
</script>
<style scoped lang="scss">
.a-horizontal-swiper {
  > *::-webkit-scrollbar {
    display: none;
  }

  &__control {
    position: absolute;
    top: 0;
    z-index: 3;
    background: #1c1f2b !important;

    &--left {
      left: 0;
      background: linear-gradient(
        to left,
        rgba(28, 17, 59, 0.1),
        rgba(28, 31, 43, 0.5)
      ) !important;
    }

    &--right {
      right: 0;
      background: linear-gradient(
        to right,
        rgba(28, 17, 59, 0.1),
        rgba(28, 31, 43, 0.5)
      ) !important;
    }
  }
}
</style>
