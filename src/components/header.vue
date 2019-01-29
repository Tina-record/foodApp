<template>
    <section class="header">
        <div class="headerLeft">
            <p v-if="goBack" @click="cheakGo">&lt;</p>
            <p v-if="logo"></p>
        </div>
        <div class="headerCenter">
            <p v-if="title" >{{title}}</p>
        </div>
        <div class="headerRight">
            <p v-if="signln" >
                <router-link to="/passwordLogin">
                    登录|注册
                </router-link>
            </p>
        </div>
        
    </section>
</template>

<script>
export default {
    props:["title","goBack","logo","signln"],

    data(){
        return{
            show:false
        }
    },
    methods:{
        cheakGo:function(){
            this.$router.go(-1)
        }
    }

    
}
</script>

<style lang="less">
    @colorBlue: #3190e8;
    .header{
        width: 100%;
        height: 2.5rem;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0;
        font-family:"Microsoft Yahei";
        text-align: center;
        color: #ffffff;
        background: @colorBlue;

    } 

    .headerLeft,.headerCenter,.headerRight{           
        margin: 0;
        padding: 0 1rem; 
        font-size: 1rem;
        font-weight: 900;
    }
    p{
        margin: 0;
        padding: 0;
    }

</style>
