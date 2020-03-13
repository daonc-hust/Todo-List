<template>
  <el-card :body-style="{ padding: '12px' }" class="todo-item-box">
    <div class="todo-item">
      <div class="content">
        <p>{{ new Date().toLocaleTimeString()}}</p>
        <p :style="todo.isDone && doneStyle">{{todo.title}}</p>
      </div>
      <div class="action-box" @mouseenter="showAction" @mouseleave="hideAction">
        <ul class="action-list">
          <li :style="isShowAction ? toRight : easeOut">
            <el-button @click="handleRemoveTodo(todo)" size="40" class="remove-todo-btn" circle icon="el-icon-delete"/>
          </li>
          <li :style="isShowAction ? toLeft : easeOut">
            <el-button @click="handleEditTodo" size="40" class="edit-todo-btn" circle icon="el-icon-edit"/>
          </li>
        </ul>
        <div class="action">
          <el-button
                  @click="checkDone(todo)"
                  size="40"
                  class="action-todo-btn"
                  circle
                  icon="el-icon-check"
                  :style="todo.isDone ? green : none"
          />
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
  import store from './../store'
  export default {
    name: 'TodoItem',
    props: {
      todo: Object,
    },
    data() {
      return {
        doneStyle: {
          textDecoration: 'line-through',
          color: '#ABB0BB'
        },
        green: {
          backgroundColor: '#42b983',
          color: 'white'
        },
        none: {
          backgroundColor: 'white',
        },
        isShowAction: false,
        toLeft: {
          transform: 'translateX(-50px)',
          transition: '0.5s',
          zIndex: 99999,
          boxShadow: '0 2px 12px 0 rgba(0,0,0,.2)'
        },
        toRight: {
          transform: 'translateX(50px)',
          transition: '0.5s',
          zIndex: 99999,
          boxShadow: '0 2px 12px 0 rgba(0,0,0,.2)'
        },
        easeOut: {
          transition: '0.5s'
        }
      }
    },
    methods: {
      showAction: function () {
        this.isShowAction = true
      },
      hideAction: function () {
        this.isShowAction = false
      },
      handleEditTodo: function() {

      },
      handleRemoveTodo: function(todo) {
        store.dispatch('removeTodo', todo)
      },
      checkDone: function (todo) {
        store.dispatch('changeStatus', todo)
      }
    },
  }
</script>

<style lang="less" scoped>
  .todo-item-box {
    width: 600px;
    margin-bottom: 10px;

    &:hover {
      transform: scale(1.05);
      transition: 0.5s;
      border-left: #42b983 4px solid;
      cursor: pointer;
    }
  }

  .todo-item {
    display: flex;
    flex-direction: row;
  }

  .content {
    display: inline-block;
    text-align: left;
    flex: 8;
    padding-left: 15px;

    p:nth-child(1) {
      color: #878787a6;
      line-height: 1.25rem;
    }

    p:nth-child(2) {
      line-height: 1.25rem;
      font-weight: 600;
    }
  }

  .action-box {
    display: inline-block;
    flex: 2;
    position: relative;
  }

  .action-todo-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform .5s ease-out;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .2);
  }

  .action-list {
    list-style: none;
    position: relative;

    .remove-todo-btn:hover {
      background-color: #f56c6c;
      color: white;
    }

    .edit-todo-btn:hover {
      background-color: #3a8ee6;
      color: white;
    }

    li:nth-child(1) {
      position: absolute;
      top: 8px;
      left: 36px;
      /*box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);*/
      border-radius: 50%;
      /*top: 21px;*/
    }

    li:nth-child(2) {
      position: absolute;
      top: 8px;
      left: 36px;
      /*box-shadow: 0 2px 12px 0 rgba(0,0,0,.2);*/
      border-radius: 50%;
      /*top: 21px;*/
    }
  }

  .translate-enter-active, .translate-enter-leave-to {
    /*transition: opacity .5s;*/
    transform: translateX(-40px);
    transition: 0.5s;
  }

  .translate-leave-to /* .fade-leave-active below version 2.1.8 */ {
    /*opacity: 0;*/
    /*transition: ease-out 0.5s;*/
  }

</style>