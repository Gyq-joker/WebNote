<template>
  <div>
    <!-- html -->
    <h2>测试对比的 h2 标签</h2>

    <!-- 自定义 -->
    <my>
      <template v-slot:myh2>
        h2标签成功了！
      </template>
    </my>
  </div>
</template>

<script>
import Vue from 'vue';
Vue.component('my', {
  render(h) {
    return h(
      'h2',
      {
        attrs: {
          title: this.title || '无',
          id: 101
        }
      },
      this.$slots.myh2
    )
  },
})
export default {
  name: 'renderTest',
  data(){
    return {

    }
  }
}
</script>