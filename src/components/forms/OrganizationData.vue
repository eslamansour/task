<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-container>
        <b-row>
          <b-col lg="12" md="12">
            <h5 class="form-header">بيانات المنظمة</h5>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-name" label="اسم المنظمة" label-for="form-name">
              <b-form-input
                id="form-name"
                name="form-name"
                v-model="$v.form.name.$model"
                :state="validateState('name')"
                aria-describedby="input-name"
              ></b-form-input>
              <b-form-invalid-feedback id="input-name" v-if='!$v.form.name.required'>
                اسم المنظمة مطلوب
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-activity" label="نشاط المنظمة" label-for="form-activity">
              <b-form-input
                id="form-activity"
                name="form-activity"
                v-model="$v.form.activity.$model"
                :state="validateState('activity')"
                aria-describedby="input-activity"
              ></b-form-input>
              <b-form-invalid-feedback id="input-activity" v-if='!$v.form.activity.required'>
                نشاط المنظمة مطلوب
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-area" label="المنطقة" label-for="form-area">
              <b-form-input
                id="form-area"
                name="form-area"
                v-model="$v.form.area.$model"
                :state="validateState('area')"
                aria-describedby="input-area"
              ></b-form-input>
              <b-form-invalid-feedback id="input-area" v-if='!$v.form.area.required'>
                المنطقة مطلوبه
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-city" label="المركز/المدينه" label-for="form-city">
              <b-form-input
                id="form-city"
                name="form-city"
                v-model="$v.form.city.$model"
                :state="validateState('city')"
                aria-describedby="input-city"
              ></b-form-input>
              <b-form-invalid-feedback id="input-city" v-if='!$v.form.city.required'>
                المركز/المدينه مطلوبه
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="12" md="12">
            <h5 class="form-header mt-5">بيانات المنظمة</h5>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-package" label="الباقة" label-for="form-package">
              <b-form-input
                id="form-package"
                name="form-package"
                v-model="$v.form.package.$model"
                :state="validateState('package')"
                aria-describedby="input-package"
              ></b-form-input>
              <b-form-invalid-feedback id="input-package" v-if='!$v.form.package.required'>
                الباقة مطلوبه
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="12" md="12">
            <div class="form-footer">
              <b-button class="login-btn" type="submit" variant="primary"> استمرار</b-button>
            </div>
            <br>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
  import { validationMixin } from "vuelidate";
  import { required} from "vuelidate/lib/validators";

  export default {
    props: ['form'],
    mixins: [validationMixin],
    data() {
      return {
        alertCountdown: 0,
        alertType: '',
        alertText: '',
        // form: {
        //   name: null,
        //   activity: null,
        //   area: null,
        //   city: null,
        //   package: null
        // }
      }
    },
    validations: {
      form: {
        name: {
          required
        },
        activity: {
          required,
        },
        area: {
          required
        },
        city: {
          required,
        },
        package: {
          required
        }
      }
    },
    methods: {
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];
        return $dirty ? !$error : null;
      },
      countDownChanged(alertCountdown) {
        this.alertCountdown = alertCountdown
      },
      onSubmit() {
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          return;
        }
        this.changeStep();
      },
      changeStep(){
        this.$emit("nextStep", 2, this.form);
      }
    },
    created() {
    }
  }
</script>

<style>
  .login-page{
    width: 100% !important;
  }
  .login-panel{
    width: 35%;
    margin: auto;
  }
  .panel-heading{
    text-align: center;
  }
  .alert-div{
    margin-top: -130px;
  }
  .alert-div-padding{
    padding: 130px 0px;
  }
  .form-footer{
    padding-top: 10px;
  }
  .login-btn, .createAccount-link{
    display: block;
    text-align: center;
  }
  .form-header{
    color: #65bde1;
    text-align: center;
    margin-bottom: 50px;
    font-weight: bold;
  }
</style>