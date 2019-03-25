<template>
  <v-container grid-list-sm fluid>
    <v-layout wrap>
      <v-flex sm3 offset-sm3>
        <v-btn  color="info" @click="$router.push({ name:'創建' })"  large >創建 </v-btn>
      </v-flex>
      <v-flex sm3 offset-sm2>
        <v-btn  color="info" @click="$router.push({ name:'查詢' })"  large >查詢 </v-btn>
      </v-flex>
    



    </v-layout>
  </v-container>
</template>

<script>
  

  export default {
    name:"home",
    data :()=>({
   
    })
  }
</script>