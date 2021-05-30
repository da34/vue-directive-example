<template>
    <div class="loading">
        <img src="./loading.gif" alt width="24" />
        <span>{{ title }}</span>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const title = ref('正在加载...')

function setTitle(s) {
    title.value = s
}
</script>
<style scoped>
.loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.loading span {
    margin-top: 5px;
    font-size: 12px;
    color: #555;
}
</style>