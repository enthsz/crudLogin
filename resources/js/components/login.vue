<template>
    <div class="d-flex justify-content-center vh-100 align-items-center">
        <b-card style="max-width: 500px; height: 300px;" class="mb-2 vw-100">
        <b-card-title class="text-center">Login</b-card-title>
        <b-col sm="12" class="p-2 mt-2sa">
            <label for="Email">Email</label>
            <b-form-input type="email" v-model="email" placeholder="Email"></b-form-input>

            <label for="Email">Password</label>
            <b-form-input type="password" placeholder="Password" v-model="password"></b-form-input>

            <b-button @click="loginUser" variant="primary" class="mt-2" style="width: 450px;">Login</b-button>

            <p class="text-center">Dont you have an account? <a style="cursor: pointer; text-decoration: underline; color: blue;" @click="goToRegister">Register here</a></p>
        </b-col>
    </b-card>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        name: 'login',

        data(){
            return{
                email: "",
                password: ""
            }
        },

        methods: {
            goToRegister(){
                this.$router.push('/register')
            },

            async loginUser(){
                const apiLink = 'http://127.0.0.1:8000/api/auth/login';
                try{
                    const response = await axios.post(apiLink, {
                    email: this.email,
                    password: this.password
                    
                });
                console.log(response)

                }catch(err){
                    
                }
                
            }   
        }
    }
</script>

<style scoped>

</style>