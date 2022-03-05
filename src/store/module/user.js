/*
 * @FileDescription:
 * @Author: zsf
 * @Date: 2022-03-05 10:41:20
 * @LastEditors: zsf
 * @LastEditTime: 2022-03-05 10:48:42
 */

import { defineStore } from 'pinia'

export const useUserStore = defineStore({
	id: 'user', // id必填，且需要唯一
	state: () => {
		return {
			name: 'demoName'
		}
	},
	getters: {},
	action: {},
	persist: {
		enabled: true,
		strategies: [
			{
				storage: localStorage,
				paths: ['name'] // 持久化的key
			}
		]
	}
})
