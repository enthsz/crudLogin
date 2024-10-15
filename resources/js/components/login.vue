<template>
    <div class="d-flex justify-content-center vh-100 align-items-center">
        <b-card style="max-width: 500px; height: 300px;" class="mb-2 vw-100">
        <b-card-title class="text-center">Login</b-card-title>
        <b-col sm="12" class="p-2 mt-2sa">
            <label for="Email">Email</label>
            <b-form-input type="email" placeholder="Email"></b-form-input>

            <label for="Email">Password</label>
            <b-form-input type="password" placeholder="Password"></b-form-input>

            <b-button variant="primary" class="mt-2" style="width: 450px;">Login</b-button>

            <p class="text-center">Dont you have an account? <a style="cursor: pointer; text-decoration: underline; color: blue;" @click="goToRegister">Register here</a></p>
        </b-col>
    </b-card>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name: 'login',

        methods: {
            goToRegister(){
                this.$router.push('/register')
            }
        }
    }
</script>

<style scoped>

</style>