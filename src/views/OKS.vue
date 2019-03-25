<template>
 <v-container grid-list-sm fluid>
    <v-layout wrap>
      <v-flex sm2 offset-sm10>
        <date-picker :date.sync="date" label="今天日期"/>
      </v-flex>

      <v-flex sm7>
        <v-select v-model="side" :items="['左邊', '右邊', '左右兩邊']" label="你正接受治療的受影響關節是位於身體的哪一邊？"></v-select>
      </v-flex>
      <v-flex sm5></v-flex>

      <v-flex sm12>
        <v-subheader>如果你說「左右兩邊」，請在第一次填寫問卷時根據右面關節的情況回答問題。請在第二次填寫問卷時根據左面關節的情況回答問題。</v-subheader>
      </v-flex>

      <v-flex sm12>
        <h1>你膝蓋的問題。</h1>
      </v-flex>

      <v-flex sm4 offset-sm8>
        <v-subheader>請為每條問題選一個選項。</v-subheader>
      </v-flex>

      <v-flex sm12>
        <v-select v-model="kneepain" :items="['無', '非常輕微', '輕微','中度','嚴重']" label="1.	在過去4週…   你會如何形容你通常感到的膝蓋痛楚？"></v-select>
      </v-flex>

      <v-flex sm12>
        <v-select v-model="clean" :items="['完全沒有困難', '很少有困難', '有中度困難','有極大困難','不可能做到']" label="2.  在過去4週…   	你有否因為你的膝蓋而難以為自己清潔和抹乾自己（全身）？"></v-select>
      </v-flex>
   
      <v-flex sm12>
        <v-select v-model="transport" :items="['完全沒有困難', '很少有困難', '有中度困難','有極大困難','不可能做到']" label="3.  在過去4週…   	你有否因為你的膝蓋而難以進出車輛或使用公共交通工具？（不論哪一項）"></v-select>
      </v-flex>

      <v-flex sm12>
        <v-select v-model="walk" :items="['30分鐘', '16至30分鐘', '5至15分鐘','只能在屋內步行','完全不能步行/一步行便感到嚴重痛楚']" label="4.  在過去4週…		你在出現嚴重膝關節痛楚前，你可以步行多久？（不論有否需要使用拐杖）"></v-select>
      </v-flex>
      
      <v-flex sm12>
        <v-select v-model="standpain" :items="['完全沒有痛楚', '輕微痛楚', '中度痛楚','非常痛楚','無法忍受的痛楚']" label="5. 	在過去4週…		你在用餐後（坐著用餐）從椅子站起來時，因為膝關節而感到多少痛楚？"></v-select>
      </v-flex>

      <v-flex sm12>
        <v-select v-model="pain1" :items="['很少/從不', '有時候，或只是在初期', '經常，不只是在初期','大部分時間','所有時間']" label="6. 	在過去4週…		你是否因為你的膝蓋而要一拐一拐地走路？"></v-select>
      </v-flex>

      <v-flex sm12>
        <v-select v-model="pain2" :items="['能，很容易', '有很少困難', '有中度困難','有極大困難','不可能做到']" label="7. 	在過去4週…		你能否在跪下之後站起來？"></v-select>
      </v-flex>

      <v-flex sm12>
        <v-select v-model="pain3" :items="['沒有', '只有一晚或兩晚', '有幾晚','大部分夜晚','每一晚']" label="8. 	在過去4週…		當你晚上在床上睡覺時，你曾否受你的膝蓋痛楚所困擾？"></v-select>
      </v-flex> 

      <v-flex sm12>
        <v-select v-model="pain4" :items="['完全沒有影響', '輕微影響', '中度影響','很大影響','完全影響']" label="9. 	在過去4週…		你的膝蓋痛楚對你平時的工作（包括家務）影響有多大？"></v-select>
      </v-flex> 

      <v-flex sm12>
        <v-select v-model="pain5" :items="['很少/從不', '有時候，或只是在初期', '經常，不只是在初期','大部分時間','所有時間']" label="10. 	在過去4週…		你曾否感到你膝關節突然「乏力」或不能支撐你的體重？  "></v-select>
      </v-flex>

      <v-flex sm12>
        <v-select v-model="pain6" :items="['能，很容易', '有很少困難', '有中度困難','有極大困難','不可能做到']" label="11. 	在過去4週…		你能否自己進行家居購物？  "></v-select>
      </v-flex>

      <v-flex sm12>
        <v-select v-model="pain7" :items="['能，很容易', '有很少困難', '有中度困難','有極大困難','不可能做到']" label="12. 	在過去4週…		你可否自己走下一層樓的樓梯？  "></v-select>
      </v-flex>

      <v-flex sm12>
        <v-subheader>最後，請查看你已經回答每一條問題。謝謝。</v-subheader>
      </v-flex> 
  </v-layout>
 </v-container>
</template>

<script>
import DatePicker from "../components/DatePicker";

export default {
  name: "oks",
  components: {
    DatePicker
  },
  data: () => ({
    date: "",
    side: "",
    kneepain: "",
    clean: "",
    transport: "",
    walk: "",
    pain1: "",
    pain2: "",
    pain3: "",
    pain4: "",
    pain5: "",
    pain6: "",
    pain7: "",
  })
};
</script>
