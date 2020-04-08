<template>
  <v-app-bar
    :scroll-threshold="32"
    flat
    clipped-right
    fixed
    hide-on-scroll
    elevate-on-scroll
    :height="!$vuetify.breakpoint.xsOnly ? 112 : 104"
    class="app-bar white py-4 py-sm-5"
  >
    <div class="app-bar__left">
      <nuxt-link to="/" exact class="app-link shrink align-center" title="home">
        <div class="d-flex align-center">
          <v-img
            :src="$icon(192)"
            alt="Arise, Shine Christian Network logo"
            class="h-100"
            :aspect-ratio="1"
          />

          <h1 class="subtitle-1 text-uppercase" style="line-height: 1.35;">
            Arise, Shine<br />
            Christian <br />
            Network
          </h1>
        </div>
      </nuxt-link>
    </div>

    <v-spacer />

    <nav class="hidden-sm-and-down">
      <!-- FIXME: exact-active-class -->
      <v-btn
        v-for="route in routes"
        :key="route.link"
        class="text-capitalize"
        text
        :href="route.link"
        exact-active-class="secondary lighten-4"
        @click.stop="$vuetify.goTo(route.link)"
      >
        {{ route.text }}
      </v-btn>
    </nav>

    <v-spacer />

    <div class="app-bar__right">
      <v-btn
        color="secondary"
        class="hidden-sm-and-down"
        rounded
        @click.stop="$vuetify.goTo('#contact')"
      >
        Request a Quote
      </v-btn>

      <!-- <v-app-bar-nav-icon class="hidden-md-and-up">
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
  </v-app-bar>
</template>

<script>
export default {
  name: 'FAppBar',

  props: {
    appDrawerIsShown: {
      required: true,
      type: Boolean
    },

    routes: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.app-bar {
  border-bottom-right-radius: 16px;

  &__left,
  &__right {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      width: 180px;
    }
  }

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-45%, -50%) rotateZ(90deg);
    width: 250px;
    height: 300px;
    border-radius: 50%;
    background: var(--v-black-purple-base);
    transition: $primary-transition;

    @media #{map-get($display-breakpoints, 'md-and-up')} {
      transform: translate(-50%, -50%) rotateZ(90deg);
      width: 400px;
      height: 450px;
    }
  }
}

.app-bar.v-app-bar--is-scrolled::before {
  transform: translate(-45%, -100%) rotateZ(90deg);

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    transform: translate(-50%, -100%) rotateZ(90deg);
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
    height: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__bar {
    height: 2.2px;
    background: var(--v-black-purple-base);

    &--1 {
      width: 20px;
    }

    &--2 {
      width: 12px;
    }

    &--3 {
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
      transform: rotate(45deg);
    }

    &--2 {
      transform: rotate(180deg) scale(0);
    }

    &--3 {
      transform-origin: bottom left;
      transform: rotate(-45deg) translate(-1px);
      width: 20px;
    }
  }
}
</style>
