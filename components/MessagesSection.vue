<template>
  <v-container tag="section" class="elevation-2 white rounded-2 mt-4 mb-5">
    <h2 class="headline mb-2">
      Here's a list of our messages
    </h2>

    <v-layout justify-end>
      <v-flex xs12 sm8 md6 lg4>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
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

    <!-- Data Table comes here -->
    <v-data-table
      :headers="headers"
      :items="processedMessages"
      :items-per-page="5"
      item-key="title"
      :search="search"
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
        <a :href="item.link" target="_blank" style="text-decoration: none;">
          <v-icon color="primary">mdi-download</v-icon>
        </a>
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
      messages,
      headersT: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
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
