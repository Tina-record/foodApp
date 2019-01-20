<template>
    <div>
        <header>
            <p class="pop">密码登录</p>
        </header>
        <main>
            <form class="loginForm">
                <div class="input_container">
                    <input type="text" placeholder="账号"/>
                </div>
                <div class="input_container">
                    <input type="text" placeholder="密码"/>
                    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch> 
                </div>
            </form>
            <div>
                <p class="loginParagraph">温馨提示：未注册过的账号，登录时将自动注册</p>
                <p class="loginParagraph">注册过的用户可凭账号密码登录</p>
                <submit class="loginSubmit">登录</submit>
                
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
}
</script>

<style>

    header{
        width: 100%;
        height: 1.95rem;
        display: flex;
        align-content: center;
        justify-content: center;
        margin: 0 auto;
        padding: 0;
        font-family:"Microsoft Yahei";
        text-align: center;
        color: #ffffff;
        background-color: #3190e8;
    } 
    .pop{
        margin: auto;
        padding: 0;
        font-size: 1rem;
        font-weight: 900;
        /* font: normal 1rem  "Microsoft Yahei"； */
    }

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
        background-color: #4cd964;
        color: #fff;
    }



</style>
