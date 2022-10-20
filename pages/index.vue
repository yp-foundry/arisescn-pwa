<template>
  <div>
    <intro-section class="mb-6" />

    <latest-messages-cards-swiper class="pb-16" />

    <live-section class="my-8 my-md-16" />

    <messages-section />

    <give-online-section />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'HomePage',

  head: {
    title: 'Arise!',

    script: [
      {
        vmid: 'fb-chatbox-script',
        innerHTML: `
           var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "491337924555024");
          chatbox.setAttribute("attribution", "biz_inbox");
        `
      },
      {
        vmid: 'fb-chat-script',
        innerHTML: `
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v13.0'
            });
          };

          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `,
        type: 'text/javascript'
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'fb-chat-script': ['innerHTML']
    }
  }
})
</script>
