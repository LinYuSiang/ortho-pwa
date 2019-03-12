<template>
  <v-container id="input-usage" grid-list-xl fluid>
    <v-layout wrap>
      <v-flex sm4 offset-sm8>
        <date-picker class="sm4" :date.sync="date" label="手術日期"/>
      </v-flex>

      <v-flex sm3>
        <v-text-field v-model="name" label="姓名"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="id" label="病例號碼"></v-text-field>
      </v-flex>
      <v-flex sm6>
        <v-select v-model="type" :items="types" label="名稱"></v-select>
      </v-flex>

      <v-flex sm3>
        <v-text-field v-model="advanced" label="Advanced"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="valgus" :items="['YES', 'NO']" label="Valgus"></v-select>
      </v-flex>
      <v-flex sm5 offset-sm1>
        <v-text-field ref="typeText" v-model="typeText" label="其他" :disabled="type !== 'others'"></v-text-field>
      </v-flex>

      <v-flex sm3>
        <v-text-field v-model="UKA" label="UKA"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="primaryTKA" label="Primary TKA"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="revision" label="Revision"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="PAF" label="PAF"></v-text-field>
      </v-flex>

      <v-flex sm2>
        <v-text-field v-model="height" type="number" label="身高" suffix="cm"></v-text-field>
      </v-flex>
      <v-flex sm2>
        <v-text-field v-model="weight" type="number" label="體重" suffix="kg"></v-text-field>
      </v-flex>
      <v-flex sm2>
        <v-text-field v-model="age" type="number" label="年齡" suffix="歲"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="gender" :items="['男', '女']" label="性別"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="leg" :items="['左', '右']" label="左右腳"></v-select>
      </v-flex>

      <v-flex sm3>
        <v-select v-model="anesthesia" :items="anesthesias" label="麻醉"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-text-field
          ref="anesthesiaText"
          v-model="anesthesiaText"
          label="其他"
          :disabled="anesthesia !== 'others'"
        ></v-text-field>
      </v-flex>
      <v-flex sm6></v-flex>

      <v-flex sm2>
        <v-subheader>Pre-op:</v-subheader>
      </v-flex>
      <v-flex shrink>
        <v-subheader class="fill-height">ROM:</v-subheader>
      </v-flex>
      <v-flex shrink style="width: 45px">
        <v-text-field v-model="ROM[0]" class="mt-0" hide-details type="number"></v-text-field>
      </v-flex>
      <v-flex shrink>
        <v-subheader>to</v-subheader>
      </v-flex>
      <v-flex shrink style="width: 45px">
        <v-text-field v-model="ROM[1]" class="mt-0" hide-details type="number"></v-text-field>
      </v-flex>
      <v-flex>
        <v-subheader class="fill-height">degrees</v-subheader>
      </v-flex>

      <v-flex shrink offset-sm2>
        <v-select
          v-model="preOpPatellarTracking"
          :items="['Good', 'Subluxation']"
          label="Patellar tracking"
        ></v-select>
      </v-flex>
      <v-flex sm7></v-flex>

      <v-flex shrink offset-sm2>
        <v-text-field v-model="kneeScore" label="術前 Knee Score" type="number"></v-text-field>
      </v-flex>
      <v-flex sm6></v-flex>

      <v-flex shrink>
        <v-subheader class="fill-height">Approach:</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select v-model="approach" :items="approachs" label="名稱"></v-select>
      </v-flex>
      <v-flex sm4>
        <v-text-field
          ref="approachText"
          v-model="approachText"
          label="Others"
          :disabled="approach !== 'others'"
        ></v-text-field>
      </v-flex>
      <v-flex sm2></v-flex>

      <v-flex sm12>
        <v-subheader>Prosthesis:</v-subheader>
      </v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">A.</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select v-model="approachType" :items="approachTypes" label="Type"></v-select>
      </v-flex>
      <v-flex sm4>
        <v-text-field
          ref="approachTypeText"
          v-model="approachTypeText"
          label="Others"
          :disabled="approachType !== 'others'"
        ></v-text-field>
      </v-flex>
      <v-flex sm3></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">B.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="femoralSize" type="number" label="Femoral size"></v-text-field>
      </v-flex>
      <v-flex sm7></v-flex>

      <v-flex sm2 offset-sm1>
        <v-select v-model="PSType" :items="['YES', 'NO']" label="PS type"></v-select>
      </v-flex>
      <v-flex sm9></v-flex>

      <v-flex sm3 offset-sm1>
        <v-text-field v-model="PSTypeReason" label="PS type reason"></v-text-field>
      </v-flex>
      <v-flex sm8></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">C.</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-text-field v-model="insertThickness" type="number" label="Insert thickness" suffix="mm"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="selfPay" :items="['YES', 'NO']" label="高耐磨自費 Insert"></v-select>
      </v-flex>
      <v-flex sm4></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">D.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="tibiaSize" type="number" label="Tibia size"></v-text-field>
      </v-flex>
      <v-flex sm8></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">E.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="patllaSize" type="number" label="Patella size"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="thickness" type="number" label="Thickness" suffix="mm"></v-text-field>
      </v-flex>
      <v-flex sm5></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">F.</v-subheader>
      </v-flex>
      <v-flex sm5>
        <v-text-field
          v-model="femoralExtemsionStemSize"
          type="number"
          label="Femoral extemsion stem size"
        ></v-text-field>
      </v-flex>
      <v-flex sm6></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">G.</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-text-field
          v-model="tibiaExtemsionStemSize"
          type="number"
          label="Tibia extemsion stem size"
        ></v-text-field>
      </v-flex>
      <v-flex sm7></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">H.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="wedge" label="wedge"></v-text-field>
      </v-flex>
      <v-flex sm8></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">I.</v-subheader>
      </v-flex>
      <v-flex sm10>
        <v-text-field v-model="others" label="其他術中特殊狀況"></v-text-field>
      </v-flex>

      <v-flex sm3>
        <v-select v-model="lateralRelease" :items="['YES', 'NO']" label="Lateral Release"></v-select>
      </v-flex>
      <v-flex sm9></v-flex>

      <v-flex sm5>
        <v-select
          v-model="patellarTracking"
          :items="['Excellent', 'Good', 'Concerned']"
          label="Patellar tracking (Pre-wound closure)"
        ></v-select>
      </v-flex>
      <v-flex sm7></v-flex>

      <v-flex sm5>
        <v-subheader>Intra-op cutting thickness measurement:</v-subheader>
      </v-flex>
      <v-flex sm7></v-flex>

      <v-flex shrink>
        <v-subheader class="fill-height">Patellar:</v-subheader>
      </v-flex>
      <v-flex sm2>
        <v-text-field v-model="preOp" type="number" label="Pre-op" suffix="mm"></v-text-field>
      </v-flex>
      <v-flex sm2>
        <v-text-field v-model="postOp" type="number" label="Post-op" suffix="mm"></v-text-field>
      </v-flex>
      <v-flex sm6></v-flex>

      <v-flex sm3>
        <v-select v-model="boneCement" :items="['YES', 'NO']" label="骨水泥加抗生素"></v-select>
      </v-flex>
      <v-flex sm2>
        <v-select
          v-model="antibiotic"
          :items="antibiotics"
          label="劑量"
          :disabled="boneCement !== 'YES'"
        ></v-select>
      </v-flex>
      <v-flex sm7>
        <v-text-field
          ref="antibioticText"
          v-model="antibioticText"
          label="原因"
          :disabled="antibiotic !== 'others'"
        ></v-text-field>
      </v-flex>

      <v-flex shrink>
        <v-subheader class="fill-height">打止血帶前血壓</v-subheader>
      </v-flex>
      <v-flex shrink px-0 style="width: 45px">
        <v-text-field v-model="systolic" type="number"></v-text-field>
      </v-flex>
      <v-flex shrink px-0>
        <v-subheader class="fill-height">/</v-subheader>
      </v-flex>
      <v-flex shrink px-0 style="width: 45px">
        <v-text-field v-model="diastolic" type="number"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="tourniquetPressure" type="number" label="止血帶壓力" suffix="mmHg"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="hemostasisTime" type="number" label="止血帶時間" suffix="分鐘"></v-text-field>
      </v-flex>

      <v-flex sm3>
        <v-text-field v-model="operationTime" type="number" label="手術總共時間" suffix="分鐘"></v-text-field>
      </v-flex>
      <v-flex sm2>
        <v-text-field v-model="woundLength" type="number" label="傷口長度" suffix="公分"></v-text-field>
      </v-flex>
      <v-flex sm7></v-flex>

      <v-flex sm12>
        <v-text-field v-model="specialCircumstances" label="特殊狀況"></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DatePicker from "../components/DatePicker";

export default {
  name: "knee-joint",
  components: {
    DatePicker
  },
  data: () => ({
    date: "",
    name: "",
    id: "",
    types: ["OA", "RA", "SONK", "PVNS", { text: "其他", value: "others" }],
    type: "",
    typeText: "",
    advanced: "",
    valgus: "",
    UKA: "",
    primaryTKA: "",
    revision: "",
    PAF: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
    leg: "",
    anesthesias: ["GA", "SA", "SA+EA", { text: "其他", value: "others" }],
    anesthesia: "",
    anesthesiaText: "",
    ROM: [10, 20],
    preOpPatellarTracking: "",
    kneeScore: "",
    approachs: [
      "Medial parapatellar",
      "Midvastus",
      { text: "Others", value: "others" }
    ],
    approach: "",
    approachText: "",
    approachTypes: [
      "NEXGEN (high flex)",
      "Osteonic",
      "PFC-RP",
      { text: "Others", value: "others" },
      "United"
    ],
    approachType: "",
    approachTypeText: "",
    femoralSize: "",
    PSType: "",
    PSTypeReason: "",
    insertThickness: "",
    selfPay: "",
    tibiaSize: "",
    patllaSize: "",
    thickness: "",
    femoralExtemsionStemSize: "",
    tibiaExtemsionStemSize: "",
    wedge: "",
    others: "",
    lateralRelease: "",
    patellarTracking: "",
    preOp: "",
    postOp: "",
    boneCement: "",
    antibiotics: [
      {
        text: "0.5g",
        value: 0.5
      },
      {
        text: "1g",
        value: 1
      },
      {
        text: "1g 以上",
        value: "others"
      }
    ],
    antibiotic: "",
    antibioticText: "",
    systolic: "",
    diastolic: "",
    tourniquetPressure: "",
    hemostasisTime: "",
    operationTime: "",
    woundLength: "",
    specialCircumstances: ""
  }),
  watch: {
    type(type) {
      if (type === "others") {
        this.$nextTick(this.$refs.typeText.focus);
      }
    },
    anesthesia(anesthesia) {
      if (anesthesia === "others") {
        this.$nextTick(this.$refs.anesthesiaText.focus);
      }
    },
    approach(approach) {
      if (approach === "others") {
        this.$nextTick(this.$refs.approachText.focus);
      }
    },
    approachType(approachType) {
      if (approachType === "others") {
        this.$nextTick(this.$refs.approachTypeText.focus);
      }
    },
    antibiotic(antibiotic) {
      if (antibiotic === "others") {
        this.$nextTick(this.$refs.antibioticText.focus);
      }
    }
  }
};
</script>
