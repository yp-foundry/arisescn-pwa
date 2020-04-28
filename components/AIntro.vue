<template>
  <header>
    <div class="intro-carousel-wrapper position-relative">
      <div class="intro__background w-100 h-100">
        <slot name="background" />
      </div>
      <div class="intro__text ma-auto text-center"></div>

      <div class="intro__content">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AIntro'
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
  &__content {
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
  }

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
}
</style>
