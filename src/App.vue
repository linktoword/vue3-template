<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { useUserStore } from './store/module/user'
const userStore = useUserStore()

function demo() {
	ElMessage.error('1111111111111111')
}
</script>

<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Hello Vue 3 + Vite" />
	<el-button type="success" @click="demo">Success</el-button>
</template>

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
