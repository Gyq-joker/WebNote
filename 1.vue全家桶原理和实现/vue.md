# 1.关于Vue全家桶以及原理
## Question:  
### 1. vue-router 这个插件里面需要做什么？
### 2. 为什么要在配置项(main.js)中加入 router 实例？
### 3. 为什么要用 router-view？
### 4. 页面跳转为什么只是刷新内容，而不刷新页面？
### 5. render函数的使用 和 Vue.component 下的 props 属性
### 6. this.$slots.default 代表的含义
### 7. mixin 混入模式
### 8. vue 和 vue-router 为什么是强相关的？
* Vue.util.defineReactive
* vue.mixin({})












# 2. Vue 通过 slot插槽 进行内容分发和事件处理
``` html
<body>
  <message :show.sync="show">消息提示，success！</message>
</body>
<script>
  // 具体例子可以看当前目录下的 HelloWorld 组件
  Vue.component('message', {
    props: ['show'],
    template: `
      <div class="message-view" v-if="show">
        // slot可理解为占位符，内容如何，通过标签内容去定 
        <slot></slot>
        <button class="close-message" @click="$emit('update:show', false)">关闭弹窗</button>
      </div>
    `
  });
  
  new Vue({
    data() {
      return {
        show: false
      }
    },
    methods: {

    }
  })
</script>
```