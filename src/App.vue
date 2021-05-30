<template>
    <div v-loading:[loadingText]="visiable">
    <h1>
      我是一段内容
    </h1>
    <button @click="onClick">显示/隐藏</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'  
const visiable = ref(true)
const data = ref([])
const loadingText = '测试123....'
function onClick() {
  visiable.value = !visiable.value
}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
