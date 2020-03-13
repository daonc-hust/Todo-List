<template>
  <div id="app">
    <div class="todo-box">
      <div class="heading">
        <p>{{new Date().toLocaleString()}}</p>
        <!--        <i class="el-icon-circle-plus-outline"></i>-->
        <el-button @click="drawer=true" class="add-todo-btn" circle icon="el-icon-plus" slot="reference"/>
        <el-drawer
                class="drawer-add-todo"
                size="30%"
                title="JUST DO IT!"
                direction="ttb"
                :visible.sync="drawer"
        >
          <el-form :model="formAddTodo" class="form-add-todo">
            <el-form-item>
              <el-input @keydown.enter="addTodo(value)" v-model="formAddTodo.title" placeholder="To do..."></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleAddTodo({title: formAddTodo.title, isDone: false })">Add</el-button>
            </el-form-item>
          </el-form>
        </el-drawer>
      </div>
      <div class="todo-list" v-for="(todo, index) in todoList" :key="todo.title + index">
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script>
  import TodoItem from './components/TodoItem.vue'
  import { mapGetters, mapActions } from 'vuex'
  import store from './../src/store'

  export default {
    name: 'app',
    data() {
      return {
        drawer: false,
        formAddTodo: {
          title: '',
          isDone: false
        }
      }
    },
    computed: {
      ...mapGetters([
        'todoList',
        // ...
      ])
    },
    methods: {
      ...mapActions([
        'addTodo'
      ]),
      handleAddTodo: function(todo) {
        store.dispatch('addTodo', todo)
      }
    },
    components: {
      TodoItem
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .form-add-todo {
    width: 500px;
    margin: 0 auto;
  }

  .el-drawer__header {
    margin-bottom: 15px !important;
  }

  #el-drawer__title {
    span {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  /*.el-drawer__close-btn {*/
  /*  border-radius: 50%;*/
  /*  width: 40px;*/
  /*  height: 40px;*/
  /*  &:hover {*/
  /*    background: #f56c6c;*/
  /*  }*/
  /*}*/

  .drawer-add-todo {
    width: 600px;
    margin: 0 auto !important;
  }

  .heading {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    position: relative;
    height: 90px;
    background: #36D1DC; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #5B86E5, #36D1DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    p {
      color: white;
      font-size: 1.5rem;
      position: absolute;
      top: 24%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .add-todo-btn {
      position: absolute;
      left: 15px;
      top: 25px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2);

      &:hover {
        background: #42b983;
        color: white;
      }
    }
  }

  .todo-box {
    width: 600px;
    margin: 8% auto 0;
  }
</style>
