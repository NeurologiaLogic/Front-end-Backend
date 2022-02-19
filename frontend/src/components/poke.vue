<template>
  <!-- salah si harusnya bikin make css biasa  -->
  <div class="container">
    <div class="poke">
      <textarea v-model="searched" ame="" id="" cols="30" rows="10"> </textarea>
      <div class="flex flex-col"></div>
    </div>
  </div>
</template>
<script>
import {} from 'vue'
export default {
  name: "newsletter_footer",
  data(){
    return{
      searched=""

    }
  }
};
</script>

<style scoped>
.newsletter {
  background: url("../assets/footer/newspaper.png") no-repeat center center;
  /* border: 1px solid black; */
}
.newsletter-text {
  color: #434449;
}
.text-box {
  outline: none;
}
.submit {
  background-color: #434449;
  color: white;
}
</style>
