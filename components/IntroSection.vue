<template>
  <header>
    <div class="intro-carousel-wrapper position-relative">
      <div class="intro__text ma-auto text-center">
        <!-- eslint-disable prettier/prettier -->
        <img
          :src="$icon(192)"
          alt="arise-logo"
          class="intro-flyer__text__img mb-1"
        >
        <!-- eslint-enable prettier/prettier -->

        <h1 class="primary--text">
          Arise, Shine
          <small class="grey--text text--lighten-3">Christian Network</small>
        </h1>
      </div>

      <!-- <v-scale-transition appear> -->
      <!-- eslint-disable prettier/prettier -->
      <!-- <picture>
          <source type="image/webp" media="(max-width: 512px)" srcset="~assets/img/arise-flyer/arise-flyer-512.webp">
          <source type="image/webp" media="(min-width: 513px)" srcset="~assets/img/arise-flyer/arise-flyer.webp">
          <source type="image/jpeg" media="(max-width: 512px)" srcset="~assets/img/arise-flyer/arise-flyer-512.jpg"> -->
      <!-- <source media="(min-width: 513px)" srcset="~assets/img/arise-flyer/arise-flyer.jpg"> -->

      <!-- <img
            src="~assets/img/arise-flyer/arise-flyer.jpg"
            style="width: 100%; height: auto; max-height: 90vh; object-fit: contain; position: relative;"
            alt="arise-flyer"
          > -->
      <!-- </picture> -->
      <!-- eslint-enable prettier/prettier -->
      <!-- </v-scale-transition> -->

      <v-carousel
        class="intro__carousel"
        hide-delimiters
        :show-arrows="false"
        height="100%"
      >
        <v-carousel-item>
          <p
            class="intro__carousel__text mb-0 warning text-center px-3 py-3 py-md-4 headline"
          >
            <!-- eslint-disable prettier/prettier -->
            Join us {{ daysToSaturdayOffset }} at Arise, live online radio at
            <a
              href="http://mixlr.com/arise-live"
              rel="noopener noreferrer"
            >http://mixlr.com/arise-live</a>
          </p>

          <picture>
            <source type="image/webp" media="(max-width: 512px)" srcset="~assets/img/arise-flyer/arise-flyer-512.webp">
            <source type="image/webp" media="(min-width: 513px)" srcset="~assets/img/arise-flyer/arise-flyer.webp">
            <source type="image/jpeg" media="(max-width: 512px)" srcset="~assets/img/arise-flyer/arise-flyer-512.jpg">
            <source media="(min-width: 513px)" srcset="~assets/img/arise-flyer/arise-flyer.jpg">

            <img
              src="~assets/img/arise-flyer/arise-flyer.jpg"
              alt="arise-flyer"
              class="intro__carousel__img"
            >
          </picture>
          <!-- eslint-enable prettier/prettier -->
        </v-carousel-item>
      </v-carousel>
    </div>

    <v-container tag="summary" class="my-12">
      <v-layout
        wrap
        :justify-center="$vuetify.breakpoint.smAndDown"
        :justify-space-around="$vuetify.breakpoint.mdAndUp"
      >
        <v-flex
          xs12
          md4
          lg3
          tag="h3"
          :class="[
            'display-1 text-xs-center primary--text text--darken-1 mb-4',
            $vuetify.breakpoint.mdAndUp ? 'px-6' : ''
          ]"
        >
          <small>About</small> Arise
        </v-flex>

        <v-flex xs12 md7 lg5 class="title font-weight-regular">
          Arise, a place of Encounter with the Holy Spirit. To prepare the
          saints saints for the work of the ministry (Ephesians 4:11), which is
          the ministry of reconciliation (2 Corinthians 5:18)
        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'IntroSection',

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
  background-size: cover;
  border-bottom-left-radius: 50% 8px;
  border-bottom-right-radius: 50% 8px;
  position: relative;
  overflow: hidden;
  height: 360px;

  @media #{map-get($display-breakpoints, 'sm-only')} {
    height: 480px;
  }

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    height: 600px;
  }
}

.intro {
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
    // height: 100% !important;

    &__alert {
      // height: 52px;
    }

    &__img {
      width: 100%;
      height: calc(100% - 52px);
      object-fit: contain;
      position: relative;

      @media #{map-get($display-breakpoints, 'md-and-up')} {
        height: calc(100% - 60px);
      }
    }
  }
}
</style>
