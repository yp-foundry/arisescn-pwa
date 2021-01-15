<template>
  <div :class="{ 'hamburger-menu': true, close: value }">
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
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: Boolean
    }
  },

  setup(_, { emit }) {
    const updateValue = (bool) => {
      emit('input', bool)
    }

    return { updateValue }
  }
}
</script>

<style lang="scss" scoped>
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
    background: #eee;

    &--1 {
      transform-origin: top left;
    }

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
      transform: translate(3.8px, -2px);
    }

    &--1 {
      transform: rotate(45deg) translate(2px, -1px);
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
