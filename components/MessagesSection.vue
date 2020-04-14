<template>
  <v-container tag="section" class="elevation-2 white rounded-2 mt-4 mb-12">
    <h2 class="headline mb-3">
      Here's a list of our messages
    </h2>

    <v-layout class="mb-2">
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

    <v-layout justify-end class="mb-2">
      <v-flex xs12 sm8 md6 lg4>
        <v-text-field
          v-model="search"
          :height="48"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          outlined
          shaped
          clearable
        />
      </v-flex>
    </v-layout>

    <v-data-table
      :headers="headers"
      :items="messages"
      :items-per-page="5"
      :search="search"
      :sort-by="['timestamp']"
      group-desc
      item-key="title"
      sort-desc
      class="rounded-2"
    >
      <template v-slot:item.timestamp="{ item }">
        {{
          appendLeadingZeroes(item.date.getDate()) +
          '-' +
          appendLeadingZeroes(item.date.getMonth() + 1) +
          '-' +
          item.date.getFullYear()
        }}
      </template>

      <template v-slot:item.action="{ item }">
        <v-btn
          :href="item.link"
          :title="item.title"
          target="_blank"
          color="primary"
          icon
          rel="noopener"
        >
          <v-icon color="primary" v-text="mdiCloudDownload" />
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mdiCloudDownload } from '@mdi/js'

import { useMedia } from '@/composables/media'
// import messages from '@/data/messages'

export default {
  name: 'MessagesSection',

  setup() {
    const { messages } = useMedia()

    return { messages }
  },

  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Title',
          align: 'start',
          value: 'title',
          sortable: true
        },
        {
          text: 'Date',
          value: 'timestamp',
          align: 'center',
          sortable: true,
          filter: (value, search, item) => {
            if (!this.isFilterByYear) {
              return true
            }

            return String(item.date.getFullYear()).includes(this.isFilterByYear)
          }
        },
        {
          text: 'Minister',
          value: 'minister',
          align: 'center',
          sortable: true
        },
        {
          text: 'Series',
          value: 'series',
          align: 'start',
          sortable: true
        },
        {
          text: 'Action',
          value: 'action',
          align: 'center',
          sortable: false
        }
      ],
      // messages,
      isOnly2020Messages: false,
      isOnly2019Messages: false,
      isFilterByYear: '',
      mdiCloudDownload
    }
  },

  computed: {
    // processedMessages() {
    //   // eslint-disable-next-line prettier/prettier
    //   return this.messages.map(message =>
    //     Object.assign(message, {
    //       timestamp: message.date.getTime(),
    //       year: message.date.getFullYear()
    //     })
    //   )
    // }
  },

  methods: {
    appendLeadingZeroes(n) {
      if (n <= 9) {
        return '0' + n
      }
      return n
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
    }
  }
}
</script>

<style>
.rounded-2 {
  border-radius: 12px;
}
</style>
