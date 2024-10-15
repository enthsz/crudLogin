<template>
    <div class="input-group ml-2">
        <b-form-input class="form-control" v-model="userInput" placeholder="Insert the task"></b-form-input>
        <font-awesome-icon @click="addTask" class="squarePlus" v-bind:class="[userInput ? 'active' : 'inactive', 'plus' ]" :icon="['fas', 'square-plus']"  />
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                userInput: ""
            }
        },

        methods: {
            addTask(){
                if (this.userInput == ""){
                    return;
                }

                axios.post('api/tasks/create', {
                    title: this.userInput
                })

                .then(res =>{
                    if (res.status == 200){
                        this.userInput = ""
                        this.$emit('task-added')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
.form-control{
    margin-right: 10px;
}

.squarePlus{
    height: 45px;
}

.active{
    color: green;
    cursor: pointer;
}


</style>