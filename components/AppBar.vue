<template>
  <v-app-bar
    :scroll-threshold="64"
    clipped-right
    fixed
    hide-on-scroll
    elevate-on-scroll
    dark
    :height="!$vuetify.breakpoint.xsOnly ? 112 : 104"
    class="app-bar transition-ease-in-out"
  >
    <div class="app-bar__left">
      <nuxt-link
        to="/"
        exact
        class="app-link shrink align-center"
        title="home"
        style="text-decoration: none !important"
      >
        <div class="d-flex align-center">
          <v-img
            :src="$icon(120)"
            alt="Arise, Shine Christian Network logo"
            class="h-100 mr-2"
            :aspect-ratio="1"
            :height="72"
            :width="72"
          />

          <h1
            class="subtitle-1 dark-text--primary text-uppercase"
            style="line-height: 1.35"
          >
            Arise, Shine<br />
            Christian <br />
            Network
          </h1>
        </div>
      </nuxt-link>
    </div>

    <v-spacer />

    <transition name="slide-y-reverse-transition" appear>
      <div
        v-show="!appDrawerIsShown"
        class="app-bar__right fill-height d-flex flex-column align-end justify-space-around"
      >
        <div>
          <v-btn
            color="secondary"
            class="hidden-sm-and-down"
            x-large
            :href="latestMessage.link"
            rel="noopener noreferrer"
            role="download"
            download
          >
            <div class="d-inline-flex">
              <v-icon class="mr-4" v-text="mdiCloudDownloadOutline" />
              <div class="d-inline-flex flex-column align-start">
                <span class="body-1">Download the latest message</span>
                <span
                  style="max-width: 320px"
                  class="overline text-truncate"
                  v-text="latestMessage.title"
                />
              </div>
            </div>
          </v-btn>

          <v-app-bar-nav-icon class="ml-4" @click="toggleAppDrawer()">
            <a-hamburger-btn v-model="appDrawerIsShown" />
          </v-app-bar-nav-icon>
        </div>

        <nav class="hidden-sm-and-down">
          <!-- FIXME: exact-active-class -->
          <v-btn
            v-for="route in mainRoutes"
            :key="route.route"
            class="text-capitalize dark-text--secondary"
            text
            nuxt
            :to="route.route"
            small
            exact
            exact-active-class="primary-gradient--stripped dark-text--primary"
          >
            {{ route.title }}
          </v-btn>
        </nav>
      </div>
    </transition>
  </v-app-bar>
</template>

<script>
import AHamburgerBtn from '@/components/AHamburgerBtn.vue'
import { mdiCloudDownloadOutline } from '@mdi/js'
import { useMedia } from '@/composables/media'
import { useRoutes } from '@/composables/routes'
import { useAppDrawer } from '@/composables/ui/app-drawer'

export default {
  name: 'AppBar',

  components: { AHamburgerBtn },

  setup() {
    const { latestMessage } = useMedia()
    const { main: mainRoutes } = useRoutes()
    const { isShown: appDrawerIsShown, toggleAppDrawer } = useAppDrawer()

    /* console.dir({
      appDrawerIsShown,
      toggleAppDrawer
    }) */

    return {
      latestMessage,
      mainRoutes,
      appDrawerIsShown,
      toggleAppDrawer
    }
  },

  data() {
    return {
      isTransparent: true,
      isElevated: false,
      mdiCloudDownloadOutline
    }
  },

  mounted() {
    // FIXME: Add window to $el instead
    window.addEventListener('scroll', this.onScroll, false)
  },

  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },

  onScroll() {
    // eslint-disable-next-line no-console
    // console.dir(document)
    const threshold = 200

    const passedThreshold =
      document.body.scrollTop > threshold ||
      document.documentElement.scrollTop > threshold

    // eslint-disable-next-line no-console
    // console.info(passedThreshold)

    if (passedThreshold && this.isTransparent) {
      this.isTransparent = false
      this.isElevated = true
    } else if (!passedThreshold && !this.isTransparent) {
      this.isTransparent = true
      this.isElevated = false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-bar {
  background: transparent !important;
  border-bottom-right-radius: 16px;
  border-bottom: 1px solid #666;

  // &__left,
  // &__right {
  //   @media #{map-get($display-breakpoints, 'md-and-up')} {
  //     width: 180px;
  //   }
  // }
  &.v-app-bar--is-scrolled {
    background: var(--v-tertiary-base) !important;
    border-bottom: 1px solid transparent;
  }
}

.app-link {
  &__name {
    height: 48px;

    @media #{map-get($display-breakpoints, 'md-and-up')} {
      height: 56px;
    }
  }
}
</style>
