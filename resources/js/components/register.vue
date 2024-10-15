<template>
    <div>
        <font-awesome-icon :icon="['fas', 'backward']" class="backward" @click="goToLogin" />

        <div class="d-flex justify-content-center vh-100 align-items-center">
            <b-card style="max-width: 500px; height: 400px;" class="mb-2 vw-100">
                <b-card-title class="text-center">Register</b-card-title>
                <b-col sm="12" class="p-2 mt-2sa">
                    <label for="Name">Name</label>
                    <b-form-input type="text" placeholder="Name" v-model="name"></b-form-input>
                    <p v-if="errors.name" class="text-danger">{{ errors.name }}</p>

                    <label for="Email">Email</label>
                    <b-form-input type="email" placeholder="Email" v-model="email"></b-form-input>
                    <p v-if="errors.email" class="text-danger">{{ errors.email }}</p>

                    <label for="Password">Password</label>
                    <b-form-input type="password" placeholder="Password" v-model="password"></b-form-input>
                    <p v-if="errors.password" class="text-danger">{{ errors.password }}</p>

                    <label for="confirmPassword">Password Confirmation</label>
                    <b-form-input type="password" placeholder="Password Confirmation" v-model="password_confirmation"></b-form-input>
                    <p v-if="errors.password_confirmation" class="text-danger">{{ errors.password_confirmation }}</p>

                    <b-button @click="register" variant="primary" class="mt-2" style="width: 450px;">Register</b-button>
                </b-col>
            </b-card>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    name: 'Register',
    data() {
        return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        }
    },
    methods: {
        goToLogin() {
            this.$router.push('/login');
        },
        async register() {
            const apiLink = 'http://127.0.0.1:8000/api/auth/register';
            try {
                const response = await axios.post(apiLink, {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    c_password: this.password_confirmation
                });

                if (response.status == 200) {
                    this.$router.push('/login');
                }
            } catch (err){

            }
               
        }
    }
}
</script>


<style scoped>
.backward{
    height: 40px;
    padding: 5px;
    cursor: pointer;
}
</style>