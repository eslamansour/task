<template>
  <div class="home">
    <b-alert :show="alertCountdown" dismissible fade :variant="alertType" @dismiss-count-down="countDownChanged" >
      {{alertText}}
    </b-alert>
    <div>
      <div class="header-page p-4">
        <h3><b>نموذج طلب المنتج "هندسة الموسم"</b></h3>
      </div>
      <div class="form-body">
        <organization-form v-if="step == 1" :form="org" @nextStep="goToStep2"></organization-form>
        <authorities-form v-else :form="authorities" @submitForm="submitForm"></authorities-form>
      </div>
      <div class="form-footer">
        <div>
          <b-button variant="outline-secondary mr-2" v-if="step == 2" @click="goToStep1()">السابق</b-button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import organizationForm from '../components/forms/OrganizationData.vue'
  import authoritiesForm from '../components/forms/AuthoritiesForm.vue'

  export default {
    name: 'Home',
    data() {
      return {
        step: 1,
        org: {
          name: null,
          activity: null,
          area: null,
          city: null,
          package: null
        },
        authorities: {
          adminName: null, 
          adminRole: null,
          adminPhoneCode: null,
          adminPhone: null,
          supervisorName: null, 
          supervisorRole: null,
          supervisorPhoneCode: null,
          supervisorPhone: null,
          supervisorEmail: null,
          description: null
        },
        alertCountdown: 0,
        alertType: '',
        alertText: ''
      }
    },
    methods: {
      countDownChanged(alertCountdown) {
        this.alertCountdown = alertCountdown
      },
      goToStep2(step, form){
        this.step = step;
        this.org = form;
      },
      goToStep1(){
        this.step = 1;
      },
      submitForm(form) {
        this.authorities = form;
        console.log("allfunction");
        console.log(this.org);
        console.log(this.authorities);
        this.alertType = "success"
        this.alertText = "تم التسجيل بنجاح"
        this.alertCountdown = process.env.VUE_APP_ALERT_COUNTDOWN;
      }
    },
    components: {
      organizationForm,
      authoritiesForm
    }
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
  .home{
    padding: 30px;
  }
  .header-page{
    text-align: center;
  }
  .form-body{
    display: block;
    margin: auto;
    width: 80%;
    padding: 20px;
  }
  .form-footer{
    text-align: center;
  }
</style>
