<template>
  <div>
    <!-- About header -->
    <a-intro>
      <template #background>
        <!-- <no-ssr>
            <vue-particles
              color="#dedede"
              :particle-opacity="0.7"
              :particles-number="80"
              shape-type="circle"
              :particle-size="4"
              lines-color="#dedede"
              :lines-width="1"
              :line-linked="true"
              :line-opacity="0.4"
              :lines-distance="150"
              :move-speed="3"
              :hover-effect="true"
              hover-mode="grab"
              :click-effect="true"
              click-mode="push"
            >
            </vue-particles>
          </no-ssr> -->
      </template>

      <template #default>
        <v-container
          :fluid="!$vuetify.breakpoint.xlOnly"
          class="transition-swing"
        >
          <h1
            class="mt-12 mt-md-0 mb-8 px-3 px-sm-12 px-xl-0 text-center dark-text--primary display-1 font-weight-bold"
          >
            ARISE, SHINE CHRISTIAN NETWORK
          </h1>
          <v-row
            justify="center"
            justify-md="space-around"
            class="px-3 px-sm-12 position-relative"
          >
            <v-col cols="12" md="6" order-md="2">
              <div style="position: sticky; top: 100px; left: 0;">
                <v-img
                  :src="
                    require('~/assets/img/backgrounds/arise-global-network.jpg')
                  "
                  width="100%"
                  height="80vh"
                  :max-height="540"
                  max-width="100%"
                  contain
                  class="filter-elevation-2"
                />
              </div>
            </v-col>

            <v-col
              order-md="1"
              md="6"
              xl="4"
              class="max-width-600 px-4 pl-sm-5 pl-md-0 dark-text--primary text-center text-md-left"
            >
              <div class="mb-12">
                <h3 class="title font-weight-bold mb-1">VISION</h3>

                <p class="title font-weight-thin mb-8">
                  to raise an army of men who knows God, loves and lives in the
                  light of God's purpose for their life are raised
                </p>
              </div>

              <div class="mb-12">
                <h3 class="title font-weight-bold mb-1">MISSION</h3>

                <ul class="title font-weight-thin mb-8">
                  <li>
                    We reach out to men with the everlasting Gospel of the love
                    of Christ, telling them about the finished work of
                    salvation, thereby bringing them into the fold of his
                    Kingdom (Mark 16:15).
                  </li>

                  <li>
                    We Teach, Preach and Demonstrate the Resurrected and Gloried
                    Christ, so that the faith of the Saints should not be in the
                    wisdom of men, but in the power of God. I Corinthians 2:
                    1-5.
                  </li>

                  <li>
                    We teach the saints the principles of the kingdom of God, so
                    that in practice of it their life can validate and influence
                    the world to believe in the reality of the kingdom of God.
                    Matthew 12:28, 16:19
                  </li>
                </ul>
              </div>

              <div class="mb-12">
                <h3 class="title font-weight-bold mb-1">
                  ABOUT THE CHRISTIAN NETWORK
                </h3>

                <ul class="title font-weight-thin mb-8">
                  <li>
                    It is a Non-denominational ministry that is centered on
                    preparing the saints for the work ministry.
                  </li>

                  <li>
                    It is not in the contest of contemporary church.
                  </li>

                  <li>
                    It is not a subsidiary of any church or ministry.
                  </li>

                  <li>
                    Our fellowship period is only on Saturdays, except special
                    programs like retreats that can take days of camping and
                    waiting on the Lord.
                  </li>

                  <li>
                    We love and we share.
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </a-intro>
  </div>
</template>

<script>
import AIntro from '@/components/AIntro'

export default {
  name: 'AboutPage',

  components: {
    AIntro
  },

  head() {
    return {
      title: 'About'
    }
  }
}
</script>

<style lang="scss" scoped></style>
