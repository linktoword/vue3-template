import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	resolve: {
		alias: {
			'@': path.resolve('src')
		}
	},
	//配置代理
	server: {
		host: '0.0.0.0',
		port: 3000,
		open: true,
		https: false,
		proxy: {}
	},

	// 生产环境打包配置
	//去除 console debugger
	build: {
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true
			}
		}
	}
})
