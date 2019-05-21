<template>
  <v-container grid-list-sm fluid>
    <v-layout wrap>
      <v-flex sm2 offset-sm10>
        <v-text-field v-model="surgery_date" disabled label="手術日期"  style="font-family:DFKai-sb;" ></v-text-field>
      </v-flex>

      <v-flex sm4 >
        <v-text-field  v-model="name"  label="姓名" disabled style="black" ></v-text-field>
      </v-flex>
      <v-flex sm4>
        <v-text-field v-model="medical_record_no" disabled label="病例號碼" style="font-family:DFKai-sb;"></v-text-field>
      </v-flex>
      <v-flex sm4>
        <v-text-field v-model="birthday" disabled label="出生年月日(YYYY-MM-DD)" style="font-family:DFKai-sb;"></v-text-field>
      </v-flex>
      
      <v-flex sm3>
        <v-select v-model="valgus" disabled :items="[{text:'YES' ,value:'yes'}, 'NO']" label="Valgus" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-text-field
        
          v-show="valgus == 'yes'"
          style="font-family:Calibri;"
          ref="valgusText"
          v-model="valgusText"
          label="YES,"
          disabled
          suffix="degrees "
        ></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="type" disabled :items="types" label="診斷" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-show="type == 'others'" disabled ref="typeText" v-model="typeText" label="其他"  style="font-family:Calibri;"></v-text-field>
      </v-flex>

      <v-flex sm2>
        <v-text-field v-model="height" disabled  label="身高" suffix="cm" style="font-family:DFKai-sb;"></v-text-field>
      </v-flex>
      <v-flex sm2>
        <v-text-field v-model="weight" disabled  label="體重" suffix="kg" style="font-family:DFKai-sb;"></v-text-field>
      </v-flex>
      <v-flex sm2>
        <v-select v-model="age" disabled :items="Array.from(Array(100).keys())" label="年齡" suffix="歲" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="gender" disabled :items="[{text:'男',value:'1'}, {text:'女', value:'0'}]" label="性別" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="leg" disabled :items="['左', '右']" label="左右腳" style="font-family:DFKai-sb;"></v-select>
      </v-flex>

      <v-flex sm3>
        <v-select v-model="anesthesia" disabled :items="anesthesias" label="麻醉" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-text-field
          v-show="anesthesia == 'others'"
          style="font-family:DFKai-sb;"
          ref="anesthesiaText"
          v-model="anesthesiaText"
          label="其他"
          disabled
        ></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-subheader disabled v-model="BMIS" style="font-family:Calibri;">BMI:{{ BMIS }}</v-subheader>  
      </v-flex>
      <v-flex sm3></v-flex>

      <v-flex sm2>
        <v-subheader>Pre-op:</v-subheader>
      </v-flex>
      <v-flex sm1>
        <v-subheader  class="px-0" style="font-family:Calibri;">ROM:</v-subheader>
      </v-flex>
      <v-flex sm1>
        <v-select disabled v-model="ROM1" class="mt-0" :items="Array.from(Array(151).keys())" hide-details style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex shrink>
        <v-subheader>to</v-subheader>
      </v-flex>
      <v-flex sm1>
        <v-select disabled v-model="ROM2" class="mt-0" :items="Array.from(Array(151).keys())" hide-details style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm5>
        <v-subheader>degrees</v-subheader>
      </v-flex>

      <v-flex sm4 offset-sm2>
        <v-select
          disabled
          style="font-family:Calibri;"
          v-model="preOpPatellarTracking"
          :items="['Good', 'Subluxation','dislocation']"
          label="Patellar tracking"
        ></v-select>
      </v-flex>
      <v-flex sm6></v-flex>

      <v-flex sm4 offset-sm2>
        <v-select  v-model="kneeScore" disabled :items="Array.from(Array(49).keys())" label="術前 Oxford  Knee Score" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm6></v-flex>

      <v-flex sm2>
        <v-subheader class="fill-height" style="font-family:Calibri;">Approach:</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select v-model="approach" disabled :items="approachs" label="名稱" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm4>
        <v-text-field
          v-show="approach == 'others'"
          style="font-family:Calibri;"
          ref="approachText"
          v-model="approachText"
          label="Others"
          disabled
        ></v-text-field>
      </v-flex>
      <v-flex sm2></v-flex>

      <v-flex sm12>
        <v-subheader>Prosthesis:</v-subheader>
      </v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0" disabled style="font-family:Calibri;">A.</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select v-model="approachType" disabled :items="approachTypes" label="Type" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm4>
      </v-flex>
      <v-flex sm3></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0" disabled style="font-family:Calibri;">B.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="femoralSize" disabled :items="Array.from(Array(7).keys()).map((i)=>{return i + 1}) " label="Femoral size" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="PSType" disabled :items="['YES', 'NO']" label="PS type" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm5></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0" disabled style="font-family:Calibri;">C.</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select
          disabled
          style="font-family:Calibri;"
          v-model="insertThickness"
          :items="Array.from(Array(14).keys()).map((i)=> {return i+8})"
          label="Insert thickness"
          suffix="mm"
        ></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="selfPay"  disabled :items="['YES', 'NO']" label="高耐磨自費 Insert" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm4></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0" style="font-family:Calibri;">D.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="tibiaSize" disabled :items="Array.from(Array(13).keys()).map((i)=>{return 1+(i/2)})" label="Tibia size" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm8></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0" disabled style="font-family:Calibri;">E.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="patllaSize" disabled :items="patllaSizes" label="Patella size" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select
          style="font-family:Calibri;"
          v-model="thickness"
          :items="Array.from(Array(6).keys()).map((i)=>{return (i/2)+8})"
          label="Thickness"
          suffix="mm"
          disabled
        ></v-select>
      </v-flex>
      <v-flex sm5></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0" disabled style="font-family:Calibri;">F.</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select
          style="font-family:Calibri;"
          v-model="femoralExtemsionStemSize"
          :items="femoralExtemsionStemSizes"
          label="Femoral extemsion stem size"
          disabled
        ></v-select>
      </v-flex>
      <v-flex sm7></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0" disabled style="font-family:Calibri;">G.</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select
          style="font-family:Calibri;"
          v-model="tibiaExtemsionStemSize"
          :items="tibiaExtemsionStemSizes"
          label="Tibia extemsion stem size"
          disabled
        ></v-select>
      </v-flex>
      <v-flex sm7></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0" disabled style="font-family:Calibri;">H.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="wedgepart" disabled :items="wedgeparts" label="wedge" suffix="部位" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select 
          style="font-family:DFKai-sb;"
          v-model="wedgethickness"
          ref="wedgethickness"
          :items="wedgethicknesses" 
          label="厚度"
          disabled
          suffix="mm">
        </v-select>
      </v-flex>
      <v-flex sm5></v-flex>
 
      <v-flex sm12>
        <v-divider></v-divider>
      </v-flex>

      <v-flex sm3>
        <v-select v-model="lateralRelease" disabled :items="['YES', 'NO']" label="Lateral Release" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm9></v-flex>

      <v-flex sm5>
        <v-select
          disabled
          style="font-family:Calibri;"
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

      <v-flex sm2>
        <v-subheader class="fill-height" style="font-family:Calibri;">Patellar:</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="preOp" disabled :items="Array.from(Array(61).keys()).map((i)=>{return 10+(i/2)})" label="Patellar Pre-op" suffix="mm" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select
          style="font-family:Calibri;"
          v-model="postOp"
          :items="Array.from(Array(61).keys()).map((i)=>{return 10+(i/2)})"
          label="Patellar Post-op"
          suffix="mm"
          disabled
        ></v-select>
      </v-flex>
      <v-flex sm4></v-flex>

      <v-flex sm3 offset-sm2>
        <v-select v-model="boneCement" disabled :items="['YES', 'NO']" label="骨水泥加抗生素" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm2>
        <v-select
          v-show="boneCement == 'YES'"
          style="font-family:DFKai-sb;"
          ref="antibiotic"
          v-model="antibiotic"
          :items="[0.5, 1, 2, 4]"
          label="劑量"
          suffix="gm"
          disabled
        ></v-select>
      </v-flex>
      <v-flex sm5>
      </v-flex>

      <v-flex sm2>
        <v-subheader class="fill-height" disabled style="font-family:DFKai-sb;">打止血帶前血壓</v-subheader>
      </v-flex>
      <v-flex sm1 px-0 style="width: 45px">
        <v-select v-model="systolic" disabled :items="Array.from(Array(151).keys()).map((i)=>{return 70+(i)})" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex shrink px-0>
        <v-subheader class="fill-height" >/</v-subheader>
      </v-flex>
      <v-flex sm1 px-0 style="width: 45px">
        <v-select v-model="diastolic" disabled :items="Array.from(Array(101).keys()).map((i)=>{return 20+(i)})" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select
          style="font-family:DFKai-sb;"
          v-model="tourniquetPressure"
          :items="Array.from(Array(101).keys())"
          label="止血帶壓力"
          suffix="mmHg"
          disabled
        ></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select
          style="font-family:DFKai-sb;"
          v-model="hemostasisTime"
          :items="Array.from(Array(101).keys())"
          label="止血帶時間"
          suffix="分鐘"
          disabled
        ></v-select>
      </v-flex>

      <v-flex sm10 offset-sm2>
        <v-text-field v-model="specialCircumstances" disabled label="其他術中特殊狀況" style="font-family:DFKai-sb;"></v-text-field>
      </v-flex>

      <v-flex sm4 >
        <v-select v-model="Clexane" disabled :items="Clexanes" label="是否使用Clexane" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm4 >
        <v-select v-model="Remarks" disabled :items="Remarkses" label="備註" style="font-family:DFKai-sb;"></v-select>
      </v-flex>
      <v-flex sm4>
        <v-text-field
          v-show="Remarks == 'others'"
          style="font-family:DFKai-sb;"
          ref="RemarksText"
          v-model="RemarksText"
          label="其他"
          disabled
        ></v-text-field>
      </v-flex>

      <v-flex sm12>
        <v-text-field v-model="others" disabled label="其他" ></v-text-field>
      </v-flex>

       <v-flex sm4 >
        <v-select v-model="PCA" :items="PCAs" disabled label="PCA" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm4 >
        <v-select v-model="PAI" :items="PAIs" disabled label="PAI" style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm4 >
        <v-select v-model="Tencam" :items="Tencams" disabled label="Tencam" style="font-family:Calibri;"></v-select>
      </v-flex>
      
      <v-flex sm3 >
        <v-select v-model="Transamine" :items="Transamines" disabled label="Transamine" style="font-family:Calibri;"></v-select>
      </v-flex>
       <v-flex sm2>
        <v-select
          style="font-family:Calibri;"
          ref="TransamineText"
          v-model="TransamineText"
          :items="Array.from(Array(11).keys())"
          label="劑量"
          suffix="Amp"
          disabled
        ></v-select>
      </v-flex>
      <v-flex sm7></v-flex>
      
      <v-flex sm1 ></v-flex>
      <v-flex sm3  >
        <v-subheader >Distal femur</v-subheader>
      </v-flex>
      <v-flex sm3 >
        <v-subheader >Posterior condyle</v-subheader>
      </v-flex>
      <v-flex sm3 >
        <v-subheader >Tibai</v-subheader>
      </v-flex>
      <v-flex sm2 ></v-flex>

      <v-flex sm1 >
        <v-subheader >Medial</v-subheader>
      </v-flex>
      <v-flex sm3  >
        <v-select v-model="MedialDistal" disabled :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})"  outline style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm3 >
        <v-select v-model="MedialPosterior" disabled :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})" outline style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm3 >
        <v-select v-model="MedialTibai" disabled :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})" outline style="font-family:Calibri;"></v-select>
      </v-flex>
       <v-flex sm2></v-flex>

      <v-flex sm1 >
        <v-subheader >Lateral</v-subheader>
      </v-flex>
      <v-flex sm3 >
        <v-select v-model="LateralDistal" disabled :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})" outline style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm3 >
        <v-select v-model="LateralPosterior" disabled :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})" outline style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm3 >
        <v-select v-model="LateralTibai" disabled :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})" outline style="font-family:Calibri;"></v-select>
      </v-flex>
      <v-flex sm2></v-flex>
      <v-btn color="green darken-1" dark @click="$router.push({ name:'更新膝關節病歷表' ,params:{id} })" large>更新</v-btn>
      <v-btn @click="deleted" color="red  darken-3" dark large>刪除</v-btn>
      <v-btn  color="primary" @click="$router.push({ name:'查詢' })"  large >上一頁 </v-btn>
      
        
    </v-layout>
  </v-container>
</template>

<script>

import axios from 'axios';
import router from '../../router';

export default {
  name: "knee-joint",
  
  data: () => ({
    id:"",
    surgery_date: "",
    dialog:"",
    name: "",
    medical_record_no: "",
    types: [
      "OA",
      "RA",
      "SONK",
      "PVNS",
      "traumatic OA",
      "hemophilia",
      "tumor",
      "septic arthritis",
      "s/p resection arthroplasty",
      "Aseptic loosening",
      "Periprosthetic fracture",
      { text: "其他", value: "others" }
    ],
    birthday: "",
    type: "",
    typeText: "",
    valgus: "",
    valgusText: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
    BMIS: "",
    leg: "",
    anesthesias: ["GA", "SA", "SA+EA", { text: "其他", value: "others" }],
    anesthesia: "",
    anesthesiaText: "",
    ROM1: "",
    ROM2: "",
    preOpPatellarTracking: "",
    kneeScore: "",
    approachs: [
      "Medial parapatellar",
      "Midvastus",
      "Subvastus",
      "TTO",
      "Quadriceps snip",
      { text: "Others", value: "others" }
    ],
    approach: "",
    approachText: "",
    approachTypes: [
      "NexGen(Zimmer)",
      "Traithlon (stryker)",
      "U2 (United)",
      "PFC-RP(Depuy)",
      "PFC-sigma(Depuy)",
      "Attune (Depuy)",
      "Genesis II (Smith-nephew)",
      "LCCK(Zimmer)",
      "RHK(zimmer)",
      "UKA(zimmer)"
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
    patllaSizes: [7, 9, 11, 26, 29, 32, 35],
    thickness: "",
    femoralExtemsionStemSize: "",
    femoralExtemsionStemSizes: [
      "10x30",
      "10x75",
      "10x100",
      "10x145",
      "11x30",
      "11x75",
      "11x100",
      "11x145",
      "12x30",
      "12x75",
      "12x100",
      "12x145",
      "14x30",
      "14x75",
      "14x100",
      "14x145"
    ],
    tibiaExtemsionStemSize: "",
    tibiaExtemsionStemSizes: [
      "10x30",
      "10x75",
      "10x100",
      "10x145",
      "11x30",
      "11x75",
      "11x100",
      "11x145",
      "12x30",
      "12x75",
      "12x100",
      "12x145",
      "14x30",
      "14x75",
      "14x100",
      "14x145"
    ],
    wedge: "",
    wedgepart: "",
    wedgeparts: [
      "distalmedia",
      "distallateral",
      "posteromedial",
      "posterolateral"
    ],
    wedgethickness: "",
    wedgethicknesses: ["5mm", "10mm"],
    others: "",
    lateralRelease: "",
    patellarTracking: "",
    preOp: "",
    postOp: "",
    boneCement: "",
    antibiotic: "",
    systolic: "",
    diastolic: "",
    tourniquetPressure: "",
    hemostasisTime: "",
    operationTime: "",
    woundLength: "",
    specialCircumstances: "",
    Clexane: "",
    Clexanes: ["BMI>30 Clexane", "BMI<30 但有其他風險"],
    Remarks: "",
    Remarkses: ["特殊教學", "併發症", { text: "其他", value: "others" }],
    RemarksText: "",
    PCA: "",
    PCAs: ["NO", "IV", "Epidural"],
    PAI: "",
    PAIs: ["YES", "NO"],
    Tencam: "",
    Tencams: ["YES", "NO"],
    Transamine: "",
    Transamines: ["IA", "IM", "IM+IA", "NO"],
    TransamineText: "",
    MedialDistal: "",
    MedialPosterior: "",
    MedialTibai: "",
    LateralDistal: "",
    LateralPosterior: "",
    LateralTibai: ""
  }),
  created: function(){       
         axios.get(`https://web.nutc-imac.com:9997/api/knee-joint/${this.$route.params.msg}`, {
          headers: {
            Accept: 'application/json',
            Authorization:` Bearer ${localStorage.item}`,         
        }  
          })
           .then(({ data }) => {
        
            this.id = data.kneeJoint.id,
            this.medical_record_no = data.kneeJoint.patient.medical_record_no,
            this.name = data.kneeJoint.patient.name, 
            this.birthday = data.kneeJoint.patient.birthday,
            this.BMIS = data.kneeJoint.patient.bmi,
            this.height = data.kneeJoint.patient.height,
            this.weight = data.kneeJoint.patient.weight,
            this.gender = data.kneeJoint.patient.gender,
            this.type = data.kneeJoint.type,
            this.typeText = data.kneeJoint.type_other,
            this.surgery_date = data.kneeJoint.surgery_date,
            this.valgus = data.kneeJoint.valgus,
            this.valgusText = data.kneeJoint.valgus_other,
            this.leg = data.kneeJoint.leg,
            this.anesthesia = data.kneeJoint.anesthesia,
            this.anesthesiaText = data.kneeJoint.anesthesia_other,
            this.ROM1 = data.kneeJoint.rom_one,
            this.ROM2 = data.kneeJoint.rom_two,
            this.preOpPatellarTracking = data.kneeJoint.pre_op_patellar_tracking,
            this.kneeScore = data.kneeJoint.knee_score,
            this.approach = data.kneeJoint.approach,
            this.approachText = data.kneeJoint.approach_other,
            this.approachType = data.kneeJoint.approach_type,
            this.femoralSize = data.kneeJoint.femoral_size,
            this.PSType = data.kneeJoint.ps_type,
            this.insertThickness = data.kneeJoint.insert_thickness,
            this.selfPay = data.kneeJoint.self_pay,
            this.tibiaSize = data.kneeJoint.tibia_size,
            this.patllaSize = data.kneeJoint.patlla_size,
            this.thickness = data.kneeJoint.thickness,
            this.femoralExtemsionStemSize = data.kneeJoint.femoral_extemsion_stem_size,
            this.tibiaExtemsionStemSize = data.kneeJoint.tibia_extemsion_stem_size,
            this.wedgepart = data.kneeJoint.wedge_part,
            this.wedgethickness = data.kneeJoint.wedge_thickness,
            this.lateralRelease = data.kneeJoint.lateral_release,
            this.patellarTracking = data.kneeJoint.patellar_tracking,
            this.preOp = data.kneeJoint.pre_op,
            this.postOp = data.kneeJoint.post_op,
            this.boneCement = data.kneeJoint.bone_cement,
            this.antibiotic = data.kneeJoint.antibiotic,
            this.systolic = data.kneeJoint.systolic,
            this.diastolic = data.kneeJoint.diastolic,
            this.tourniquetPressure = data.kneeJoint.tourniquet_pressure,
            this.hemostasisTime = data.kneeJoint.hemostasis_time,
            this.specialCircumstances = data.kneeJoint.special_circumstances,
            this.Clexane = data.kneeJoint.clexanes,
            this.Remarks = data.kneeJoint.remark,
            this.RemarksText = data.kneeJoint.remark_other,
            this.others = data.kneeJoint.others,
            this.PCA = data.kneeJoint.pca,
            this.PAI = data.kneeJoint.pai,
            this.Tencam = data.kneeJoint.tencam,
            this.Transamine = data.kneeJoint.transamine,
            this.TransamineText = data.kneeJoint.transamine_text,
            this.MedialDistal = data.kneeJoint.medial_distal,
            this.MedialPosterior = data.kneeJoint.medial_posterior,
            this.MedialTibai = data.kneeJoint.medial_tibai,
            this.LateralDistal = data.kneeJoint.lateral_distal,
            this.LateralPosterior = data.kneeJoint.lateral_posterior,
            this.LateralTiba = data.kneeJoint.lateral_tibai
    })
   },

   
  methods: {
    handleFilterLetters: function() {
      this.weight = this.weight.replace(/[^\d.]/g, "");
      this.height = this.height.replace(/[^\d.]/g, "");
    },
    deleted() {
      axios.delete(`https://web.nutc-imac.com:9997/api/knee-joint/${this.$route.params.msg}`, {
          headers: {
            Accept: 'application/json',
            Authorization:` Bearer ${localStorage.item}`,         
        }  
          })
             .then(() => { 
             router.push('/search');
          })
      
    }

  },
  
};
</script>
