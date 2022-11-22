<template>
  <div
    :class="[
      'a-card',
      shrink ? 'a-card--shrink' : '',
      fillWidth ? 'a-card--fill-width' : '',
      list ? 'a-card--list' : '',
      coloredBg ? 'a-card--colored-bg' : '',
      imgSrc ? 'a-card--expanded' : ''
    ]"
  >
    <div class="position-relative">
      <v-img
        :src="imgSrc"
        :alt="`${title} image`"
        class="a-card__img elevation-1 mb-2"
        aspect-ratio="1"
        width="100%"
        lazy-src="/img/album-arts/arise-album-art-placeholder.jpg"
      />

      <!-- <v-layout
        justify-space-between
        class="a-card__meta w-100 pa-3 ma-0"
      >
        <span
          class="a-card__media-tag black font-weight-bold white--text mr-2"
        >
          Message
        </span>
      </v-layout> -->
    </div>

    <div class="a-card__content px-3 pb-3">
      <v-layout justify-space-between align-center class="ma-0">
        <h3 class="a-card__title text--primary body-1 mr-1" v-text="title" />

        <v-btn
          :href="link"
          rel="noopener noreferrer"
          class="a-card__primary-cta transition-ease-in-out primary-transition-time"
          color="primary"
          text
          icon
          large
          role="download"
          download
          target="_blank"
        >
          <v-icon>{{ mdiCloudDownload }}</v-icon>
        </v-btn>
      </v-layout>

      <v-layout justify-space-between align-center class="ma-0 mt-1">
        <p
          class="a-card__author secondary--text text--lighten-3 caption mb-0 font-weight-bold text-capitalize text-truncate"
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

      <div v-show="showMore" class="a-card__more">
        <p class="mt-4 mb-2 text--secondary a-card__description">
          Quis molestias est.Dicta magni est nostrum. Neque culpa non iusto
          perspiciatis dolor delectus. Harum voluptate maxime et et expedita
          ipsam aut laudantium delectus. Non omnis animi pariatur sunt fugiat
          non iste et non. Eum illo id modi provident modi aut non. Culpa
          similique magni quasi. Aut et nihil eos at qui velit qui dolore nulla.
          Harum quo esse cupiditate laborum nostrum quis. Nobis numquam et
          dolores. Pariatur molestiae nobis numquam. Ea error ipsa. Nisi non nam
          non consequatur et iusto ut. In quis sed.
        </p>

        <v-layout
          justify-space-between
          align-center
          class="a-card__tags ma-0 mt-2"
        >
          <div
            class="body-2 text-truncate font-weight-bold text-capitalize text--secondary"
          >
            <template v-for="(tag, i) in tags">
              <span
                :key="i"
                class="font-weight-bold text-capitalize text--secondary"
                v-text="++i !== tags.length ? `${tag}, ` : tag"
              />
              <!-- <span v-if="i++ !== tags.length" :key="i">, </span> -->
            </template>
          </div>

          <span class="ml-2 a-card__tags__tag font-weight-bold">
            <v-icon x-small>{{ mdiChevronLeft }}</v-icon>
            Tags
          </span>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdiDotsVertical,
  mdiCloudDownload,
  mdiPlay,
  mdiEye,
  mdiClockOutline,
  mdiChevronLeft
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
  name: 'CoreCard',

  props: {
    coloredBg: optionalStringType,
    bordered: optionalBooleanType,
    imgSrc: optionalStringType,
    title: optionalStringType,
    minister: optionalStringType,
    date: {
      required: true,
      type: Date
    },
    list: optionalBooleanType,
    link: optionalStringType,
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
      showMore: false,

      mdiDotsVertical,
      mdiCloudDownload,
      mdiPlay,
      mdiEye,
      mdiClockOutline,
      mdiChevronLeft,
      tags: ['']
    }
  }
}
</script>

<style scoped lang="scss">
/*
 * TODO: Convert px to rem
 *
*/

$gutter: 8px;
$cta-width: 40px;

.a-card {
  min-width: 200px;
  // width: fit-content;
  max-width: 256px;
  // max-height: 90px;
  position: relative;
  border-radius: $border-radius;

  // color not really looking good

  /* &--colored-bg {
    background: #f0f0ff;
    background: linear-gradient(to top right, #f5f5ff, #ffffff);
  } */

  &__primary-cta {
    margin-right: -16px;

    // z-index: 3;
  }

  &__img {
    // height: 160px;

    /* margin-left: -1 * #{map-get($spacers, '3')}; */
    // margin-left: -12px;
    // width: calc(100% + 24px);

    /* width: calc(100% + (#{map-get($spacers, '3')} * 2)); */
    // object-fit: cover;
    border-radius: $border-radius / 2;
    transition: $primary-transition;
  }

  &:hover {
    .a-card {
      &__img {
        transform: scale3d(1.05, 1.03, 1);
      }

      &__primary-cta {
        transform: scale(1.2);
      }
    }
  }

  &__content {
    flex-shrink: 1;
  }

  &__description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  &__meta {
    // just a little fix for text vertical alignment
    // margin-top: -4px;
    position: absolute;
    top: 0;
    left: 0;
  }

  // &__duration,
  &__media-tag,
  &__tags__tag {
    font-size: 0.71rem;
  }

  &__media-tag {
    padding: 1.8px 5px 2px;
    text-transform: uppercase;
    border-radius: 25px;
    // background-color: #ff1744;
  }

  // &__duration {}

  &__tags {
    &__tag {
      padding: 2px 5px;
      text-transform: uppercase;
      border-radius: $border-radius;
      border: 1px solid rgba(#000, 0.2) !important;
    }
  }

  &__author {
    font-size: 0.93rem;
    // max-width: calc(100% - ($cta-width + $gutter));
  }

  &__title {
    margin-top: 2px;
    // line-height: 1.1rem;
    max-width: calc(100% - 56px);
  }

  // &__cta {
  // }

  &.a-card--bordered {
    border: 1px solid rgba(#000, 0.1) !important;
  }

  &.a-card--expanded {
    min-width: 280px;
    max-width: 100%;

    @media #{map-get($display-breakpoints, 'sm-and-up')} {
      max-width: 320px;
    }

    .a-card {
      &__img {
        display: block;
      }
    }
  }

  &.a-card--shrink {
    width: 200px;

    &.a-card--expanded {
      width: 280px;
    }
  }

  &.a-card--fill-width {
    width: 100%;
    max-width: 100%;
  }

  &.a-card--shrink.a-card--fill-width {
    .a-card__content {
      flex-shrink: 1;
    }
  }

  &.a-card--list {
    border-left: none !important;
    border-right: none !important;
    border-radius: 0 !important;
    margin-top: -1px;
  }

  // TODO: make a-card--list after each other with no borders and margin, but hr
}
</style>
