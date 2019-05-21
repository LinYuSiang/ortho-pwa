<template>
  <v-container grid-list-sm fluid>
    <v-layout wrap>
      <v-flex sm4 >
        <v-btn  color="info" @click="$router.push({ name:'創建knee' })"  large >創建 knee joint </v-btn>
      </v-flex>
      <!-- <v-flex sm></v-flex> -->
      <v-flex sm4>
        <v-btn style="width:173.19px" color="info" @click="$router.push({ name:'創建hip' })"  large >創建 hip joint </v-btn>
      </v-flex>
      <!-- <v-flex sm1></v-flex> -->
       <v-flex sm4>
        <v-btn style="width:173.19px" color="info" @click="$router.push({ name:'查詢' })"  large >查詢 </v-btn>
      </v-flex>
      <!-- <v-flex sm1></v-flex> -->
    



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