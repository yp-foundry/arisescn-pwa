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
        style="text-decoration: none !important;"
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
            style="line-height: 1.35;"
          >
            Arise, Shine<br />
            Christian <br />
            Network
          </h1>
        </div>
      </nuxt-link>
    </div>

    <v-spacer />

    <div
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
                style="max-width: 320px;"
                class="overline text-truncate"
                v-text="latestMessage.title"
              />
            </div>
          </div>
        </v-btn>

        <!-- <v-app-bar-nav-icon class="ml-4" @click="toggleAppDrawer()">
          <div :class="{ 'hamburger-menu': true, close: appDrawerIsShown }">
            <div class="hamburger-menu__bars transition-swing">
              <div
                class="hamburger-menu__bar hamburger-menu__bar--1 transition-swing"
              />

              <div
                class="hamburger-menu__bar hamburger-menu__bar--2 transition-swing"
              />

              <div
                class="hamburger-menu__bar hamburger-menu__bar--3 transition-swing"
              />
            </div>
          </div>
        </v-app-bar-nav-icon> -->
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
          exact-active-class="primary-gradient--stripped dark-text--primary"
        >
          {{ route.title }}
        </v-btn>
      </nav>
    </div>
  </v-app-bar>
</template>

<script>
import { mdiCloudDownloadOutline } from '@mdi/js'
import { useMedia } from '@/composables/media'
import { useRoutes } from '@/composables/routes'
import { useAppDrawer } from '@/composables/ui/app-drawer'

export default {
  name: 'AppBar',

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
  border-bottom: 1px solid #666666;

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

.hamburger-menu {
  &__bars {
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__bar {
    height: 4px;
    width: 30px;
    background: #eeeeee;

    &--3 {
      height: 1.5px;
      width: 16px;
    }
  }

  &:hover,
  &:focus {
    &__bar {
      background: var(--v-primary-base);
    }
  }
}

.hamburger-menu.close {
  .hamburger-menu__bar {
    &s {
      transform: translateX(3.8px);
    }

    &--1 {
      transform-origin: top left;
      transform: rotate(45deg) translate(1px, -1px);
    }

    &--2 {
      transform-origin: center;
      transform: rotate(-45deg) translate(-4px, -1px);
    }

    &--3 {
      transform: translate(100%);
      opacity: 0;
    }
  }
}
</style>
