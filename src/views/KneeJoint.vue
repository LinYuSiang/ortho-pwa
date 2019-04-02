<template>
  <v-container grid-list-sm fluid>
    <v-layout wrap>
      <v-flex sm2 offset-sm10>
        <date-picker :date.sync="date" label="手術日期" />
      </v-flex>

      <v-flex sm3>
        <v-text-field v-model="name" label="姓名" ></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="id" label="病例號碼"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-text-field v-model="birthday" label="出生年月日"></v-text-field>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="type" :items="types" label="診斷"></v-select>
      </v-flex>
  
      <v-flex sm3>
        <v-select v-model="valgus" :items="[{text:'YES' ,value:'yes'}, 'NO']" label="Valgus"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-text-field
          ref="valgusText"
          v-model="valgusText"
          label="YES,"
          :disabled="valgus !== 'yes'"
          suffix="degrees "
        ></v-text-field>
      </v-flex>
      <v-flex sm5 offset-sm1>
        <v-text-field ref="typeText" v-model="typeText" label="其他" :disabled="type !== 'others'"></v-text-field>
      </v-flex>

      <v-flex sm2>
        <v-text-field v-model="height" @keyup="handleFilterLetters" :items="Array.from(Array(250).keys())" label="身高" suffix="cm"></v-text-field>
      </v-flex>
      <v-flex sm2>
        <v-text-field v-model="weight"  @keyup="handleFilterLetters" :items="Array.from(Array(151).keys()) " label="體重" suffix="kg"></v-text-field>
      </v-flex>
      <v-flex sm2>
        <v-select v-model="age" :items="Array.from(Array(100).keys())" label="年齡" suffix="歲"></v-select>
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
      <v-flex sm3>
        <v-subheader  v-model="BMIS">BMI:{{ BMIS }}</v-subheader>  
      </v-flex>
      <v-flex sm3></v-flex>

      <v-flex sm2>
        <v-subheader>Pre-op:</v-subheader>
      </v-flex>
      <v-flex sm1>
        <v-subheader class="px-0">ROM:</v-subheader>
      </v-flex>
      <v-flex sm1>
        <v-select v-model="ROM1" class="mt-0" :items="Array.from(Array(151).keys())" hide-details></v-select>
      </v-flex>
      <v-flex shrink>
        <v-subheader>to</v-subheader>
      </v-flex>
      <v-flex sm1>
        <v-select v-model="ROM2" class="mt-0" :items="Array.from(Array(151).keys())" hide-details></v-select>
      </v-flex>
      <v-flex sm5>
        <v-subheader>degrees</v-subheader>
      </v-flex>

      <v-flex sm4 offset-sm2>
        <v-select
          v-model="preOpPatellarTracking"
          :items="['Good', 'Subluxation','dislocation']"
          label="Patellar tracking"
        ></v-select>
      </v-flex>
      <v-flex sm6></v-flex>

      <v-flex sm4 offset-sm2>
        <v-select v-model="kneeScore" :items="Array.from(Array(49).keys())" label="術前 Oxford  Knee Score"></v-select>
      </v-flex>
      <v-flex sm6></v-flex>

      <v-flex sm2>
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
      </v-flex>
      <v-flex sm3></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">B.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="femoralSize" :items="Array.from(Array(7).keys()).map((i)=>{return i + 1}) " label="Femoral size"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="PSType" :items="['YES', 'NO']" label="PS type"></v-select>
      </v-flex>
      <v-flex sm5></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">C.</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select
          v-model="insertThickness"
          :items="Array.from(Array(14).keys()).map((i)=> {return i+8})"
          label="Insert thickness"
          suffix="mm"
        ></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="selfPay" :items="['YES', 'NO']" label="高耐磨自費 Insert"></v-select>
      </v-flex>
      <v-flex sm4></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">D.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="tibiaSize" :items="Array.from(Array(13).keys()).map((i)=>{return 1+(i/2)})" label="Tibia size"></v-select>
      </v-flex>
      <v-flex sm8></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">E.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="patllaSize" :items="patllaSizes" label="Patella size"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select
          v-model="thickness"
          :items="Array.from(Array(6).keys()).map((i)=>{return (i/2)+8})"
          label="Thickness"
          suffix="mm"
        ></v-select>
      </v-flex>
      <v-flex sm5></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">F.</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select
          v-model="femoralExtemsionStemSize"
          :items="femoralExtemsionStemSizes"
          label="Femoral extemsion stem size"
        ></v-select>
      </v-flex>
      <v-flex sm7></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">G.</v-subheader>
      </v-flex>
      <v-flex sm4>
        <v-select
          v-model="tibiaExtemsionStemSize"
          :items="tibiaExtemsionStemSizes"
          label="Tibia extemsion stem size"
        ></v-select>
      </v-flex>
      <v-flex sm7></v-flex>

      <v-flex sm1>
        <v-subheader class="fill-height pr-0">H.</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="wedgepart" :items="wedgeparts" label="wedge" suffix="部位"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select 
        v-model="wedgethickness"
        ref="wedgethickness"
        :items="wedgethicknesses" 
        label="厚度"
        :disabled="wedgepart === ''"
        suffix="mm">
        </v-select>
      </v-flex>
      <v-flex sm5></v-flex>
 
      <v-flex sm12>
        <v-divider></v-divider>
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

      <v-flex sm2>
        <v-subheader class="fill-height">Patellar:</v-subheader>
      </v-flex>
      <v-flex sm3>
        <v-select v-model="preOp" :items="Array.from(Array(61).keys()).map((i)=>{return 10+(i/2)})" label="Patellar Pre-op" suffix="mm"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select
          v-model="postOp"
          :items="Array.from(Array(61).keys()).map((i)=>{return 10+(i/2)})"
          label="Patellar Post-op"
          suffix="mm"
        ></v-select>
      </v-flex>
      <v-flex sm4></v-flex>

      <v-flex sm3 offset-sm2>
        <v-select v-model="boneCement" :items="['YES', 'NO']" label="骨水泥加抗生素"></v-select>
      </v-flex>
      <v-flex sm2>
        <v-select
          ref="antibiotic"
          v-model="antibiotic"
          :items="[0.5, 1, 2, 4]"
          label="劑量"
          suffix="gm"
          :disabled="boneCement !== 'YES'"
        ></v-select>
      </v-flex>
      <v-flex sm5>
      </v-flex>

      <v-flex sm2>
        <v-subheader class="fill-height">打止血帶前血壓</v-subheader>
      </v-flex>
      <v-flex sm1 px-0 style="width: 45px">
        <v-select v-model="systolic" :items="Array.from(Array(151).keys()).map((i)=>{return 70+(i)})"></v-select>
      </v-flex>
      <v-flex shrink px-0>
        <v-subheader class="fill-height">/</v-subheader>
      </v-flex>
      <v-flex sm1 px-0 style="width: 45px">
        <v-select v-model="diastolic" :items="Array.from(Array(101).keys()).map((i)=>{return 20+(i)})"></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select
          v-model="tourniquetPressure"
          :items="Array.from(Array(101).keys())"
          label="止血帶壓力"
          suffix="mmHg"
        ></v-select>
      </v-flex>
      <v-flex sm3>
        <v-select
          v-model="hemostasisTime"
          :items="Array.from(Array(101).keys())"
          label="止血帶時間"
          suffix="分鐘"
        ></v-select>
      </v-flex>

      <v-flex sm10 offset-sm2>
        <v-text-field v-model="specialCircumstances" label="其他術中特殊狀況"></v-text-field>
      </v-flex>

      <v-flex sm4 >
        <v-select v-model="Clexane" :items="Clexanes" label="是否使用Clexane"></v-select>
      </v-flex>
      <v-flex sm4 >
        <v-select v-model="Remarks" :items="Remarkses" label="備註"></v-select>
      </v-flex>
      <v-flex sm4>
        <v-text-field
          ref="RemarksText"
          v-model="RemarksText"
          label="其他"
          :disabled="Remarks !== 'others'"
        ></v-text-field>
      </v-flex>

      <v-flex sm12>
        <v-text-field v-model="others" label="其他"></v-text-field>
      </v-flex>

       <v-flex sm4 >
        <v-select v-model="PCA" :items="PCAs" label="PCA"></v-select>
      </v-flex>
      <v-flex sm4 >
        <v-select v-model="PAI" :items="PAIs" label="PAI"></v-select>
      </v-flex>
      <v-flex sm4 >
        <v-select v-model="Tencam" :items="Tencams" label="Tencam"></v-select>
      </v-flex>
      
      <v-flex sm3 >
        <v-select v-model="Transamine" :items="Transamines" label="Transamine" ></v-select>
      </v-flex>
       <v-flex sm2>
        <v-select
          ref="TransamineText"
          v-model="TransamineText"
          :items="Array.from(Array(11).keys())"
          label="劑量"
          suffix="Amp"
          :disabled="Transamine === 'NO'"
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
        <v-select v-model="MedialDistal" :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})"  outline></v-select>
      </v-flex>
      <v-flex sm3 >
        <v-select v-model="MedialPosterior " :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})" outline></v-select>
      </v-flex>
      <v-flex sm3 >
        <v-select v-model="MedialTibai" :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})" outline></v-select>
      </v-flex>
       <v-flex sm2></v-flex>

      <v-flex sm1 >
        <v-subheader >Lateral</v-subheader>
      </v-flex>
      <v-flex sm3 >
        <v-select v-model="LateralDistal" :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})" outline></v-select>
      </v-flex>
      <v-flex sm3 >
        <v-select v-model="LateralPosterior" :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})" outline></v-select>
      </v-flex>
      <v-flex sm3 >
        <v-select v-model="LateralTibai" :items="Array.from(Array(51).keys()).map((i)=>{return (i)/2})" outline></v-select>
      </v-flex>
      <v-flex sm2></v-flex>


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
    types: ["OA", "RA", "SONK", "PVNS","traumatic OA","hemophilia","tumor","septic arthritis","s/p resection arthroplasty","Aseptic loosening","Periprosthetic fracture",{ text: "其他", value: "others" }],
    birthday:"",
    type: "",
    typeText: "",
    valgus: "",
    valgusText:"",
    height: "",
    weight: "",
    age: "",
    gender: "",
    BMIS:"",
    leg: "",
    anesthesias: ["GA", "SA", "SA+EA", { text: "其他", value: "others" }],
    anesthesia: "",
    anesthesiaText: "",
    ROM1:"",
    ROM2:"",
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
    patllaSizes: [7,9,11,26,29,32,35],
    thickness: "",
    femoralExtemsionStemSize: "",
    femoralExtemsionStemSizes: ["10x30","10x75","10x100","10x145","11x30","11x75","11x100","11x145",
                               "12x30","12x75","12x100","12x145","14x30","14x75","14x100","14x145",
                               ],
    tibiaExtemsionStemSize: "",
    tibiaExtemsionStemSizes:["10x30","10x75","10x100","10x145","11x30","11x75","11x100","11x145",
                             "12x30","12x75","12x100","12x145","14x30","14x75","14x100","14x145"
                             ],
    wedge: "",
    wedgepart:"",
    wedgeparts:["distalmedia","distallateral","posteromedial","posterolateral"],
    wedgethickness:"",
    wedgethicknesses:["5mm","10mm"],
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
    Clexane:"",
    Clexanes:["BMI>30 Clexane" ,"BMI<30 但有其他風險"],
    Remarks:"",
    Remarkses:["特殊教學","併發症",{text:"其他" ,value:"others"}],
    RemarksText:"",
    PCA:"",
    PCAs:["NO","IV","Epidural"],
    PAI:"",
    PAIs:["YES","NO"],
    Tencam:"",
    Tencams:["YES","NO"],
    Transamine:"",
    Transamines:["IA","IM","IM+IA","NO"],
    TransamineText:"",
    MedialDistal:"",
    MedialPosterior:"",
    MedialTibai:"",
    LateralDistal:"",
    LateralPosterior:"",
    LateralTibai:"",

  }),
  
  watch: {
    type(type) {
      if (type === "others") {
        this.$nextTick(this.$refs.typeText.focus);
      }
      if(type !== "others"){
        this.typeText ="";
      }
    },
    anesthesia(anesthesia) {
      if (anesthesia === "others") {
        this.$nextTick(this.$refs.anesthesiaText.focus);
      }
       if(anesthesia !== "others"){
        this.anesthesiaText ="";
      }
    },
    approach(approach) {
      if (approach === "others") {
        this.$nextTick(this.$refs.approachText.focus);
      }
       if(approach !== "others"){
        this.approachText ="";
       }
    },
    boneCement(boneCement) {
      if (boneCement === "YES") {
        this.$nextTick(this.$refs.antibiotic.focus);
      }
      if(boneCement !== "YES"){
        this.antibiotic ="";
       }
    },
    valgus(valgus) {
      if (valgus === "yes") {
        this.$nextTick(this.$refs.valgusText.focus);
      }
      if(valgus !== "yes"){
        this.valgusText ="";
      }
    },
     wedgepart(wedgepart) {
      if (["distalmedia", "distallateral", "posteromedial" , "posterolateral"].includes(wedgepart)) {
        this.$nextTick(this.$refs.wedgethickness.focus);
      }
    },
     Transamine(Transamine) {
      if (["IA","IM","IM+IA"].includes(Transamine)) {
        this.$nextTick(this.$refs.TransamineText.focus);
      }
       if(Transamine =="NO"){
        this.TransamineText ="";
       }
    },
     Remarks(Remarks) {
      if (Remarks === "others") {
        this.$nextTick(this.$refs.RemarksText.focus);
      }
       if(Remarks !=="others"){
        this.RemarksText ="";
       }
    },
    weight(){
     {
      
       this.BMIS=this.weight/this.height/this.height*10000;
       this.BMIS = this.BMIS.toFixed(2);
      }
    },
    height(){
     {
        this.BMIS=this.weight/this.height/this.height*10000;
        this.BMIS = this.BMIS.toFixed(2);
      }
    },
  
  },

   methods: {
        handleFilterLetters: function()
        {
        this.weight = this.weight.replace(/[^\d.]/g, '');
        this.height = this.height.replace(/[^\d.]/g, '');
       
        }

   }
   
}


</script>
