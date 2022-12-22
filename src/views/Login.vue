<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" placeholder="E-mail" v-model="email" />
            <input id="input-password" type="password" placeholder="Password" v-model="password"/>
            <button id="btn-submit" type="submit" v-bind:disabled="isInputEmpty(email, password)" @click="authenticate(email, password)">LOGIN</button>
        </form>
    </div>
</template>
<script>
    import {auth} from '@/stores/auth.js'
    export default{
        methods: {
            authenticate(email, password){
                auth.authenticate(email, password);
            },
            isInputEmpty(email, password){
                if(email != "" && password != ""){
                    return false;
                }
                return true;
            }
        },
        data(){
            return {
                email: "",
                password: ""
            }
        }
    }
</script>