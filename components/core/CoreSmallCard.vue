<template>
  <div
    :class="[
      'a-small-card pa-2 d-flex',
      shrink ? 'a-small-card--shrink' : '',
      fillWidth ? 'a-small-card--fill-width' : '',
      list ? 'a-small-card--list' : '',
      coloredBg ? 'a-small-card--colored-bg' : '',
      imgSrc ? 'a-small-card--expanded' : ''
    ]"
  >
    <v-layout column class="a-small-card__content ma-0 mr-1">
      <!-- meta -->
      <!-- <div class="mb-2 a-small-card__meta">
        <span class="a-small-card__media-tag font-weight-bold red white--text"
          >Audio</span
        >
        <span class="a-small-card__duration ml-1">
          <span class="duration__icon"></span>
          <span class="duration__text font-weight-bold text--secondary"
            >10:45</span
          >
        </span>
      </div> -->
      <!-- meta -->
      <h3
        class="a-small-card__title text--primary body-2 mb-2"
        v-text="title"
      />

      <v-layout justify-space-between align-center class="ma-0 pr-1">
        <p
          class="a-small-card__author secondary--text text--lighten-3 caption mb-0 font-weight-bold text-capitalize text-truncate"
          v-text="minister"
        />

        <span
          class="a-card__duration secondary--text text--lighten-3 caption d-inline-flex align-center"
        >
          <v-icon x-small class="mr-1">
            {{ mdiClockOutline }}
          </v-icon>

          <span class="caption" v-text="formatDateToText(date)" />
        </span>
      </v-layout>
    </v-layout>

    <v-img
      :src="imgSrc"
      :alt="`${title} image`"
      class="a-small-card__img flex-shrink-0 flex-grow-0"
      lazy-src="/img/album-arts/arise-album-art-placeholder.jpg"
    />

    <v-btn
      :href="link"
      class="a-small-card__cta light-filter-elevation-1"
      color="white"
      icon
      absolute
      small
      rel="noopener noreferrer"
      role="download"
      download
      target="_blank"
    >
      <v-icon small v-text="mdiCloudDownload" />
    </v-btn>
  </div>
</template>

<script>
import {
  mdiDotsVertical,
  mdiCloudDownload,
  mdiEye,
  mdiClockOutline
} from '@mdi/js'

import { useFormatDateToText } from '@/composables/ui/date'

const optionalStringType = {
  type: String,
  default: ''
}

const optionalBooleanType = {
  type: Boolean,
  default: false
}

export default {
  name: 'CoreSmallAudioCard',

  props: {
    coloredBg: optionalStringType,
    imgSrc: optionalStringType,
    title: optionalStringType,
    minister: optionalStringType,
    link: optionalStringType,
    date: {
      required: true,
      type: Date
    },
    list: optionalBooleanType,
    shrink: optionalBooleanType,
    fillWidth: optionalBooleanType
  },

  setup() {
    return {
      formatDateToText: useFormatDateToText
    }
  },

  data() {
    return {
      mdiDotsVertical,
      mdiCloudDownload,
      mdiEye,
      mdiClockOutline
    }
  }
}
</script>

<style scoped lang="scss">
$list-item-action-icon-margin: 0;

/*
 * TODO: Convert px to rem
 *
*/

$gutter: 8px;
$cta-width: 40px;

.a-small-card {
  min-width: 200px;
  // width: fit-content;
  max-width: 256px;
  // max-height: 90px;
  padding: $gutter;
  position: relative;
  // border: 1px solid rgba(#000, 0.1) !important;
  border-radius: $border-radius / 2;

  // color not really looking good

  /* &--colored-bg {
    background: #f0f0ff;
    background: linear-gradient(to top right, #f5f5ff, #ffffff);
  } */

  &__img {
    height: 64px;
    width: 64px;
    // object-fit: cover;
    border-radius: $border-radius / 2;
  }

  // &__content {
  //   flex-grow: 1 !important;
  // }

  &__meta {
    // just a little fix for text vertical alignment
    margin-top: -4px;
  }

  &__media-tag,
  &__duration {
    font-size: 0.71rem;
  }

  &__media-tag {
    padding: 0.8px 5px 1px;
    text-transform: uppercase;
    border-radius: $border-radius / 2;
  }

  &__author {
    font-size: 0.93rem;
    // max-width: calc(100% - ($cta-width + $gutter));
    // max-width: calc(100% - 48px);
  }

  &__title {
    margin-top: 2px;
    line-height: 1.1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  &__cta {
    $offset: 4px;

    position: absolute;
    top: ($gutter / 2);
    right: $gutter / 2;
    background: rgba($color: #000, $alpha: 0.4);
    border-radius: 2px;
  }

  &.a-small-card--expanded {
    min-width: 280px;
    max-width: 320px;

    .a-small-card {
      &__img {
        display: block;
      }

      &__content {
        margin-left: $gutter;
      }
    }
  }

  &.a-small-card--shrink {
    // width: 200px;
    width: fit-content;

    &.a-small-card--expanded {
      // width: 280px;
      width: fit-content;
    }
  }

  &.a-small-card--fill-width {
    width: 100%;
    max-width: 100%;
  }

  &.a-small-card--shrink.a-small-card--fill-width {
    .a-small-card__content {
      flex-grow: 0 !important;
    }
  }

  &.a-small-card--list {
    border-left: none !important;
    border-right: none !important;
    border-radius: 0 !important;
    margin-top: -1px;
  }

  // TODO: make a-small-card--list after each other with no borders and margin, but hr
}
</style>

<style lang="scss">
.a-small-card {
  .v-list-item__icon {
    margin-right: 8px !important;
  }
}
</style>
