<template>
  <div class="secondary lighten-5 d-flex">
    <div
      class="contact-section secondary darken-2 dark-text--secondary w-100"
      style="border-top-left-radius: 50% 4px; border-top-right-radius: 50% 50px"
    >
      <v-container class="mt-12 pt-12">
        <v-layout>
          <v-flex xs12 md6 lg4>
            <h2 class="display-2 dark-text--primary">
              Connect
              <span class="dark-text--secondary"
                >with <br />
                the</span
              >
              Network
            </h2>

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
          &copy; Arise, Shine Christian Network {{ new Date().getFullYear() }}
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

<style lang="scss" scoped>
.contact-section {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%2310142a' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23002b78'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E"),
    linear-gradient(var(--v-secondary-darken2), var(--v-secondary-darken3));
  background-repeat: repeat;
  background-size: auto;
  background-attachment: fixed;
}
</style>
