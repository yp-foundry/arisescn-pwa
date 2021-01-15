<template>
  <v-sheet
    id="join-us-live-online"
    tag="section"
    dark
    class="a-live-section black position-relative rounded-b-curve rounded-t-curve overflow-hidden"
  >
    <div class="position-relative d-flex flex-column">
      <live-section-spiral-top />

      <h2
        class="font-weight-bold dark-text--primary text-h3 text-sm-h2 mb-12 max-width-400 mx-auto text-center"
      >
        <small class="font-weight-light">Join us</small><br />
        Live Online
      </h2>

      <v-container>
        <iframe
          src="https://mixlr.com/users/7063459/embed?color=1e88e5"
          width="100%"
          height="180px"
          scrolling="no"
          frameborder="no"
          marginheight="0"
          marginwidth="0"
        ></iframe
        ><small
          ><a
            href="https://mixlr.com/arisescn"
            style="
              color: #1a1a1a;
              text-align: left;
              font-family: Helvetica, sans-serif;
              font-size: 11px;
            "
            >ariseSCN is on Mixlr</a
          ></small
        >
      </v-container>

      <live-section-spiral-bottom />
    </div>
  </v-sheet>
</template>

<script>
import LiveSectionSpiralTop from '@/assets/svg/live-section-spiral-top.svg?inline'
import LiveSectionSpiralBottom from '@/assets/svg/live-section-spiral-bottom.svg?inline'

export default {
  name: 'LiveSection',

  components: { LiveSectionSpiralTop, LiveSectionSpiralBottom },

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.a-live-section {
  // background: linear-gradient(5deg, black, #13196c, black);
  // height: 500px;
  // animation: rotateGradientAngle 3s ease-in-out 40s infinite backwards;

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(-5deg, black, #13196c, black);
    animation: blink 8s ease-in-out infinite backwards;
    opacity: 0.8;

    // transform-origin: center;
    // animation: rotateAngle 3s ease-in-out 40s infinite backwards;
  }
}

@keyframes rotateGradientAngle {
  0% {
    background: linear-gradient(5deg, black, #13196c, black);
  }

  50% {
    background: linear-gradient(-5deg, black, #171e82, black);
  }
}

@keyframes blink {
  40% {
    opacity: initial;
  }
  50% {
    opacity: 1;
  }
  70% {
    opacity: initial;
  }
}

// @keyframes rotateAngle {
//   //
//   0% {
//   }
// }
</style>
