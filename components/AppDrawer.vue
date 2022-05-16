<template>
  <v-navigation-drawer
    v-model="isShown"
    :class="[
      'app-drawer primary-gradient--darken-1 transition-ease-in-out',
      isShown ? 'show' : ''
    ]"
    temporary
    enable-route-watcher
    fixed
    clipped
    floating
    app
    :width="422"
    right
    dark
  >
    <v-app-bar
      fixed
      dark
      color="transparent"
      flat
      :height="!$vuetify.breakpoint.xsOnly ? 112 : 104"
      class="app-bar transition-ease-in-out"
    >
      <!-- <div> -->

      <transition name="slide-y-transition">
        <v-btn
          v-show="isShown"
          color="secondary"
          class="flex-grow-1"
          x-large
          :href="latestMessage.link"
          rel="noopener noreferrer"
          role="download"
          download
        >
          <div class="d-inline-flex w-100">
            <v-icon class="mr-4" v-text="mdiCloudDownloadOutline" />

            <div class="d-inline-flex flex-column w-100 align-start">
              <span class="body-1">Latest message</span>

              <span
                style="max-width: 320px"
                class="overline text-truncate"
                v-text="latestMessage.title"
              />
            </div>
          </div>
        </v-btn>
      </transition>

      <v-app-bar-nav-icon class="ml-4" @click="toggleAppDrawer()">
        <a-hamburger-btn v-model="isShown" />
      </v-app-bar-nav-icon>

      <!-- </div> -->
    </v-app-bar>

    <v-layout column justify-space-between class="h-100 children-flex-grow-0">
      <v-divider />

      <v-flex
        class="app-drawer__nav-link-container secondary darken-2 elevation-5 rounded-2 pr-3 pl-1 mt-4 ml-2 mb-2"
      >
        <transition name="slide-y-transition">
          <v-list
            v-show="isShown"
            class="mt-4"
            style="background: transparent"
            dark
          >
            <v-list-item
              v-for="route in mainRoutes"
              :key="route.title"
              class="app-drawer__nav-link rounded-2 overflow-hidden mb-2"
              link
              :to="route.route"
              exact
              exact-active-class="primary--text"
              nuxt
            >
              <v-list-item-content>
                <v-list-item-title>{{ route.title }}</v-list-item-title>

                <v-list-item-subtitle class="caption">
                  {{ route.description || '' }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>
                <div class="pa-4 secondary lighten-1 rounded-2">
                  <v-icon>{{ route.icon }}</v-icon>
                </div>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </transition>

        <v-divider />

        <v-row class="mx-0 py-5 px-3" justify="center" dense>
          <v-col v-for="route in socialRoutes" :key="route.title" cols="auto">
            <v-btn :href="route.route" :title="route.title" icon small>
              <v-icon v-text="route.icon"></v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12">
            <div class="caption primary--text text--lighten-1 text-center">
              @ariseSCN
            </div>
          </v-col>
        </v-row>
      </v-flex>

      <v-flex
        style="max-width: 400px"
        shrink
        class="mx-3 py-4 d-flex flex-column justify-center align-center"
      >
        <p class="body-1 font-italic dark-text--secondary">
          Raising a nation for Christ
        </p>

        <v-divider />
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import { mdiCloudDownloadOutline, mdiBellOutline } from '@mdi/js'
import { useMedia } from '@/composables/media'
import { useRoutes } from '@/composables/routes'
import { useAppDrawer } from '@/composables/ui/app-drawer'
import AHamburgerBtn from '@/components/AHamburgerBtn.vue'

export default {
  name: 'AppDrawer',

  components: { AHamburgerBtn },

  setup() {
    const { latestMessage } = useMedia()
    const { main: mainRoutes, social: socialRoutes } = useRoutes()
    const { isShown, toggleAppDrawer } = useAppDrawer()

    /* console.dir({
      appDrawerIsShown,
      toggleAppDrawer
    }) */

    return {
      mdiCloudDownloadOutline,
      mdiBellOutline,
      latestMessage,
      mainRoutes,
      socialRoutes,
      isShown,
      toggleAppDrawer
    }
  }
}
</script>

<style lang="scss" scoped>
.app-drawer {
  $toolbar-height: 112px;

  overflow-y: auto;
  padding-top: $toolbar-height - 1px;
  transition: transform 0.8s;
  //
  background-color: #002b78; // fallback
  background-color: var(--v-primary-darken2);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%2310142a' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23002b78'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(100deg, var(--v-primary-darken2) 10%, #002b78 100%);
  background-repeat: repeat;
  background-size: auto;
  background-attachment: fixed;

  // transform: translateX(-100%) !important;

  // &.show {
  //   transform: translateX(0) !important;
  // }

  // @media #{map-get($display-breakpoints, 'sm-and-up')} {
  //   padding-top: $toolbar-height + 32;
  // }

  &__nav-link {
    &-container {
      border-bottom-right-radius: 0 !important;
    }

    &--active {
      color: #fff;

      &::before {
        background: var(--v-secondary-base);
      }
    }
  }
}

.header {
  position: absolute;
  left: 0;
  bottom: 0;
  top: unset;

  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    bottom: unset;
    top: 0;
  }
}

.cart__img {
  height: 80px;
  width: 80px;
  border: 1px solid #fff3;
}

.svg-icon {
  fill: #fff;
  fill: rgba(255, 255, 255, 0.87);

  &--hoverable {
    &:hover,
    &:focus {
      fill: #fff;
    }
  }
}
</style>
