<script>
    import navigation from './components/NavigationComponent.vue';
    import { auth } from './stores/auth';
    export default {
        name: 'App',
        components: {
            navigation,
    },
    data() {
        return{
            auth
        }
    }
    }
</script>
<template>
    <Header v-if="auth.is_authenticated"></Header>
    <div id="section-body">
        <navigation v-if="auth.is_authenticated"/>
        <router-view class="section-router"></router-view>
    </div>
    <div id="section-player" v-if="auth.is_authenticated">
        <AudioPlayer />
    </div>
</template>