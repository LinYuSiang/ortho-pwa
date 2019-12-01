<template>

  <v-app>
    <v-toolbar color="info"  >
      <v-toolbar-side-icon @click="drawer = !drawer" class="white--text" :loggedIn.sync="loggedIn"  v-if="loggedIn"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text font-weight-bold">{{ $route.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title :loggedIn.sync="loggedIn" v-if="loggedIn"  class="white--text font-weight-bold">歡迎admin</v-toolbar-title>
      <v-toolbar-items class="hidden-down">
        <v-btn :loggedIn.sync="loggedIn"  v-if="loggedIn"  color="white" flat @click="logout" >logout</v-btn>
      
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer  v-model="drawer" absolute temporary>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        
         <v-list-tile
          v-for="item in title"
          :key="item.title"
          @click="$router.push({ path: item.path })"
        >
        <v-list-tile-action>
         <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
       </v-list-tile>
      
          <v-list-tile
          v-for="item in search"
          :key="item.title"
          @click="$router.push({ path: item.path })"
        >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
       </v-list-tile>

       <v-list-group
        prepend-icon="create"
          value="true"
        >  
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>創建</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="$router.push({ path: item.path })"
        >
         <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title  v-text="item.title"></v-list-tile-title>   
        </v-list-tile>
         </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view :loggedIn.sync="loggedIn"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import router from "./router";
// import { log } from 'util';
export default {
  name: "App",
  data: () => ({
    drawer: null,
    status: "",
    loggedIn:localStorage.loggedIn == false,
    title:[ { title: "首頁", icon: "dashboard", path: "/home" }],
    search:[{
        title: "查詢", icon: "search", path:"/search"
      }],
    items: [
      
      {
        title: "人工膝關節置換術中測量",
        icon: "assignment",
        path: "/knee-joint"
      },
      {
        title: "人工髖關節置換術中測量",
        icon: "assignment",
        path: "/hip-joint"
      },
     
      {
        title: "Follow up",
        icon: "assignment",
        path: "/follow-up"
      },
      
    ]
  }),
  created:function() {
    if(localStorage.loggedIn == true)
    {
      this.loggedIn = true;
    }
  },
  watch: {
    loggedIn :(loggedIn) => {
      localStorage.loggedIn = loggedIn;
      console.log(localStorage.loggedIn);
      

    }
  },
  methods: {
    logout() {
      axios
        .post(
          "http://211.23.17.100:9997/api/auth/logout",
          {},
          {
            headers: {
              Authorization: ` Bearer ${localStorage.item}`
            }
          }
        )
        .then(() => {
          this.loggedIn = false;
          localStorage.item = "";
          router.push("/");
        });
    }
  }
};
</script>
