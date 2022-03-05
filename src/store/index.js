/*
 * @FileDescription: pinia管理
 * @Author: zsf
 * @Date: 2022-03-05 10:37:54
 * @LastEditors: zsf
 * @LastEditTime: 2022-03-05 10:37:54
 */

import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

export default store
