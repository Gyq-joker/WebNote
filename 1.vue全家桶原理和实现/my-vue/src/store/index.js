import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  // 想要修改 state，只能通过 mutations 
  // 注意：mutation 必须是同步函数
  // this.$store.commit()
  // commit里面用的是mutations定义的key,如 commit('login')
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    loginOut(state) {
      state.isLogin = false;
    }
  },
  // action 是类似于 mutation，但不同在于：
  // 1. action 提交的是 mutation，而不是直接去变更状态
  // 2. action 可以包含任意的异步操作
  actions: {
    // 1：commit：action函数接受一个和store实例具有相同方法和属性的
    // context 对象，可以通过 context.commit 提交一个mutation
    // 也可以通过 context.state 和 context.getters 来获取 state
    // 和 getters。
    // 2：我们也可以通过解构的方式，去使用，如下示例：
    login({ commit }, username) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username) {
            commit('login')
            resolve({ name: username, id: 1 })
          } else {
            reject()
          }
        }, 1000)
      })
    }
  },
  modules: {
  }
})
