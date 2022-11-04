<template>
  <section id="messages" class="section-padding">
    <v-container class="elevation-2 white rounded-2 mt-12 pt-4 mb-12">
      <h2
        shrink
        class="display-2 secondary--text font-weight-bold ml-2 mb-5"
        style="line-height: 1.2"
      >
        <span
          class="d-inline-block display-1 secondary--text text--lighten-2 font-weight-light ml-1"
          style="line-height: 1.4"
          >Here is a <br />collection of
        </span>
        <br />
        Our Messages
      </h2>

      <v-layout class="mb-4">
        <v-flex xs12 sm10 md8 lg6>
          <v-chip
            :input-value="isOnly2022Messages"
            class="ma-2"
            filter
            color="primary"
            @click="filterByYear('2022')"
          >
            2022 Messages
          </v-chip>

          <v-chip
            :input-value="isOnly2021Messages"
            class="ma-2"
            filter
            color="primary"
            @click="filterByYear('2021')"
          >
            2021 Messages
          </v-chip>

          <v-chip
            :input-value="isOnly2020Messages"
            class="ma-2"
            filter
            color="primary"
            @click="filterByYear('2020')"
          >
            2020 Messages
          </v-chip>

          <v-chip
            :input-value="isOnly2019Messages"
            class="ma-2"
            filter
            color="primary"
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
        :custom-filter="filterFn"
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

        <template #default="props">
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
                <v-hover v-slot="{ hover }">
                  <a-small-card
                    :title="item.title"
                    :minister="item.minister"
                    :link="item.link"
                    :img-src="
                      item.imgSrc
                        ? item.thumbnailSrc
                        : '/img/album-arts/arise-album-art-placeholder-thumbnail.jpg'
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

        <template #footer>
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
                <template #activator="{ on }">
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

    const itemsPerPage = ref({
      text: 12,
      value: 12
    })

    const itemsPerPageArray = ref([
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
    ])

    const keys = ref([
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
    ])

    const filter = ref({})

    const sortBy = ref('timestamp')
    const sortKeys = ref({
      title: 'Title',
      minister: 'Minister',
      timestamp: 'Date'
    })
    const sortDesc = ref(true)

    const page = ref(1)
    const route = useRoute()
    const search = ref(route.query.search || '')

    const showFilters = ref(true)
    const isOnly2022Messages = ref(false)
    const isOnly2021Messages = ref(false)
    const isOnly2020Messages = ref(false)
    const isOnly2019Messages = ref(false)
    const isFilterByYear = ref('')

    const mdiArrowExpandDown = mdiMenuDown

    const numberOfPages = computed(() => {
      return Math.ceil(messages.value.length / itemsPerPage.value.value)
    })

    const filteredKeys = computed(() => {
      return Object.values(sortKeys.value).filter((key) => key !== `Timestamp`)
    })

    const filterFn = (items) => {
      if (!items) {
        return []
      }

      return items.filter((item) =>
        String(item.date.getFullYear()).includes(isFilterByYear.value)
      )
    }

    /**
     * Utility function to set a year filter to a value
     * @param {string} year
     * @param {boolean} val
     */
    const setYearFilter = (year, val) => {
      switch (year) {
        case '2022':
          isOnly2022Messages.value = val
          break
        case '2021':
          isOnly2021Messages.value = val
          break
        case '2020':
          isOnly2020Messages.value = val
          break
        case '2019':
          isOnly2019Messages.value = val
          break
      }
    }

    const filterByYear = (year) => {
      const yearsFilterMap = {
        2022: isOnly2022Messages.value,
        2021: isOnly2021Messages.value,
        2020: isOnly2020Messages.value,
        2019: isOnly2019Messages.value
      }

      if (yearsFilterMap[year] === true) {
        isFilterByYear.value = ''
        setYearFilter(year, false)
        return
      }

      isOnly2022Messages.value = false
      isOnly2021Messages.value = false
      isOnly2020Messages.value = false
      isOnly2019Messages.value = false
      isFilterByYear.value = year
      setYearFilter(year, true)
    }

    const nextPage = () => {
      if (page.value + 1 <= numberOfPages.value) page.value += 1
    }

    const formerPage = () => {
      if (page.value - 1 >= 1) page.value -= 1
    }

    const updateItemsPerPage = (number) => {
      itemsPerPage.value = number
    }

    return {
      messages,

      itemsPerPage,
      itemsPerPageArray,

      keys,
      filter,

      sortBy,
      sortKeys,
      sortDesc,

      page,
      search,

      showFilters,
      isOnly2022Messages,
      isOnly2021Messages,
      isOnly2020Messages,
      isOnly2019Messages,
      isFilterByYear,

      numberOfPages,
      filteredKeys,

      filterFn,
      filterByYear,
      nextPage,
      formerPage,
      updateItemsPerPage,

      mdiArrowExpandDown,
      mdiMagnify,
      mdiFilter,
      mdiSort,
      mdiArrowUp,
      mdiArrowDown
    }
  }
}
</script>
