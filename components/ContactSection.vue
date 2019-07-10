<template>
  <div
    class=" blue-grey--text text--lighten-4"
    style="background: #151829; border-top-left-radius: 50% 4px; border-top-right-radius: 50% 50px;"
  >
    <v-container class="mt-5 pt-5 mb-2">
      <v-layout>
        <v-flex xs12 md6 lg4>
          <h2 class="display-2">
            Reach Us
          </h2>

          <div class="mt-3">
            <a
              href="https://facebook.com/arise.scn"
              target="_blank"
              style="text-decoration: none;"
              class="d-inline-flex align-center mb-3 white--text mx-1"
            >
              <!-- eslint-disable-next-line prettier/prettier -->
              <img src="~assets/img/icons/facebook.png" alt="mixlr" style="width: 24px; height: 24px;">
              <span class="ml-2">Facebook</span>
            </a>

            <!-- eslint-disable-next-line prettier/prettier -->
            <br>

            <a
              href="http://www.mixlr.com/arise-live"
              target="_blank"
              style="text-decoration: none;"
              class="d-inline-flex align-center mb-3 white--text mx-1"
            >
              <!-- eslint-disable-next-line prettier/prettier -->
              <img src="~assets/img/icons/mixlr.png" alt="facebook" style="width: 24px; height: 24px;">
              <span class="ml-2">Mixlr - Live Radio</span>
            </a>
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <div class="text-xs-center pa-2">
      &copy; Arise, Shine Christian Network 2019
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',

  data() {
    return {
      socialLinks: [
        {
          text: 'Facebook',
          imgSrc: '~@assets/img/icons/facebook.png',
          link: 'https://facebook.com/arise.scn'
        },
        {
          text: 'Mixlr - Live Radio',
          imgSrc: '~@assets/img/icons/mixlr.png',
          link: 'http://www.mixlr.com/arise-live'
        }
      ]
    }
  }
}
</script>

<style></style>
