<template>
  <v-container tag="section" class="elevation-2 white rounded-2 mt-4 mb-12">
    <h2 class="headline mb-3">
      Here's a list of our messages
    </h2>

    <v-layout justify-end class="mb-2">
      <v-flex xs12 sm8 md6 lg4>
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          outlined
          shaped
          :height="48"
          clearable
        />
      </v-flex>
    </v-layout>

    <v-data-table
      :headers="headers"
      :items="processedMessages"
      :items-per-page="5"
      item-key="title"
      :search="search"
      :sort-by="['timestamp']"
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
          target="_blank"
          color="primary"
          icon
          :title="item.title"
          rel="noopener"
        >
          <v-icon color="primary">
            mdi-download
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import messages from '~/data/messages.js'

export default {
  name: 'MessagesSection',

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
          sortable: true
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
      messages
    }
  },

  computed: {
    processedMessages() {
      // eslint-disable-next-line prettier/prettier
      return this.messages.map(message =>
        Object.assign(message, {
          timestamp: message.date.getTime()
        })
      )
    }
  },

  methods: {
    appendLeadingZeroes(n) {
      if (n <= 9) {
        return '0' + n
      }
      return n
    }
  }
}
</script>

<style></style>
