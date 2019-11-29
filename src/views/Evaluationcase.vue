<template>
  <v-container grid-list-sm fluid>
    <v-layout wrap>
      <v-flex sm2 offset-sm10>
        <v-text-field disabled v-model="surgery_date" label="手術日期" style="font-family:DFKai-sb;"></v-text-field>
      </v-flex>
      <v-flex sm2 offset-sm2>
        <v-text-field disabled v-model="name" label="姓名" style="font-family:DFKai-sb;"></v-text-field>
      </v-flex>
      <v-flex sm2 offset-sm1>
        <v-text-field
          disabled
          v-model="medical_record_no"
          label="病例號碼"
          style="font-family:DFKai-sb;"
        ></v-text-field>
      </v-flex>
      <v-flex sm2 offset-sm1>
        <v-text-field
          disabled
          v-model="birthday"
          label="出生年月日(YYYY-MM-DD)"
          style="font-family:DFKai-sb;"
        ></v-text-field>
      </v-flex>
      <v-flex sm8 offset-sm2>
        <v-text-field v-model="kneePain" disabled :items="kneePains" label="膝蓋疼痛多寡程度"></v-text-field>
      </v-flex>
      <v-flex sm2></v-flex>

      <v-flex sm8 offset-sm2>
        <v-text-field disabled v-model="jointragin" :items="jointragins" label="關節活動度 ROM "></v-text-field>
      </v-flex>
      <v-flex sm2></v-flex>

      <v-flex sm8 offset-sm2>
        <v-text-field
          disabled
          v-model="Anteroposterior"
          :items="Anteroposteriors"
          label="Antero-posterior 前後穩定度"
        ></v-text-field>
      </v-flex>
      <v-flex sm2></v-flex>

      <v-flex sm8 offset-sm2>
        <v-text-field
          disabled
          v-model="Mediolateral"
          :items="Mediolaterals"
          label=" Mediolateral 內外側穩定度"
        ></v-text-field>
      </v-flex>
      <v-flex sm2></v-flex>

      <v-flex sm8 offset-sm2>
        <v-text-field
          disabled
          v-model="varusvalgus"
          :items="varusvalguses"
          label=" 關節力線 (解剖軸線) varus & valgus"
        ></v-text-field>
      </v-flex>
      <v-flex sm2></v-flex>

      <v-flex sm8 offset-sm2>
        <v-text-field
          disabled
          v-model="Flexioncontracture"
          :items="Flexioncontractures"
          label="彎曲攣縮 Flexion contracture (如果有的話)"
        ></v-text-field>
      </v-flex>
      <v-flex sm2></v-flex>

      <v-flex sm8 offset-sm2>
        <v-text-field
          disabled
          v-model="extensionlag"
          :items="extensionlags"
          label="伸直延遲 (extension lag) (如果有的話)"
        ></v-text-field>
      </v-flex>

      <v-flex sm10 offset-sm1>
        <v-subheader>請問您最近兩星期內，評估之膝關節，最痛的時候的疼痛程度為何? (0~10分)</v-subheader>
        <v-card-text>
          <v-slider thumb-label="always" step="1" disabled v-model="pains" :max="10"></v-slider>
        </v-card-text>
      </v-flex>
      <v-flex style="margin-top:75px; font-size:22px" sm1>{{pains}}</v-flex>
      <v-btn color="primary" @click="$router.push({ name:'膝關節評估搜尋' })" large>上一頁</v-btn>
    </v-layout>
  </v-container>
</template>

<script>


import axios from "axios";

export default {

  data: () => ({
    name: "",
    surgery_date: "",
    medical_record_no: "",
    birthday: "",
    kneePains: [
      { text: "完全不疼痛", value: "50" },
      { text: "輕微的痛 (偶發性疼痛)", value: "45" },
      { text: "輕微的痛 ( 僅行走樓梯時感疼痛)", value: "40" },
      { text: "輕微的痛  (步行及行走樓梯時感疼痛)", value: "30" },
      { text: "中度疼痛 (偶爾)", value: "20" },
      { text: "中度疼痛 (持續性的感到疼痛)", value: "10" },
      { text: "嚴重疼痛", value: "0" }
    ],
    kneePain: "輕微的痛 (偶發性疼痛)",
    jointragins: [
      { text: "0~5度", value: "1" },
      { text: "6~10度", value: "2" },
      { text: "11~15度", value: "3" },
      { text: "16~20度", value: "4" },
      { text: "21~25度", value: "5" },
      { text: "26~30度", value: "6" },
      { text: "31~35度", value: "7" },
      { text: "36~40度", value: "8" },
      { text: "41~45度", value: "9" },
      { text: "46~50度", value: "10" },
      { text: "51~55度", value: "11" },
      { text: "56~60度", value: "12" },
      { text: "61~65度", value: "13" },
      { text: "66~70度", value: "14" },
      { text: "71~75度", value: "15" },
      { text: "76~80度", value: "16" },
      { text: "81~85度", value: "17" },
      { text: "86~90度", value: "18" },
      { text: "91~95度", value: "19" },
      { text: "96~100度", value: "20" },
      { text: "101~105度", value: "21" },
      { text: "106~110度", value: "22" },
      { text: "111~115度", value: "23" },
      { text: "116~120度", value: "24" },
      { text: "121~125度", value: "25" }
    ],
    jointragin: "",
    Anteroposteriors: [
      { text: "< 5mm", value: "10" },
      { text: "5-10mm ", value: "5" },
      { text: ">10 mm ", value: "0" }
    ],
    Anteroposterior: null,
    Mediolaterals: [
      { text: "< 5度", value: "15" },
      { text: "6~9度 ", value: "10" },
      { text: "10~14度 ", value: "5" },
      { text: ">15度 ", value: "0" }
    ],
    Mediolateral: "",
    varusvalgus: "",
    varusvalguses: [
      { text: "0度", value: "-15" },
      { text: "1度", value: "-12" },
      { text: "2度", value: "-9" },
      { text: "3度", value: "-6" },
      { text: "4度", value: "-3" },
      { text: "5~10度", value: "0" },
      { text: "11度", value: "-3" },
      { text: "12度", value: "-6" },
      { text: "13度", value: "-9" },
      { text: "14度", value: "-12" },
      { text: "15度", value: "-15" },
      { text: "15度以上", value: "-20" }
    ],
    Flexioncontractures: [
      { text: "5~10度", value: "-2" },
      { text: "10~15度 ", value: "-5" },
      { text: "16~20度 ", value: "-10" },
      { text: ">20度 ", value: "-15" },
      { text: "無", value: "0" }
    ],
    Flexioncontracture: "",
    extensionlag: "",
    extensionlags: [
      { text: "<10度", value: "-5" },
      { text: "10~20度 ", value: "-10" },
      { text: ">20度 ", value: "-15" },
      { text: "無", value: "0" }
    ],
    pains: "",
    toal: "",
    kneePainsnumber: null,
    jointraginsnumber: null,
    Anteroposteriorsnumber: null,
    Mediolateralsnumber: null,
    varusvalgusesnumber: null,
    Flexioncontracturesnumber: null,
    extensionlagsnumber: null,
    kneePainstext: null,
    jointraginstext: null,
    Anteroposteriorstext: null,
    Mediolateralstext: null,
    varusvalgusestext: null,
    Flexioncontracturestext: null,
    extensionlagstext: null
  }),

  created: function() {
    console.log(this.$route.params.msg);
    axios
      .get(
        `http://211.23.17.100:9997/api/knee-evaluation/${this.$route.params.msg}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: ` Bearer ${localStorage.item}`
          }
        }
      )
      .then(({ data }) => {
        console.log(data);
        this.name = data.kneeEvaluation.name;
        this.surgery_date = data.kneeEvaluation.surgery_date;
        this.medical_record_no = data.kneeEvaluation.medical_record_no;
        this.birthday = data.kneeEvaluation.birthday;
        this.kneePain = data.kneeEvaluation.knee_pain;
        this.jointragin = data.kneeEvaluation.joint_range;
        this.Anteroposterior = data.kneeEvaluation.antero_posterior;
        this.Mediolateral = data.kneeEvaluation.medio_lateral;
        this.varusvalgus = data.kneeEvaluation.varus_valgus;
        this.Flexioncontracture = data.kneeEvaluation.flexion_contracture;
        this.extensionlag = data.kneeEvaluation.extension_lag;
        this.pains = data.kneeEvaluation.pains;
        this.toal = data.kneeEvaluation.toal;
      })
      .catch(({ data }) => {
        console.log(data);
      });
  },
  methods: {
    text: function() {
      this.toal =
        parseInt(this.jointragin) +
        parseInt(this.kneePain) +
        parseInt(this.Anteroposterior) +
        parseInt(this.Mediolateral) +
        parseInt(this.varusvalgus) +
        parseInt(this.Flexioncontracture) +
        parseInt(this.extensionlag);

      console.log(this.toal);
    }
  }
};
</script>
