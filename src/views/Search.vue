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

      <v-flex sm4 offset-sm2 >
        <v-data-table 
        :headers="headers"
        :items="desserts"
        class="elevation-1 "
        v-slot:items="props"
        hide-actions
        hide-header
        >
          <template v-if="search == props.item.number && props.item.joint == '髖關節' " >
            <td>{{ props.item.name }}</td>
            <td class="text-sm" >{{ props.item.joint }}</td>
            <td class="text-sm">{{ props.item.time }}</td>  
            <td class="text-sm">{{ props.item.number }}</td>  
          </template>
        </v-data-table>
      </v-flex>
      <v-flex sm4>
        <v-data-table 
        :headers="headers"
        :items="desserts"
        class="elevation-1 "
        v-slot:items="props"
        hide-actions
        hide-header
        >
          <template  v-if="search == props.item.number && props.item.joint == '膝關節'" >
            <td>{{ props.item.name }}</td>
            <td class="text-sm" >{{ props.item.joint }}</td>
            <td class="text-sm">{{ props.item.time }}</td>  
            <td class="text-sm">{{ props.item.number }}</td>  
          </template>
        </v-data-table>
      </v-flex>
      

    </v-layout>
  </v-container>
</template>

<script>


  export default {
    name:"Search",
    data :()=>({
      search:"",
      arr:[{num:'1'}],
      headers: [
        {
          text: '病患名稱',
          align: 'left',
          value: 'name'
        },
        { text: '資料表', value: 'kneejoint' },
        { text: '紀錄時間', value: 'time' },
        { text: '病歷號碼', value: 'number' },
      ],
      desserts: [
        {
          number:'123',
          name: 'A Yogurt',
          joint: '髖關節',
          time: '2016/3/19',
        },
                  {
          number:'123',       
          name: 'B Yogurt',
          joint:  '膝關節',
          time: '2016/6/1',
        },          {
          number:'123',
          name: 'C Yogurt',
          joint:  '髖關節',
          time: '2016/4/12',
        },          {
          number:'456',
          name: 'D Yogurt',
          joint:  '膝關節',
          time: '2016/3/12',
        },          {
          number:'456',
          name: 'E Yogurt',
          joint:  '髖關節',
          time: '2016/3/16',
        },          {
          number:'456',
          name: 'F Yogurt',
          joint:  '膝關節',
          time: '2016/3/19',
        },          
      ] 
    }),
  }
  



</script>