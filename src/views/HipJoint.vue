<template>
 
  <v-container grid-list-sm fluid>
    <v-layout wrap>
         <v-flex sm2 offset-sm10>
        <date-picker :date.sync="date" label="手術日期"/>
      </v-flex>

      <v-flex sm3>
        <v-text-field v-model="name" label="姓名"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="id" label="病例號碼"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="type" :items="types" label="名稱"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-text-field ref="typeText" v-model="typeText" label="其他" :disabled="type !== 'others'"></v-text-field>
      </v-flex>

      <v-flex sm2>
        <v-select v-model="height" :items="Array.from(Array(251).keys())" label="身高" suffix="cm"></v-select>
      </v-flex>
      <v-flex sm2>
        <v-select v-model="weight" :items="Array.from(Array(151).keys())" label="體重" suffix="kg"></v-select>
      </v-flex>
      <v-flex sm2>
        <v-select v-model="age" :items="Array.from(Array(121).keys())" label="年齡" suffix="歲"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="gender" :items="['男', '女']" label="性別"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="leg" :items="['左', '右']" label="左右腳"></v-select>
      </v-flex>

      <v-flex sm3>
        <v-text-field v-model="Primary" label="Primary"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="Revision" label="Revision"></v-text-field>
      </v-flex>
      <v-flex sm6>
        <v-text-field v-model="reason" label="原因"></v-text-field>
      </v-flex>

      <v-flex sm3>
        <v-subheader>Preoperative Date：</v-subheader>
      </v-flex>
      <v-flex sm2>
        <v-select v-model="diagnosis" :items="diagnosises" label="診斷"></v-select>
      </v-flex>
      <v-flex sm2>
        <v-text-field
          ref="AVNFicatIIIText"
          v-model="AVNFicatIIIText"
          label="AVN Ficat III"
          :disabled="diagnosis !== 'AVN Ficat III'"
        ></v-text-field>
      </v-flex>
      <v-flex sm2>
        <v-text-field
          ref="AVNFicatIVText"
          v-model="AVNFicatIVText"
          label="AVN Ficat IV"
          :disabled="diagnosis !== 'AVN Ficat IV'"
        ></v-text-field>
      </v-flex>
      <v-flex sm2>
        <v-text-field
          ref="diagnosisText"
          v-model="diagnosisText"
          label="其他"
          :disabled="diagnosis !== 'others'"
        ></v-text-field>
      </v-flex>

      <v-flex sm3 offset-sm3>
        <v-select v-model="disease" :items="diseases" label="Medical problem or other underlying disease"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-text-field
          ref="diseaseText"
          v-model="diseaseText"
          label="其他"
          :disabled="disease !== 'others'"
        ></v-text-field>
      </v-flex>
      <v-flex sm3></v-flex>

      <v-flex sm3>
        <v-subheader>Prosthesis：</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="type1" :items="types1" label="Type"></v-select>
      </v-flex>
       <v-flex sm3>
        <v-text-field
          ref="type1Text"
          v-model="type1Text"
          label="其他"
          :disabled="type1 !== 'others'"
        ></v-text-field>
      </v-flex>
      <v-flex sm3></v-flex>

      <v-flex sm1>
        <v-subheader >A：</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-text-field v-model="cupsize" label="Cup size"></v-text-field>
      </v-flex>
      <v-flex sm4>
        <v-text-field v-model="cupreamingdiameter" label="Cup reaming diameter"></v-text-field>
      </v-flex>
      <v-flex sm3></v-flex>

      <v-flex sm4 offset-sm1>
        <v-select v-model="screw" :items="Array.from(Array(251).keys())" label="Screw number"></v-select>
      </v-flex>
      <v-flex sm4>
        <v-text-field v-model="cupAngle" label="Cup Angle"></v-text-field>
      </v-flex>
      <v-flex sm3></v-flex>

      <v-flex sm5 offset-sm1>
        <v-text-field v-model="AspecialConditions" label="其他特殊情況"></v-text-field>
      </v-flex>
      <v-flex sm6></v-flex>
      
      <v-flex sm1>
        <v-subheader >B：</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select v-model="Head" :items="Array.from(Array(251).keys())" label="Head size"></v-select>
      </v-flex>
       <v-flex sm7></v-flex>

      <v-flex sm1>
        <v-subheader >C：</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select v-model="Neck" :items="Array.from(Array(251).keys())" label="Neck size"></v-select>
      </v-flex>
       <v-flex sm7></v-flex>

      <v-flex sm1>
        <v-subheader >D：</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select v-model="Stem" :items="Array.from(Array(251).keys())" label="Stem size"></v-select>
      </v-flex>
      <v-flex sm4>
        <v-text-field v-model="reamingDiameter" label="Reaming Diameter"></v-text-field>
      </v-flex>
      <v-flex sm3></v-flex>

      <v-flex sm1>
        <v-subheader >E：</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-text-field v-model="Cemented" label="Cemented"></v-text-field>
      </v-flex>
      <v-flex sm4>
        <v-text-field v-model="Cementless" label="Cementless"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="EspecialConditions" label="其他特殊情況"></v-text-field>
      </v-flex>

      <v-flex sm1>
        <v-subheader >F：</v-subheader>
      </v-flex>
       <v-flex sm3>
        <v-select v-model="Bonegraft" :items="Bonegrafts" label="Bone graft"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-text-field
          ref="yesText"
          v-model="yestText"
          label="YES"
          :disabled="Bonegraft !== 'yes'"
        ></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field
          ref="noText"
          v-model="noText"
          label="NO"
          :disabled="Bonegraft !== 'no'"
        ></v-text-field>
      </v-flex>
      <v-flex sm2></v-flex>
      
       <v-flex sm3>
        <v-subheader >Operative Data</v-subheader>
      </v-flex>
       <v-flex sm3>
        <v-select v-model="Apporach" :items="Apporachs" label="Apporach"></v-select>
      </v-flex>
      <v-flex sm2>
        <v-text-field
          ref="AnteriorLateralText"
          v-model="AnteriorLateralText"
          label="Anterior Lateral"
          :disabled="Apporach !== 'Anterior Lateral'"
        ></v-text-field>
      </v-flex>
      <v-flex sm2>
          <v-text-field
            ref="PosteriorLaterallText"
            v-model="PosteriorLaterallText"
            label="Posterior Lateral"
            :disabled="Apporach !== 'Posterior Lateral'"
          ></v-text-field>
      </v-flex>
       <v-flex sm2>
          <v-text-field
            ref="type2Text"
            v-model="type2Text"
            label="其他"
            :disabled="Apporach !== 'others'"
          ></v-text-field>
      </v-flex>
        
      <v-flex sm3 offset-sm3>
        <v-select v-model="Minimally" :items="['YES', 'NO']" label="微創"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="Woundlength" :items="Array.from(Array(251).keys())" label="傷口長度" suffix="cm"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="operationtime" :items="Array.from(Array(251).keys())" label="手術時間" suffix="hr"></v-select>
      </v-flex>

      <v-flex sm3 offset-sm3>
        <v-select v-model="Calcarcrack" :items="['YES', 'NO']" label="Calcar crack"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="Diaphysealfracture" :items="['YES', 'NO']" label="Diaphyseal fracture "></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="Management" :items="['YES', 'NO']" label="Management"></v-select>
      </v-flex>

      <v-flex sm3 offset-sm3>
        <v-select v-model="Recovery" :items="Recoveries" label="術後會恢復室X光片"></v-select>
      </v-flex>
      <v-flex sm3>
          <v-text-field
            ref="RecoveryText"
            v-model="RecoveryText"
            label="特殊其他"
            :disabled="Recovery !== 'special condition'"
          ></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="feet" :items="['YES', 'NO']" label="長短腳"></v-select>
      </v-flex>
       <v-flex sm3 offset-sm3>
        <v-text-field v-model="complication" label="併發症"></v-text-field>
      </v-flex>


    </v-layout>
  </v-container>
</template>
<script>
import DatePicker from "../components/DatePicker";

export default {
  name: "hipjoint",
  components: {
    DatePicker
  },
  data: () => ({
   date: "",
    name: "",
    id: "",
    types: ["OA", "RA", "SONK", "PVNS", { text: "其他", value: "others" }],
    type: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
    leg: "",
    Primary: "",
    Revision: "",
    reason: "",
    diagnosises: ["OA(非DDH)","DDH with secondary OA","High riding DDH","AS","PVNS","Traumatic OA","RA","Old septic hip","Tumor",{text:"AVN Ficat III" ,value:"AVN Ficat III"},{text:"AVN Ficat IV" ,value:"AVN Ficat IV"}, { text: "其他", value: "others" }],
    diagnosis: "",
    diagnosisText: "",
    AVNFicatIIIText: "",
    AVNFicatIVText: "",
    disease: "",
    diseases: ["HTN","DM","CVA","COPD","SLER","RA","Asthma","Ratiation","喝酒","類固醇" ,{text:"其他" ,value:"others"}],
    diseasesText: "",
    type1:"",
    types1:["Securfit","Trident(ceramic)","AML","Versys",{text:"其他" ,value:"others"}],
    type1Text:"",
    cupsize: "",
    cupreamingdiameter:"",
    screw:"",
    cupAngle:"",
    AspecialConditions:"",
    Head:"",
    Neck:"",
    Stem:"",
    reamingDiameter:"",
    Cemented:"",
    Cementless:"",
    EspecialConditions:"",
    Bonegraft:"",
    Bonegrafts:[{text:"YES" ,value:"yes"} ,{text:"NO" ,value:"no"}],
    yesText:"",
    notText:"",
    Apporach:"",
    Apporachs:[{text:"Anterior Lateral" ,value:"Anterior Lateral"},{text:"Posterior Lateral" ,value:"Posterior Lateral"} ,{text:"其他" ,value:"others"}],
    AnteriorLateralText:"",
    PosteriorLaterallText:"",
    Minimally:"",
    type2Text:"",
    Woundlength:"",
    operationtime:"",
    Diaphysealfracture:"",
    Management:"",
    Recovery:"",
    Recoveries:["很好",{text:"特殊狀況",value:"special condition"}],
    RecoveryText:"",
    feet:"",
    complication:"",









  }),

  watch: {
    type(type) {
      if (type === "others") {
        this.$nextTick(this.$refs.typeText.focus);
      }
    },
    diagnosis(diagnosis) {
      if (diagnosis === "AVN Ficat III") {
        this.$nextTick(this.$refs.AVNFicatIIIText.focus);
      }
      if (diagnosis === "AVN Ficat IV") {
        this.$nextTick(this.$refs.AVNFicatIVText.focus);
      }
      if (diagnosis === "others") {
        this.$nextTick(this.$refs.diagnosisText.focus);
      }
    },
    disease(disease) {
      if (disease === "others") {
        this.$nextTick(this.$refs.diseaseText.focus);
      }
    },
    type1(type1) {
      if (type1 === "others") {
        this.$nextTick(this.$refs.type1Text.focus);
      }
    },
    Bonegraft(Bonegraft) {
      if (Bonegraft === "no") {
        this.$nextTick(this.$refs.noText.focus);
      }
    },
    Apporach(Apporach) {
      if (Apporach === "Anterior Lateral") {
        this.$nextTick(this.$refs.AnteriorLateralText.focus);
      }
      if (Apporach === "Posterior Lateral") {
        this.$nextTick(this.$refs.PosteriorLaterallText.focus);
      }
      if (Apporach === "others") {
        this.$nextTick(this.$refs.type2Text.focus);
      }
    },
    Recovery(Recovery) {
      if (Recovery === "special condition") {
        this.$nextTick(this.$refs.RecoveryText.focus);
      }
    },
  }
};

</script>