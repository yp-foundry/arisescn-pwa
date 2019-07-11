<template>
  <header>
    <div
      class="intro-flyer-wrapper"
      style="border-bottom-left-radius: 50% 8px; border-bottom-right-radius: 50% 8px; overflow: hidden;"
    >
      <!-- eslint-disable prettier/prettier -->
      <img
        src="~assets/img/arise-flyer.jpg"
        style="width: 100%; height: auto; max-height: 90vh; object-fit: contain;"
      >
      <!-- eslint-enable prettier/prettier -->
    </div>

    <v-container tag="summary" class="my-4">
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
            'display-1 text-xs-center primary--text text--darken-1 mb-2',
            $vuetify.breakpoint.mdAndUp ? 'px-3' : ''
          ]"
        >
          <small>About</small> Arise
        </v-flex>

        <v-flex xs12 md7 lg5 class="body-1">
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
  name: 'IntroSection'
}
</script>

<style lang="scss" scoped>
.intro-flyer-wrapper {
  background: url('~assets/img/arise-flyer-blurred.jpg') no-repeat;
  background-size: cover;
}
</style>
