<template>
    <div id="auth-page" class="page">
        <h3>Authenticate with google</h3>
        <button @click="authenticate('google')">authenticate</button>
    </div>
</template>

<script>
import {EventBus} from '../main';
import '../globals.js';

export default {
    name: 'Auth',
    data () {
        return {
            token: '',
        }
    },
    methods: {
        authenticate(provider){
                this.$auth.authenticate(provider).then((res) => {
                    console.log("Authenticated", res);
                    this.token = res.access_token;
                    this.$store.commit('addToken', {token: res.access_token});
                    this.$ls.set('token', res.access_token);
                    this.$router.push('/');
                })
            },
        },
        beforeMount(){
            if(this.$ls.get('token')){
                console.log("Has Token");
            } else {
                console.log("Does not have token");
            }
        }
}
</script>

<style scoped>
    #auth-page{
        margin-top: 40px;
        min-height: calc(100vh - 260px);
    }

    button{
        margin-top: 60px;
    }
</style>