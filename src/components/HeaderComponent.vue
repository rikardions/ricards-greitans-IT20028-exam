<template>
    <div id="main-header" class="active">
        <div class="wrapper-logo">
            <img src="@/assets/logo.svg"/>
            <h2>KRAKEN.FM</h2>
            <p>{{is_authenticated()}}</p>
        </div>
        <div class="wrapper-profile">
            <div class="section-user">
                <span class="avatar"></span>
                <h3 id="txt-full-name" >{{getFullName()}}</h3>
            </div>
            <button id="btn-logout" @click="logout()">LOGOUT</button>
        </div>
    </div>
</template>
<script>
    import {auth} from "../stores/auth.js";
    export default {
        methods: {
            getFullName(){
                return auth.user.name + " " + auth.user.surname;
            },
            logout(){
                auth.logout();
            },
            is_authenticated(){
                return auth.is_authenticated;
            }
        }
    }
</script>