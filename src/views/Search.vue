<template>
  <v-container grid-list-sm fluid>
    <v-layout wrap>
      <v-flex sm6 offset-sm3>
        <v-toolbar color="white">
          <v-text-field
            hide-details
            prepend-icon="search"
            v-model="search"
            label="請輸入病歷號碼"
          ></v-text-field>
        </v-toolbar>
      </v-flex>

      <v-flex sm3></v-flex>

      <v-flex sm12></v-flex>

      <v-flex sm6 offset-sm3>
        <v-data-table 
        :headers="headers"
        :items="desserts"
        class="elevation-1 "
        
        >
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-sm" >{{ props.item.kneejoint }}</td>
            <td class="text-sm">{{ props.item.time }}</td>  
          </template>
        </v-data-table>
      </v-flex>
      <v-flex sm3></v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name:"Search",
    data :()=>({
      search:"",
      headers: [
        {
          text: '病患名稱',
          align: 'left',
          value: 'name'
        },
        { text: '資料表', value: 'kneejoint' },
        { text: '紀錄時間', value: 'time' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          kneejoint: '膝關節',
          time: '2016/3/19',
        },
                  {
          name: 'Frozen Yogurt',
          kneejoint:  '膝關節',
          time: '2016/6/1',
        },          {
          name: 'Frozen Yogurt',
          kneejoint:  '膝關節',
          time: '2016/4/12',
        },          {
          name: 'Frozen Yogurt',
          kneejoint:  '膝關節',
          time: '2016/3/12',
        },          {
          name: 'Frozen Yogurt',
          kneejoint:  '膝關節',
          time: '2016/3/16',
        },          {
          name: 'Frozen Yogurt',
          kneejoint:  '膝關節',
          time: '2016/3/19',
        },          
      ] 
    })
  }
</script>