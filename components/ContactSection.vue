<template>
  <div
    class="accent"
    style="border-top-left-radius: 50% 4px; border-top-right-radius: 50% 50px; color: #eeeeee;"
  >
    <v-container class="mt-5 pt-5 mb-2">
      <v-layout>
        <v-flex xs12 md6 lg4>
          <h2 class="display-2">
            Reach Us
          </h2>

          <div class="mt-3">
            <div v-for="item in socialLinks" :key="item.text" class="mb-3 mx-1">
              <a
                :href="item.link"
                target="_blank"
                style="text-decoration: none;"
                class="d-inline-flex align-center white--text"
                rel="noopener"
              >
                <!-- eslint-disable-next-line prettier/prettier -->
                <img :src="item.imgSrc" :alt="item.text" style="width: 24px; height: auto; max-height: 24px;">
                <span class="ml-2">{{ item.text }}</span>
              </a>
            </div>
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
          imgSrc: '/img/icons/facebook.png',
          link: 'https://facebook.com/arise.scn'
        },
        {
          text: 'Mixlr - Live Radio',
          imgSrc: '/img/icons/mixlr.png',
          link: 'http://www.mixlr.com/arise-live'
        },
        {
          text: 'Youtube',
          imgSrc: '/img/icons/youtube-play.png',
          link: 'https://www.youtube.com/channel/UC5kh4SGXwp7mWLkR286rnkA'
        }
      ]
    }
  }
}
</script>

<style></style>
