<template>
  <v-container grid-list-md text-sm-center>
    <v-layout wrap>
      <v-flex sm8 offset-sm2>
        <v-card>
           <v-toolbar dark color="primary">
          <v-card-title class="title font-weight-regular">
            Search
            </v-card-title>
            <v-spacer></v-spacer>
            <v-text-field 
              color="dark"
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
              
            ></v-text-field>
            
           </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="desserts"
            hide-actions
            :pagination.sync="pagination"
            :search="search"
          >
          <template v-slot:items="props" >
            <tr @click="$router.push({ name:'膝關節病例' ,params:{msg:props.item.id} })">
              <td>{{ props.item.patient.name }}</td>
              <td class="text">{{ props.item.joints }}</td>
              <td class="text">{{ props.item.patient.created_at }}</td>
              <td class="text">{{ props.item.patient.medical_record_no }}</td>
            </tr>
          </template>
          <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </template>
        </v-data-table>
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </v-card>
      </v-flex>
      <v-flex sm2></v-flex>



   
  
      
        <v-flex sm2 offset-sm2>
          <v-btn  color="primary" @click="$router.push({ name:'首頁' })"  large >上一頁 </v-btn>
        </v-flex> 
      
      
      
    </v-layout>
  </v-container>
</template>
<style>
  tbody{
    text-align: left;
  }
</style>

<script>
import axios from 'axios';
export default {
  data: () => ({
    name:"",
    search: "",
    joints: "",
    pagination: {},
    headers: [
      {
        text: "病患名稱",
        value: "patient.name"
      },
      { text: "資料表", value: "joint" },
      { text: "紀錄時間", value: "patient.created_at" },
      { text: "病歷號碼", value: "patient.medical_record_no" }
    ],
    desserts: [],
  }),
  created: function() {
    
      console.log(this.search)
      axios.get('http://localhost:8000/api/knee-joint', {
          params:{

          }, headers: {
             Accept: "application/json",
            Authorization:` Bearer ${localStorage.item}`,
           

        }
      
          })
           .then(({ data }) => {
              
              var array1 = data.kneeJoints;
              array1.forEach(function(element) {
                element.joints = '膝關節'
              });
              console.log(data);
              this.desserts = data.kneeJoints;
              console.log(this.desserts);
              
              this.pagination.totalItems = data.kneeJoints.length;
            })
            .catch(({response}) =>{
                console.log(response);
                
            })
      
  },
  
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  },
  

  
};

</script>