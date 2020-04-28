<template>
  <section id="section-messages">
    <v-container class="elevation-2 white rounded-2 mt-12 pt-4 mb-12">
      <h3 shrink class="headline secondary--text mb-5">
        Here is a collection of our Messages
      </h3>

      <v-layout class="mb-4">
        <v-flex xs12 sm8 md6 lg4>
          <v-chip
            :input-value="isOnly2020Messages"
            class="ma-2"
            filter
            @click="filterByYear('2020')"
          >
            2020 Messages
          </v-chip>

          <v-chip
            :input-value="isOnly2019Messages"
            class="ma-2"
            filter
            @click="filterByYear('2019')"
          >
            2019 Messages
          </v-chip>
        </v-flex>
      </v-layout>

      <v-layout
        tag="header"
        wrap
        justify-space-between
        align-end
        class="mb-3 mx-3"
      >
        <v-flex shrink class="headline secondary--text mb-2 mb-md-0 mr-3">
          <v-text-field
            v-model="search"
            :height="48"
            :prepend-inner-icon="mdiMagnify"
            label="Search"
            single-line
            hide-details
            outlined
            shaped
            clearable
            dense
          />
        </v-flex>

        <v-btn
          color="secondary"
          text
          class="hidden-sm-and-up"
          @click="showFilters = !showFilters"
        >
          <v-icon v-text="mdiFilter" />Filter
        </v-btn>

        <v-flex v-show="showFilters" xs12 sm6 md5 lg4>
          <v-layout wrap align-end justify-end>
            <v-flex xs12 sm6>
              <v-select
                v-model="sortBy"
                :items="keys"
                :prepend-inner-icon="mdiSort"
                flat
                outlined
                dense
                hide-details
                label="Sort by"
                class="mt-3 mt-sm-0 mr-sm-3"
              ></v-select>
            </v-flex>

            <v-flex shrink>
              <v-layout
                justify-space-between
                align-center
                class="children-flex-grow-none"
              >
                <span class="hidden-sm-and-up mr-3">Order:</span>

                <v-btn-toggle v-model="sortDesc" mandatory class="mt-3 mt-sm-0">
                  <v-btn :value="false" text color="primary">
                    <v-icon v-text="mdiArrowUp" />
                  </v-btn>
                  <v-btn :value="true" text color="primary">
                    <v-icon v-text="mdiArrowDown" />
                  </v-btn>
                </v-btn-toggle>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <!-- <a-horizontal-swiper>
        <v-layout>
          <a-small-audio-card
            v-for="item in messages.slice(0, 7)"
            :key="item.title"
            :title="item.title"
            :minister="item.minister"
            :link="item.link"
            :img-src="item.imgSrc"
            shrink
            class="mr-2"
          />
        </v-layout>
      </a-horizontal-swiper> -->

      <v-data-iterator
        :items="messages"
        :items-per-page.sync="itemsPerPage.value"
        :page="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <!-- <template v-slot:header>
            <v-toolbar dark color="blue darken-3" class="mb-1">
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="search"
                label="Search"
              ></v-text-field>
              <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-spacer></v-spacer>
                <v-select
                  v-model="sortBy"
                  flat
                  solo-inverted
                  hide-details
                  :items="Object.values(sortKeys)"
                  prepend-inner-icon="search"
                  label="Sort by"
                ></v-select>
                <v-spacer></v-spacer>
                <v-btn-toggle v-model="sortDesc" mandatory>
                  <v-btn large depressed color="blue" :value="false">
                    <v-icon v-text="arrowUpward" />
                  </v-btn>
                  <v-btn large depressed color="blue" :value="true">
                    <v-icon>arrow_downward</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </template>
            </v-toolbar>
          </template>-->

        <template v-slot:default="props">
          <div class="mx-sm-3">
            <v-row dense>
              <!-- <v-col v-for="item in props.items" :key="item.title">
                  <a-card
                    :title="item.title"
                    :minister="item.minister"
                    :link="item.link"
                    :img-src="
                      item.imgSrc
                        ? item.imgSrc
                        : '/img/album-arts/arise-album-art-placeholder.jpg'
                    "
                    :album="item.series ? item.series : ''"
                    class="transition-swing"
                    shrink
                  />
                </v-col> -->

              <v-col v-for="item in props.items" :key="item.title">
                <v-hover v-slot:default="{ hover }">
                  <a-small-card
                    :title="item.title"
                    :minister="item.minister"
                    :link="item.link"
                    :img-src="
                      item.imgSrc
                        ? item.imgSrc
                        : '/img/album-arts/arise-album-art-placeholder.jpg'
                    "
                    :date="item.date"
                    :class="{
                      'elevation-5': hover,
                      'transition-swing': true
                    }"
                  />
                </v-hover>
              </v-col>
            </v-row>
          </div>
        </template>

        <template v-slot:footer>
          <v-container>
            <v-layout
              mt-2
              wrap
              align-center
              justify-center
              justify-sm-end
              class="children-flex-grow-0 children-flex-shink-0"
            >
              <span>Messages to show at once</span>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn dark text color="primary" class="mr-3" v-on="on">
                    {{ itemsPerPage.text }}
                    <v-icon v-text="mdiArrowExpandDown" />
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in itemsPerPageArray"
                    :key="index"
                    @click="updateItemsPerPage(item)"
                  >
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-flex>
                <v-pagination
                  v-show="numberOfPages > 1"
                  v-model="page"
                  :length="numberOfPages"
                ></v-pagination>
              </v-flex>
            </v-layout>
          </v-container>
        </template>
      </v-data-iterator>
    </v-container>
  </section>
</template>

<script>
// import AHorizontalSwiper from '@/components/core/CoreHorizontalSwiper.vue'
import ASmallCard from '@/components/core/CoreSmallCard.vue'
// import ACard from '@/components/core/CoreCard.vue'

import {
  mdiMagnify,
  mdiFilter,
  mdiSort,
  mdiArrowUp,
  mdiArrowDown,
  mdiMenuDown
} from '@mdi/js'

import { useMedia } from '@/composables/media'

export default {
  name: 'MessagesSection',

  components: {
    // AHorizontalSwiper,
    // ACard,
    ASmallCard
  },

  setup() {
    const { messages } = useMedia()

    return { messages }
  },

  data() {
    return {
      itemsPerPage: {
        text: 12,
        value: 12
      },

      itemsPerPageArray: [
        {
          text: 4,
          value: 4
        },
        {
          text: 12,
          value: 12
        },
        {
          text: 24,
          value: 24
        },
        {
          text: 'All',
          value: -1
        }
      ],

      filter: {},

      sortBy: 'timestamp',

      keys: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Minister',
          value: 'minister'
        },
        {
          text: 'Date',
          value: 'timestamp'
        }
      ],

      sortKeys: {
        title: 'Title',
        minister: 'Minister',
        timestamp: 'Date'
      },

      page: 1,

      sortDesc: true,

      mdiMagnify,

      mdiFilter,

      mdiSort,

      mdiArrowUp,

      mdiArrowDown,

      mdiArrowExpandDown: mdiMenuDown,

      showFilters: true,

      search: '',
      isOnly2020Messages: false,
      isOnly2019Messages: false,
      isFilterByYear: ''
    }
  },

  computed: {
    // search() {
    //   return this.$store.state.search
    // },

    numberOfPages() {
      return Math.ceil(this.messages.length / this.itemsPerPage.value)
    },

    filteredKeys() {
      return Object.values(this.sortKeys).filter((key) => key !== `Timestamp`)
    }
  },

  created() {
    // const search = this.$route.query.search || ''
    this.search = this.$route.query.search || ''

    // eslint-disable-next-line no-console
    // console.dir(search)

    // if (search) {
    //   this.$store.commit('SET_SEARCH', search)
    // }
  },

  methods: {
    filterFn(value, search, item) {
      if (!this.isFilterByYear) {
        return true
      }

      return String(item.date.getFullYear()).includes(this.isFilterByYear)
    },

    filterByYear(year) {
      if (this[`isOnly${year}Messages`] === true) {
        this.isFilterByYear = ''
        this[`isOnly${year}Messages`] = false
        return
      }
      this.isOnly2020Messages = false
      this.isOnly2019Messages = false
      this.isFilterByYear = year
      this[`isOnly${year}Messages`] = true
    },

    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },

    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },

    updateItemsPerPage(number) {
      this.itemsPerPage = number
    }
  }
}
</script>

<style lang="scss" scoped></style>
