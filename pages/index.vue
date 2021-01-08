<template>
  <div>
    <intro-section class="mb-6" />

    <latest-messages-cards-swiper />

    <!-- <live-section /> -->

    <messages-section />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection'
import LatestMessagesCardsSwiper from '@/components/LatestMessagesCardsSwiper'
// import AHorizontalSwiper from '@/components/core/CoreHorizontalSwiper'
// import LiveSection from '@/components/LiveSection'
import MessagesSection from '@/components/MessagesSection'

export default {
  name: 'HomePage',

  components: {
    IntroSection,
    LatestMessagesCardsSwiper,
    // AHorizontalSwiper,
    // LiveSection,
    MessagesSection
  }
}
</script>
