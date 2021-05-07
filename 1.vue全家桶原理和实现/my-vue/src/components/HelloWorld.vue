<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <my></my>
    <button @click="tipsShow = true">打开</button>
    <!-- 
      1. 在vue2.4+的版本中 :tipsShow.sync的语法，实际上相当于 @update:show="修改后的值" 
      2. 子组件在使用的时候，注意要把父组件的值绑定在子组件上，如 :tipsShow="tipsShow"
    -->
    <message v-if="tipsShow" :tipsShow.sync="tipsShow">
      <!-- 具名插槽的使用，v-slot最终会渲染到 slot name 中对应的地方 -->
      <template v-slot:title>
        <strong>插槽标题</strong>
      </template>

      <template v-slot:default>
        <span>插槽内容</span>
      </template>
    </message>
  </div>
</template>

<script>
import Vue from 'vue';
import my from './renderTest'
Vue.component('message', {
  props: ['tipsShow'],
  data() {
    return {

    }
  },
  // 这里在使用 template 的时候，要在运行环境里使用 编译器 去运行，不然会编译不通过导致报错
  // 报错解决方式1：在主目录下新增 vue.config.js 文件，新增属性 runtimeCompiler: true
  // 解决方式2：通过 webpack 的配置项去解决：
  // resolve: {
  //   extensions: ['.js', '.vue', '.json'],
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js',
  //     '@': resolve('src'),
  //   }
  // },
  template: `
    <div class="message-view" v-if="tipsShow">
      <!-- 具名插槽 -->
      <slot name="title"></slot>
      <!-- slot可理解为占位符，内容如何，通过标签内容去定  -->
      <slot></slot>
      <button class="close-message" @click="$emit('update:tipsShow', false)">关闭弹窗</button>
    </div>
  `
});
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      tipsShow: false,
    }
  },
  components: {
    my
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.message-view{
  width: 100%;
  height: 50px;
  color: #FFF;
  font-size: 16px;
  background-color: #42b983;
}
</style>
