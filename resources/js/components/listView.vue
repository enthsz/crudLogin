<template>
  <b-table hover :items="localTasks" :fields="fields">
    <template #cell(title)="data">
      <b-form-input 
        v-if="localTasks[data.index].isEdit" 
        type="text" 
        v-model="localTasks[data.index].title" 
        @keyup.enter="saveEdit(data)" 
      ></b-form-input>
      <span v-else>{{ data.value }}</span>
    </template>

    <!-- Ações -->
    <template v-slot:cell(actions)="data">
      <font-awesome-icon 
        v-if="localTasks[data.index].isEdit" 
        @click="saveEdit(data)" 
        :icon="['fas', 'check']" 
        class="check"
      />
      
      <font-awesome-icon
      v-if="localTasks[data.index].isEdit"
      @click="cancelEdit(data)"
      class="cancel" 
      :icon="['fas', 'x']" />
      
      <font-awesome-icon 
        v-if="!localTasks[data.index].isEdit" 
        @click="editRowHandler(data)" 
        :icon="['fas', 'pencil']" 
        class="pencil"
      />

      <font-awesome-icon
        v-if="!localTasks[data.index].isEdit" 
        @click="removeTask(data.item.id)" 
        class="trash" 
        :icon="['fas', 'trash']" 
      />


    </template>
  </b-table>
</template>

<script>
  import axios from 'axios';

  export default {
    props: {
      tasks: Array
    },
    data() {
      return {
        localTasks: [], 
        fields: [
          { key: 'id', label: 'ID' },
          { key: 'title', label: 'Title' },
          { key: 'actions', label: 'Actions' }
        ]
      };
    },
    mounted() {
      this.localTasks = this.tasks.map(task => ({ ...task, isEdit: false }));
    },
    methods: {
      editRowHandler(data) {
        this.localTasks.forEach((task, index) => {
          if (index === data.index) {
            task.isEdit = true;
          } else {
            task.isEdit = false; 
          }
        });
      },
      saveEdit(data) {
        const task = this.localTasks[data.index];
        task.isEdit = false;

        axios.put(`api/task/${task.id}`, { title: task.title })
          .then(res => {
            if (res.status === 200) {
              this.$emit('itemChanged'); 
            }
          })
          .catch(err => {
            console.log(err);
          });
      },
      cancelEdit(data) {
        const task = this.localTasks[data.index];
        task.isEdit = false;
      },
      removeTask(id) {
        axios.delete('api/task/' + id)
          .then(res => {
            if (res.status === 200) {
              this.$emit('itemChanged');
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    watch: {
      tasks(newTasks) {
        // Atualiza a lista local se a prop tasks mudar
        this.localTasks = newTasks.map(task => ({ ...task, isEdit: false }));
      }
    }
  };
</script>

<style scoped>
.pencil {
  height: 30px;
  margin-right: 10px;
}

.pencil:hover {
  color: gray;
  cursor: pointer;
}

.check {
  height: 30px;
  margin-right: 10px;
}

.check:hover {
  color: green;
  cursor: pointer;
}

.trash {
  height: 30px;
}

.trash:hover {
  color: red;
  cursor: pointer;
}

.cancel{
  height: 30px;
}

.cancel:hover{
  color: red;
  cursor: pointer;
}
</style>
