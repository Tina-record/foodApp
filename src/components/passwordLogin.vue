<template>
    <div>
        <Header title="密码登录"></Header>
        <main>
            <form class="loginForm">
                <div class="input_container">
                    <input type="text" placeholder="账号" v-model="username"/>
                </div>
                <div class="input_container">
                    <input type="text" placeholder="密码" v-model="password"/>
                    
                </div>
            </form>
            <div>
                <p class="loginParagraph">温馨提示：未注册过的账号，登录时将自动注册</p>
                <p class="loginParagraph">注册过的用户可凭账号密码登录</p>
                <button class="loginSubmit" v-on:click="checkform">登录</button>
                
            </div>
        </main>
    </div>
</template>

<script>
import Header from './header'
import axios from 'axios'

export default {
    components:{
        Header
    },
    data(){
        return{
            username:'',
            password:''           
        }
    },
    methods:{
        checkform:function(){
            var address = 'https://tina-record.github.io/foodApp/v1/signIn?'+'name=\"'+ this.username + '\"&password=\"'+ this.password +'\"'
            console.log(address);
            axios
                .get(address)
                .then(response => (this.checkResult(response)))
                .catch(function (error) {alert("网络无法访问");});
        },
        checkResult:function(response){
            console.log(response.data)
            if(response.data.statu === 200){
                
                //判断具体数据
                if(response.data.data[0].success === true){
                    alert("登录成功");
                }else{
                    alert("登录失败");
                }

            }else{
            console.log("服务器出错");
            }
        }
    }
}
</script>

<style lang="less">
    

    .loginForm{
        margin: 1rem 0 0;
    }

    .input_container{
        background-color: #ffffff;
        margin: .1rem auto;
        padding: .7rem .6rem;
    }
    .input_container input {
        border: none;
        outline: none;
        font-family: "Microsoft Yahei";
        color: #666;
    }
    .loginParagraph{
        padding: 0 .6rem;
        color: #ff0000;
        font-size: .4rem;
    }
    .loginSubmit{
        margin: 1rem  .4rem;
        padding: .6rem 8.5rem;
        border-radius:5px;
        font-weight: 600;
        background-color: #4cd964;
        color: #fff;
    }



</style>
