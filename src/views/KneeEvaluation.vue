<template>
  <v-container grid-list-sm fluid>
    <v-layout wrap>
      <v-flex sm2 offset-sm10>
        <date-picker :date.sync="surgery_date" label="手術日期" style="font-family:DFKai-sb;" />
      </v-flex>
       <v-flex sm2 offset-sm2>
        <v-text-field v-model="name"  label="姓名" style="font-family:DFKai-sb;" ></v-text-field>
      </v-flex>
      <v-flex sm2 offset-sm1>
        <v-text-field v-model="medical_record_no" label="病例號碼" style="font-family:DFKai-sb;"></v-text-field>
      </v-flex>
      <v-flex sm2 offset-sm1>
        <v-text-field v-model="birthday" label="出生年月日(YYYY-MM-DD)" style="font-family:DFKai-sb;"></v-text-field>
      </v-flex>
    <v-flex sm8 offset-sm2>
      <v-select v-model="kneePain" :items="kneePains" label="膝蓋疼痛多寡程度" ></v-select>
    </v-flex>
    <v-flex sm2></v-flex>

    <v-flex sm8 offset-sm2>
      <v-select v-model="jointragin" :items="jointragins" label="關節活動度 ROM " ></v-select>
    </v-flex>
    <v-flex sm2></v-flex>

    <v-flex sm8 offset-sm2>
      <v-select v-model="Anteroposterior" :items="Anteroposteriors" label="Antero-posterior 前後穩定度" ></v-select>
    </v-flex>
    <v-flex sm2></v-flex>

    <v-flex sm8 offset-sm2>
      <v-select v-model="Mediolateral" :items="Mediolaterals" label=" Mediolateral 內外側穩定度" ></v-select>
    </v-flex>
    <v-flex sm2></v-flex>

    <v-flex sm8 offset-sm2>
      <v-select v-model="varusvalgus" :items="varusvalguses" label=" 關節力線 (解剖軸線) varus & valgus" ></v-select>
    </v-flex>
    <v-flex sm2></v-flex>

    <v-flex sm8 offset-sm2>
      <v-select v-model="Flexioncontracture" :items="Flexioncontractures" label="彎曲攣縮 Flexion contracture (如果有的話)" ></v-select>
    </v-flex>
    <v-flex sm2></v-flex>

    <v-flex sm8 offset-sm2>
      <v-select v-model="extensionlag" :items="extensionlags" label="伸直延遲 (extension lag) (如果有的話)" ></v-select>
    </v-flex>
    <v-flex sm2></v-flex>

    <v-flex sm10 offset-sm1>
      <v-subheader>請問您最近兩星期內，評估之膝關節，最痛的時候的疼痛程度為何? (0~10分) </v-subheader>
        <v-card-text>
          <v-slider
          thumb-label="always"
          step="1"
          v-model="pains"
          :max="10"
          ></v-slider>
      </v-card-text>
    </v-flex>
    <v-flex sm1></v-flex>

    <v-btn @click="text" dark>總分</v-btn>

    <v-flex sm8 offset-sm2>
     {{toal}}
    </v-flex>
    <v-flex sm2></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DatePicker from "../components/DatePicker";


export default {
 components: {
    DatePicker
  },
  data: () => ({
    kneePains:[
      { text: "完全不疼痛", value: "50" },
      { text: "輕微的痛 (偶發性疼痛)", value: "45" },
      { text: "輕微的痛 ( 僅行走樓梯時感疼痛)", value: "40" },
      { text: "輕微的痛  (步行及行走樓梯時感疼痛)", value: "30" },
      { text: "中度疼痛 (偶爾)", value: "20" },
      { text: "中度疼痛 (持續性的感到疼痛)", value: "10" },
      { text: "嚴重疼痛", value: "0" },
    ],
    kneePain:0,
    jointragins:[
      { text: "0~5度", value: "1" },{ text: "6~10度", value: "2" },{ text: "11~15度", value: "3" },
      { text: "16~20度", value: "4" },{ text: "21~25度", value: "5" },{ text: "26~30度", value: "6" },
      { text: "31~35度", value: "7" },{ text: "36~40度", value: "8" },{ text: "41~45度", value: "9" },
      { text: "46~50度", value: "10" },{ text: "51~55度", value: "11" },{ text: "56~60度", value: "12" },
      { text: "61~65度", value: "13" },{ text: "66~70度", value: "14" },{ text: "71~75度", value: "15" },
      { text: "76~80度", value: "16" },{ text: "81~85度", value: "17" },{ text: "86~90度", value: "18" },
      { text: "91~95度", value: "19" },{ text: "96~100度", value: "20" },{ text: "101~105度", value: "21" },
      { text: "106~110度", value: "22" },{ text: "111~115度", value: "23" },{ text: "116~120度", value: "24" },
      { text: "121~125度", value: "25" },
    ],
    jointragin:0,
    Anteroposteriors:[
      { text: "< 5mm", value: "10" },
      { text: "5-10mm ", value: "5" },
      { text: ">10 mm ", value: "0" },
    ],
    Anteroposterior:0,
    Mediolaterals:[
      { text: "< 5度", value: "15" },
      { text: "6~9度 ", value: "10" },
      { text: "10~14度 ", value: "5" },
      { text: ">15度 ", value: "0" },
    ],
    Mediolateral:0,
    varusvalgus:0,
    varusvalguses:[
       { text: "0度", value: "-15" },{ text: "1度", value: "-12" },{ text: "2度", value: "-9" },
      { text: "3度", value: "-6" },{ text: "4度", value: "-3" },{ text: "5~10度", value: "0" },
      { text: "11度", value: "-3" },{ text: "12度", value: "-6" },{ text: "13度", value: "-9" },
      { text: "14度", value: "-12" },{ text: "15度", value: "-15" },{ text: "15度以上", value: "-20" },
    ],
    Flexioncontractures:[
      { text: "5~10度", value: "-2" },
      { text: "10~15度 ", value: "-5" },
      { text: "16~20度 ", value: "-10" },
      { text: ">20度 ", value: "-15" },
      { text: "無", value: "0" },
    ],
    Flexioncontracture:0,
    extensionlag:0,
    extensionlags:[
      { text: "<10度", value: "-5" },
      { text: "10~20度 ", value: "-10" },
      { text: ">20度 ", value: "-15" },
      { text: "無", value: "0" },
    ],
    pains:0,
    toal:0  ,
  }),
  methods:
  {
    text: function () { 
      this.toal = parseInt(this.jointragin) + parseInt(this.kneePain) + parseInt(this.Anteroposterior) + parseInt(this.Mediolateral)
      + parseInt(this.varusvalgus) + parseInt(this.Flexioncontracture) + parseInt(this.extensionlag)
      console.log(this.toal);
      
    }
  }

  
};
</script>
