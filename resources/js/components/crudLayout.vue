<!-- resources/js/components/ExampleComponent.vue -->
<template>
    <div>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded w-50">
          <div class="card-body ">
            <h3 class="card-title text-center mb-4">CRUD</h3>
            <createTask @task-added="fetchTasks()"/>
            <listView @itemChanged="fetchTasks()" :tasks="tasks"/>
          </div>
        </div>
      </div>
    </div>

    
    
    
</template>
  
<script>

  import createTask from './createTask.vue'
  import listView from './listView.vue'
  import axios from 'axios'

  export default {
    name: 'crudLayout',

    components: {
      createTask,
      listView,
      
    },

    data(){
      return {
        tasks: []
      }
    },

    created(){
      this.fetchTasks();
    },

    methods: {
      fetchTasks(){
        axios.get('api/tasks')
        .then(res => {
          if (res.status === 200){
            this.tasks = res.data
          }else{
            this.tasks = []
          }
        })
      }
    }

  };
</script>
  
<style scoped>
  body, html {
    height: 100%;
  }

  
</style>
  