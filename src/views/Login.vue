
<template>
     <v-container>
        <v-layout row class="text-xs-center">
        <v-flex sm3></v-flex>
            
        <v-card height="400px" ></v-card>
        <v-flex sm6 >
            <v-container style="position: relative;top: 10%;" class="text-sm-center">
            <v-card height="300px" >
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-form>
                    <v-card height="20px" color="transparent" flat=""></v-card>
                    <v-text-field prepend-icon="person" v-model="name" label="Username"></v-text-field>
                    <v-text-field prepend-icon="lock" v-model="password" label="Password" type="password"></v-text-field>
                    <v-card height="30px" color="transparent" flat=""></v-card>
                    <v-card-actions style="top:13%">
                        <v-spacer></v-spacer>
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
    name:"home",
    data :()=>({
        name:"",
        password:"",
        vipname:"vip123",
        vippass:"vip123",
        
        
    }),

     methods: {

      login(){
        //   axios.post('http://211.23.17.100:9997/api/auth/login', {
        //       account: 'admin',
        //       password: 'secret'
        //   })
        //   .then(({ data }) => {
        //       console.log(data)
        //   })
          axios.post('http://211.23.17.100:9997/api/auth/login', {
              account: this.name,
              password: this.password
          }, {
              headers: {
                  Accept: 'application/json'
              }
          })
            .then(function (response) {
                console.log(response.data.token);
                
                localStorage.setItem("item", response.data.token);
                // console.log(localStorage.item);
                router.push('/home');
            })
            .catch(function(response){
                 console.log(response) 
                 alert('login failed')
            })
            
      
        // if (this.name == this.vipname && this.password == this.vippass ) {
        //     let auth = true;
            
           
        //     if (auth) {
        //         this.$router.push('/home');
        //     }
        //     else
        //         alert('login failed')
        // }
        //  else
        //         alert('login failed')
        
        
      }
    } 
  }

</script>
