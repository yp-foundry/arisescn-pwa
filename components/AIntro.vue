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
  background-color: var(--v-secondary-darken2);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%2310142a' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23002b78'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(var(--v-secondary-darken2), var(--v-secondary-darken3));
  background-size: auto;
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
