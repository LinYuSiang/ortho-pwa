<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="newDate"
    persistent
    lazy
    full-width
    width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field v-model="newDate" :label="label" readonly v-on="on"></v-text-field>
    </template>
    <v-date-picker v-model="newDate" scrollable>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="modal = false">取消</v-btn>
      <v-btn flat color="primary" @click="$refs.dialog.save(newDate)">確認</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ["label", "date"],
  data: () => {
    return {
      modal: false,
      newDate: ""
    };
  },
  created() {
    this.newDate = this.date || new Date().toISOString().substr(0, 10);
  },
  watch: {
    newDate(newDate) {
      if (newDate !== this.date) {
        this.$emit("update:date",   );
      }
    }
  }
};
</script>
