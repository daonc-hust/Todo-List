import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [
      {
        title: 'Hello world',
        isDone: false
      },
      {
        title: 'Hello world 2',
        isDone: true
      },
      {
        title: 'Hello world 3',
        isDone: false
      }
    ]
  },
  getters: {
    todoList: (state) => {
      return state.todoList
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todoList = [...state.todoList, todo]
    },
    removeTodo(state, todo) {
      state.todoList.splice(state.todoList.indexOf(todo), 1)
    },
    // editTodo(state, todo) {
    //   const newTodo = {}
    // },
    changeStatus(state, todo) {
      const newTodo = todo.isDone ? { ...todo, isDone: false } : { ...todo, isDone: true }
      state.todoList.splice(state.todoList.indexOf(todo), 1, newTodo)
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      console.log('add ====', todo)
      commit('addTodo', todo)
    },
    removeTodo({ commit }, todo) {
      commit('removeTodo', todo)
    },
    changeStatus({ commit }, todo) {
      commit('changeStatus', todo)
    }
  },
  modules: {}
})
