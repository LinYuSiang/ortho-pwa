
<template>
     <v-container>
        <v-layout row class="text-xs-center">
        <v-flex sm3></v-flex>
            
        <v-card height="400px" ></v-card>
        <v-flex sm6 >
            <v-container style="position: relative;top: 10%;" class="text-sm-center">
            <v-card height="300px" >
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Doctor Login</v-toolbar-title>
                </v-toolbar>
                <v-form>
                    <v-card height="20px" color="transparent" flat=""></v-card>
                    <v-text-field prepend-icon="person" v-model="name" label="Username" style="width:97%"></v-text-field>
                    <v-text-field prepend-icon="lock" v-model="password" label="Password" type="password" style="width:97%"></v-text-field>
                    <v-card height="30px" color="transparent" flat=""></v-card>
                    <v-card-actions style="top:13%">
                        <v-spacer></v-spacer>
                         <v-btn @click="$router.push({name:'訪客登入'})" color="info">病人查詢</v-btn>
                        <v-btn @click="login" color="info">Login</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
            </v-container>
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import router from '../router';
  import axios from 'axios';
  export default {
    
   
    data :()=>({
        name:"",
        password:"",
    }),
   
    props: ['loggedIn'],
    methods:{
      login(){
          const vm = this;
          axios.post('http://localhost:8000/api/auth/login', {
              account: this.name,
              password: this.password
          }, {
              headers: {
                  Accept: 'application/json'
              }
              
          })
            .then(function (response) {
                localStorage.setItem("item", response.data.token);
                vm.$emit('update:loggedIn', true);
                router.push('/home');
            })
            .catch(function(response){
                 console.log(response) 
                 alert('login failed')
            })
      }
    } 
  }

</script>
