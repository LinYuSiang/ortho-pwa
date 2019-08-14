<template>
  <v-flex sm2 offset-sm10>
        <date-picker :date.sync="date" label="手術日期"/>
      </v-flex>
</template>
<script>
import DatePicker from "../components/DatePicker";

export default {
  name: "Fullow-up",
  components: {
    DatePicker
  },
  data: () => ({
   }),

 
};

</script>