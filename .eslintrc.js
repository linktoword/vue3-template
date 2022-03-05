/*
 * @FileDescription: eslint配置
 * @Author: zsf
 * @Date: 2022-03-05 09:27:43
 * @LastEditors: zsf
 * @LastEditTime: 2022-03-05 11:26:12
 */
module.exports = {
	root: true, // 当前配置为根配置，将不再从上级文件夹查找配置
	env: {
		browser: true, // 设置为所需检查的代码是在浏览器环境运行的
		node: true, // 设置为所需检查的代码是nodejs环境运行的
		es6: true // 设置所需检查代码为es6语法书写
	},
	extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		ecmaVersion: 2022,
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
		sourceType: 'module'
	},
	globals: {
		// 忽略全局未定义的变量
		ElMessage: true
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 只有开发环境可以使用console
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 只有开发环境可以使用debugger
		'no-unused-vars': 0,
		'vue/html-closing-bracket-newline': 'off', // html右括号在新的一行
		'arrow-spacing': ['warn', { before: true, after: true }], // 箭头间距
		'no-const-assign': 2 // 不能修改使用const关键字声明的变量
	}
}
