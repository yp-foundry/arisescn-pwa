<template>
  <section
    id="give-online"
    class="a-give-online-section black position-relative rounded-t-curve overflow-hidden secondary lighten-5"
  >
    <v-layout wrap>
      <v-flex xs12 md6 class="position-relative hidden-sm-and-down">
        <v-img
          src="/img/backgrounds/sow-a-seed-arise.jpg"
          width="100%"
          class="position-absolute"
        />
      </v-flex>

      <v-flex xs12 md6 class="section-padding position-relative px-sm-16">
        <v-img
          src="/img/backgrounds/sow-a-seed-arise.jpg"
          width="50%"
          height="60%"
          class="position-absolute hidden-md-and-up rounded-l-xl rounded-t-curve overflow-hidden"
          style="left: 50%; top: 30%"
        />

        <v-container class="position-relative">
          <h2
            class="text-h3 text-md-h2 font-weight-bold mb-16 ml-n1"
            style="line-height: 1.2"
          >
            Sow your Seed <br />
            Online
          </h2>

          <div class="body-2">
            <div class="mb-4">
              <div class="caption text-uppercase">Bank Name:</div>

              <div class="body-2 font-weight-bold">
                {{ ariseSCNBankAccount.bankName }}
              </div>
            </div>

            <div class="mb-4">
              <div class="caption text-uppercase">Account Number:</div>
              <div class="title font-weight-bold">
                {{ ariseSCNBankAccount.accountNumber }}
              </div>
            </div>

            <div class="mb-4">
              <div class="caption text-uppercase">Account Name:</div>
              <div class="body-2 font-weight-bold">
                {{ ariseSCNBankAccount.accountName }}
              </div>
            </div>
          </div>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: 'GiveOnlineSection',

  setup() {
    const ariseSCNBankAccount = ref({
      bankName: 'United Bank of Africa (UBA)',
      accountNumber: '2112254430',
      accountName: 'Arise, Shine Christian Network'
    })

    return {
      ariseSCNBankAccount
    }
  }
}
</script>
