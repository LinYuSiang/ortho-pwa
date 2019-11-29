<template>
  <v-container grid-list-md text-sm-center>
    <v-layout wrap>
      <v-flex sm8 offset-sm2>
        <v-card>
          <v-toolbar dark color="primary">
            <v-card-title class="title font-weight-regular">Search</v-card-title>
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
            <template v-slot:items="props">
              <tr @click="$router.push({ name:'膝關節評估' ,params:{msg:props.item.id} })">
                <td>{{ props.item.name }}</td>
                <td class="text">{{ props.item.joints }}</td>
                <td class="text">{{ props.item.created_at }}</td>
                <td class="text">{{ props.item.medical_record_no }}</td>
              </tr>
            </template>
            <template v-slot:no-results>
              <v-alert
                :value="true"
                color="error"
                icon="warning"
              >Your search for "{{ search }}" found no results.</v-alert>
            </template>
          </v-data-table>
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </v-card>
      </v-flex>
      <v-flex sm2></v-flex>

      <v-flex sm2 offset-sm2>
        <v-btn color="primary" @click="$router.push({ name:'首頁' })" large>上一頁</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
tbody {
  text-align: left;
}
</style>

<script>
import axios from "axios";
export default {
  data: () => ({
    name: "",
    search: "",
    joints: "",
    pagination: {},
    headers: [
      {
        text: "病患名稱",
        value: "name"
      },
      { text: "資料表", value: "joint" },
      { text: "紀錄時間", value: "created_at" },
      { text: "病歷號碼", value: "medical_record_no" }
    ],
    desserts: []
  }),
  created: function() {
    console.log(this.search);
    axios
      .get("http://211.23.17.100:8000/api/knee-evaluation", {
        params: {},
        headers: {
          Accept: "application/json",
          Authorization: ` Bearer ${localStorage.item}`
        }
      })
      .then(({ data }) => {
        var array1 = data.kneeEvaluation;
        array1.forEach(function(element) {
          element.joints = "膝疼痛指數";
        });

        this.desserts = data.kneeEvaluation;
        console.log(data.kneeEvaluation);

        this.pagination.totalItems = data.kneeEvaluation.length;
      })
      .catch(({ response }) => {
        console.log(response);
      });
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
  }
};
</script>