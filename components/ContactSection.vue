<template>

  <div class="secondary lighten-5 d-flex">

    <div
      class="secondary darken-2 dark-text--secondary w-100"
      style="border-top-left-radius: 50% 4px; border-top-right-radius: 50% 50px"
    >

      <v-container class="mt-12 pt-12">

        <v-layout>

          <v-flex xs12 md6 lg4>

            <h2 class="display-2 dark-text--primary">Reach Us</h2>

            <div class="mt-12">

              <div
                v-for="item in socialLinks"
                :key="item.text"
                class="mb-3 mx-2"
              >

                <a
                  :href="item.link"
                  target="_blank"
                  style="text-decoration: none"
                  class="d-inline-flex align-center white--text"
                  rel="noopener noreferrer"
                >

                  <!-- eslint-disable-next-line prettier/prettier -->

                  <img
                    :src="item.imgSrc"
                    :alt="item.text"
                    style="width: 24px; height: auto; max-height: 24px"
                  />

                  <span class="ml-4">{{ item.text }}</span>

                </a>

              </div>

            </div>

          </v-flex>

        </v-layout>

        <div class="text-xs-center pt-8 pb-4">
           &copy; Arise, Shine Christian Network 2020
        </div>

      </v-container>

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
          text: 'Youtube',
          imgSrc: '/img/icons/youtube-play.png',
          link: 'https://www.youtube.com/channel/UC5kh4SGXwp7mWLkR286rnkA'
        },
        {
          text: 'Mixlr - Live Radio',
          imgSrc: '/img/icons/mixlr.png',
          link: 'http://www.mixlr.com/ariseSCN'
        },
        {
          text: 'Telegram',
          imgSrc: '/img/icons/telegram.png',
          link: 'https://www.telegram.me/ariseSCN'
        },
        {
          text: 'Facebook',
          imgSrc: '/img/icons/facebook.png',
          link: 'https://facebook.com/ariseSCN'
        },
        {
          text: 'Instagram',
          imgSrc: '/img/icons/instagram.png',
          link: 'https://www.instagram.com/ariseSCN'
        },
        {
          text: 'Tiktok',
          imgSrc: '/img/icons/tiktok.png',
          link: 'https://www.tiktok.com/@ariseSCN'
        },
        {
          text: 'Twitter',
          imgSrc: '/img/icons/twitter.png',
          link: 'https://twitter.com/ariseSCN'
        }
      ]
    }
  }
}
</script>

