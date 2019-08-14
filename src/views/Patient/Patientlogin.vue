<template>
     <v-container>
        <v-layout row class="text-xs-center">
        <v-flex sm3></v-flex>
            
        <v-card height="400px" ></v-card>
        <v-flex sm6 >
            <v-container style="position: relative;top: 10%;" class="text-sm-center">
            <v-card height="300px" >
                <v-toolbar dark color="teal">
                    <v-toolbar-title>病人查詢</v-toolbar-title>
                </v-toolbar>
                <v-form>
                    <v-card height="20px" color="transparent" flat=""></v-card>
                    <v-text-field prepend-icon="person" v-model="medical_record_no" label="病歷號碼" style="width:97%"></v-text-field>
                    <v-card height="98px" color="transparent" flat=""></v-card>
                    <v-card-actions style="top:13%">
                        <v-spacer></v-spacer>
                          <v-btn @click="$router.push({name:'醫師登入'})" dark color="teal">醫師登入</v-btn>
                        <v-btn @click="patientlogin" dark color="teal">Login</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
            </v-container>
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import router from '../../router';
  import axios from 'axios';
  export default {
    
   
    data :()=>({
        medical_record_no:"",
    }),
   
    props: ['loggedIn'],
    methods:{
      patientlogin(){
        //   const vm = this;
          axios.post('https://web.nutc-imac.com:9997/api/auth/patient/login', {
              medical_record_no: this.medical_record_no,
            
          }, {
              headers: {
                  Accept: 'application/json'
              }
          })
            .then(function (response) {
                localStorage.setItem("item", response.data.access_token);
                console.log(localStorage.item);
                
                
                // vm.$emit('update:loggedIn', true);
                router.push('/Patient/Patienthome');
            })
            .catch(function(response){
                 console.log(response) 
                 alert('login failed')
            })
      }
    } 
    
  }

</script>
