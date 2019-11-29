<template>
  <v-container grid-list-sm >
    <v-layout wrap  >
      <v-flex sm3>
        
        <v-btn  style="width:173.19px; height:150px;font-size:18px;font-weight:bolder;" color="primary" @click="$router.push({ name:'創建knee' })"  large >創建 knee joint </v-btn>
      </v-flex>
      <!-- <v-flex sm></v-flex> -->
      <v-flex sm3>
        <v-btn style="width:173.19px; height:150px;font-size:18px;font-weight:bolder;" color="warning" dark @click="$router.push({ name:'創建hip' })"  large >創建 hip joint </v-btn>
      </v-flex>
      <!-- <v-flex sm1></v-flex> -->
       <v-flex sm3>
        <v-btn style="width:173.19px; height:150px;font-size:18px;font-weight:bolder;" color="error" dark @click="$router.push({ name:'牛津膝蓋評分' })"  large >牛津膝蓋評分 </v-btn>
      </v-flex>

      <v-flex sm3>
        <v-btn style="width:173.19px; height:150px;font-size:18px;font-weight:bolder;" color="teal" dark @click="$router.push({ name:'查詢' })"  large >查詢 </v-btn>
      </v-flex>
      <!-- <v-flex sm1></v-flex> -->
    <v-flex sm3>
        <v-btn style="width:173.19px; height:150px;font-size:18px;font-weight:bolder;margin-top:30px" color="cyan" dark @click="$router.push({ name:'膝關節評估創建' })"  large >膝關節評估創建</v-btn>
      </v-flex>

      <v-flex sm3>
        <v-btn style="width:173.19px; height:150px;font-size:18px;font-weight:bolder;margin-top:30px" color="cyan" dark @click="$router.push({ name:'膝關節評估搜尋' })"  large >膝關節評估搜尋  </v-btn>
      </v-flex>
    


    </v-layout>
  </v-container>
</template>

<script>
  

  export default {
    // name:"home",
    data :()=>({
   
    })
  }
</script>