<template>
  <div class="home">
    <b-alert :show="alertCountdown" dismissible fade :variant="alertType" @dismiss-count-down="countDownChanged" >
      {{alertText}}
    </b-alert>
    <div>
      <div class="row p-4">
        <h2>Homepage</h2>
      </div>
    </div>
  </div>
  
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        alertCountdown: 0,
        alertType: '',
        alertText: ''
      }
    },
    methods: {
      countDownChanged(alertCountdown) {
        this.alertCountdown = alertCountdown
      },
    },
  }
</script>

<style scoped>
  .alert{
    position: absolute !important;
    top: 92px !important;
    right: 35% !important;
    width: 400px !important;
    z-index: 100 !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
</style>
