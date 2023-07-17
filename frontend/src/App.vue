
<script setup lang="ts">
import { ref } from "vue"
import { apiGenerateImg, apiConversation } from './api'


const analysis = ref("")
const imgUrl = ref("")
const text= ref("")

function handleCheck () {
  // api
  apiGenerateImg(text.value).then(({data})=>{
    imgUrl.value = data.data;
    console.log(data);
  });

  apiConversation(text.value).then(({data})=>{
    analysis.value = data.data.text;
  })
}

</script>

<template>
  <div> 

    <div>
      <div>
        <img :src="imgUrl" alt="">
      </div>
      <div>
       {{ analysis }}
      </div>
    </div>
    <div>
      <input type="text" v-model="text">
      <button @click="handleCheck">check</button>
    </div>


  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

function ref(arg0: string) {
  throw new Error("Function not implemented.");
}

function apiGenerateImg(arg0: string) {
  throw new Error("Function not implemented.");
}
