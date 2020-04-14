<template>
  <header>
    <div class="intro-carousel-wrapper position-relative">
      <div class="intro__background w-100 h-100"></div>
      <div class="intro__text ma-auto text-center"></div>

      <v-carousel
        :show-arrows="false"
        class="intro__carousel"
        hide-delimiters
        height="100%"
      >
        <v-carousel-item class="pt-4 pb-12 dark-text--secondary">
          <v-container>
            <v-row
              justify="center"
              justify-md="space-between"
              align-md="center"
            >
              <v-col
                class="max-width-600 px-4 pl-sm-5 pl-md-0 text-center text-md-left"
              >
                <h1
                  class="mt-12 mt-md-0 mb-8 dark-text--primary display-3 font-weight-bold"
                >
                  ARISE!
                </h1>

                <p class="headline font-weight-thin mb-8">
                  Experience the fellowship of the Spirit at the
                  non-denominational fellowship of the believers.
                </p>

                <v-btn nuxt large color="primary" to="/arise" class="mb-12"
                  >Learn More</v-btn
                >
              </v-col>

              <v-col>
                <v-img
                  :src="
                    require('~/assets/img/spoken-words/arise-is-a-place-where-giants-are-born.jpg')
                  "
                  :max-height="540"
                  contain
                  class="filter-elevation-2"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>

      <div
        class="intro__notification secondary lighten-1 pl-4 pl-sm-12 pr-4 py-3 d-flex align-center"
      >
        <v-icon color="primary lighten-3" dark class="mr-3" v-text="mdiBell" />

        <span class="subtitle-1 dark-text--primary"
          >Join us {{ daysToSaturdayOffset }} online on at
          <a href="https://www.mixlr.com/arise-live"
            >https://mixlr.com/arise-live</a
          >
        </span>
      </div>
    </div>

    <v-container tag="summary" class="my-12">
      <v-layout
        :justify-center="$vuetify.breakpoint.smAndDown"
        :justify-space-around="$vuetify.breakpoint.mdAndUp"
        wrap
      >
        <v-flex
          :class="[
            'display-1 text-xs-center primary--text text--darken-1 mb-4',
            $vuetify.breakpoint.mdAndUp ? 'px-6' : ''
          ]"
          xs12
          md4
          lg3
          tag="h3"
        >
          <small>About</small> Arise
        </v-flex>

        <v-flex xs12 md7 lg5 class="title font-weight-thin">
          Arise, a place of Encounter with the Holy Spirit. To prepare the
          saints for the work of the ministry (Ephesians 4:11), which is the
          ministry of reconciliation (2 Corinthians 5:18)
        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<script>
import { mdiBell } from '@mdi/js'

export default {
  name: 'IntroSection',

  data() {
    return {
      mdiBell
    }
  },

  computed: {
    daysToSaturdayOffset() {
      const date = new Date()

      const dayOfTheWeek = date.getDay()

      const timeOfTheDay = date.getHours()

      if (dayOfTheWeek === 6) {
        if (timeOfTheDay < 17) {
          return 'today'
        } else if (timeOfTheDay >= 17 && timeOfTheDay < 20) {
          return 'now'
        } else {
          return 'next Saturday'
        }
      } else if (dayOfTheWeek === 5) {
        return 'tomorrow'
      } else if (dayOfTheWeek === 4) {
        return 'next tomorrow'
      } else {
        return 'this Saturday'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.intro-carousel-wrapper {
  background: #0d1931 url('~assets/img/arise-flyer/arise-flyer-blurred.jpg')
    no-repeat;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url('~assets/img/backgrounds/arise-clouds.jpg');
  background: var(--v-secondary-darken2)
    linear-gradient(var(--v-secondary-darken2), var(--v-secondary-darken3));
  background-size: cover;
  border-bottom-left-radius: 50% 8px;
  border-bottom-right-radius: 50% 8px;
  overflow: hidden;
  min-height: 80%;
  // height: 360px;

  @media #{map-get($display-breakpoints, 'sm-only')} {
    // height: 300px;
  }

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    // height: 600px;
  }
}

.intro {
  &__background {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 224px;

    &__img {
      width: 64px;
      height: 64px;
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
    }

    > h1 {
      font-size: 2rem;
      line-height: 2.3rem;
    }
  }

  &__carousel {
    position: relative;
    padding-top: 80px;
    // height: 100% !important;
    z-index: 1;

    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      padding-top: 120px;
    }

    &__alert {
      // height: 52px;
    }

    &__img {
      background: black;
      width: 100%;
      height: calc(100% - 52px);
      object-fit: contain;
      position: relative;

      @media #{map-get($display-breakpoints, 'md-and-up')} {
        height: calc(100% - 60px);
      }
    }
  }

  &__notification {
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    // FIXME: make scss prepend variables
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      width: 50%;
    }
  }
}
</style>
