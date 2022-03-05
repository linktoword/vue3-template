/*
 * @FileDescription: router配置
 * @Author: zsf
 * @Date: 2022-03-05 11:53:05
 * @LastEditors: zsf
 * @LastEditTime: 2022-03-05 12:08:18
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Login',
		component: () => import('@/view/login/LoginIndex.vue') // 注意这里要带上 文件后缀.vue
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
