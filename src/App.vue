<template>
  <v-app>
    <v-toolbar color="info" >
      <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text font-weight-bold">{{ $route.name }}</v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
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
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    items: [
      { title: "首頁", icon: "dashboard", path: "/" },
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
        title: "牛津膝蓋評分",
        icon: "assignment",
        path: "/oks"
      },
      {
       title: "Fullow up",
       icon: "assignment",
       path: "/fullow-up"
      }
    ]

    
  })
  
 
};
</script>
