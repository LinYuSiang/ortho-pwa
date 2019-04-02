
<template>
     <v-container>
        <v-layout row class="text-xs-center">
        <v-flex sm3></v-flex>
            
        <v-card height="500px" ></v-card>
        <v-flex sm6 >
            <v-container style="position: relative;top: 10%;" class="text-xs-center">
            <v-card height="360px" >
                <v-card-title primary-title>
                <v-subheader >Login</v-subheader>
                </v-card-title>
                <v-form>
                <v-text-field prepend-icon="person" v-model="name" label="Username"></v-text-field>
                <v-text-field prepend-icon="lock" v-model="password" label="Password" type="password"></v-text-field>
                <v-card height="30px" color="transparent" flat=""></v-card>
                <v-card-actions style="top:13%">
                <v-btn @click="login" large block color="info">Login</v-btn>
                </v-card-actions>
                </v-form>
            </v-card>
            </v-container>
        </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  

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
        console.log("name:"+this.name,"password: "+this.password)
        if (this.name == this.vipname && this.password == this.vippass ) {
            let auth = true;
            
            // console.log(auth);
            if (auth) {
                this.$router.push('/home');
            }
            else
                alert('login failed')
        }
         else
                alert('login failed')
        
        
      }
    } 
  }
</script>