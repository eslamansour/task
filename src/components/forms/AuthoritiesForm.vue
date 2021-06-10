<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-container>
        <b-row>
          <b-col lg="12" md="12">
            <h5 class="form-header">بيانات المسئولين</h5>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-adminName" label="اسم المسئول" label-for="form-adminName">
              <b-form-input
                id="form-adminName"
                name="form-adminName"
                v-model="$v.form.adminName.$model"
                :state="validateState('adminName')"
                aria-describedby="input-adminName"
              ></b-form-input>
              <b-form-invalid-feedback id="input-adminName" v-if='!$v.form.adminName.required'>
                اسم المسئول مطلوب
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-adminRole" label="منصب المسئول" label-for="form-adminRole">
              <b-form-input
                id="form-adminRole"
                name="form-adminRole"
                v-model="$v.form.adminRole.$model"
                :state="validateState('adminRole')"
                aria-describedby="input-adminRole"
              ></b-form-input>
              <b-form-invalid-feedback id="input-adminRole" v-if='!$v.form.adminRole.required'>
                منصب المسئول مطلوب
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-adminPhone" label="رقم الجوال" label-for="form-adminPhone">
              <vue-country-code @onSelect="adminPhoneSelect"></vue-country-code>
              <b-form-input
                class="phonenumber-textbox"
                id="form-adminPhone"
                name="form-adminPhone"
                v-model="$v.form.adminPhone.$model"
                :state="validateState('adminPhone')"
                aria-describedby="input-adminPhone"
                type="number"
              ></b-form-input>
              <b-form-invalid-feedback id="input-adminPhone" v-if='!$v.form.adminPhone.required'>
                رقم الجوال مطلوب
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="12">
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-supervisorName" label="اسم المفوض بالتواصل" label-for="form-supervisorName">
              <b-form-input
                id="form-supervisorName"
                name="form-supervisorName"
                v-model="$v.form.supervisorName.$model"
                :state="validateState('supervisorName')"
                aria-describedby="input-supervisorName"
              ></b-form-input>
              <b-form-invalid-feedback id="input-supervisorName" v-if='!$v.form.supervisorName.required'>
                اسم المفوض مطلوب
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-supervisorRole" label="منصب المفوض" label-for="form-supervisorRole">
              <b-form-input
                id="form-supervisorRole"
                name="form-supervisorRole"
                v-model="$v.form.supervisorRole.$model"
                :state="validateState('supervisorRole')"
                aria-describedby="input-supervisorRole"
              ></b-form-input>
              <b-form-invalid-feedback id="input-supervisorRole" v-if='!$v.form.supervisorRole.required'>
                منصب المفوض مطلوب
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-supervisorPhone" label="رقم هاتف المفوض" label-for="form-supervisorPhone">
              <vue-country-code @onSelect="supervisorPhoneSelect"></vue-country-code>
              <b-form-input
                class="phonenumber-textbox"
                id="form-supervisorPhone"
                name="form-supervisorPhone"
                v-model="$v.form.supervisorPhone.$model"
                :state="validateState('supervisorPhone')"
                aria-describedby="input-supervisorPhone"
                type="number"
              ></b-form-input>
              <b-form-invalid-feedback id="input-supervisorPhone" v-if='!$v.form.supervisorPhone.required'>
                رقم هاتف المفوض مطلوب
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="6" md="12">
            <b-form-group id="group-form-supervisorEmail" label="البريد الالكتروني" label-for="form-supervisorEmail">
              <b-form-input
                id="form-supervisorEmail"
                name="form-supervisorEmail"
                v-model="$v.form.supervisorEmail.$model"
                :state="validateState('supervisorEmail')"
                aria-describedby="input-supervisorEmail"
                type="email"
              ></b-form-input>
              <b-form-invalid-feedback id="input-supervisorEmail" v-if='!$v.form.supervisorEmail.required'>
                البريد الالكتروني مطلوب
              </b-form-invalid-feedback>
              <b-form-invalid-feedback id="input-email" v-if='!$v.form.supervisorEmail.email'>
                البريد الالكتروني غير صالح
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="12" md="12">
            <b-form-group id="group-form-description" label="ملاحظات" label-for="form-description">
              <b-form-textarea
                id="form-description"
                name="form-description"
                v-model="$v.form.description.$model"
                :state="validateState('description')"
                aria-describedby="input-description"
                rows="5"
              ></b-form-textarea>
              <b-form-invalid-feedback id="input-description" v-if='!$v.form.description.required'>
                الملاحظات مطلوبه
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col lg="12" md="12">
            <div class="form-footer">
              <b-button class="login-btn" type="submit" variant="primary"> طلب المنتج</b-button>
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
  import { required, email } from "vuelidate/lib/validators";

  export default {
    props: ['form'],
    mixins: [validationMixin],
    data() {
      return {
        alertCountdown: 0,
        alertType: '',
        alertText: '',
      }
    },
    validations: {
      form: {
        adminName: {
          required
        }, 
        adminRole: {
          required
        },
        adminPhone: {
          required
        },
        supervisorName: {
          required
        }, 
        supervisorRole: {
          required
        },
        supervisorPhone: {
          required
        },
        supervisorEmail: {
          required,
          email
        },
        description: {
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
        this.nextStep();
      },
      nextStep(){
        this.$emit("submitForm", this.form);
      },
      adminPhoneSelect({dialCode}) {
        this.form.adminPhoneCode = dialCode;
      },
      supervisorPhoneSelect({dialCode}) {
        this.form.supervisorPhoneCode = dialCode;
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
  .phonenumber-textbox{
    display: inline !important;
    width: 86% !important;
  }
</style>