<template>
    <div class="color">
        <header><p>密码登录</p></header>
        <main>
            <div>
                <p>账号</p>
                <div>
                    <p>密码</p>
                    <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch> 
                </div>
            </div>
            <div>
                <p>温馨提示：未注册过的账号，登录时将自动注册</p>
                <p>注册过的用户可凭账号密码登录</p>
                <submit>登录</submit>
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
    .color{
        background-color: #f5f5f5;
    }
    header{
        display: flex;
        align-content: center;
        justify-content: center;
        /* margin: 0 auto; */
        padding: 0;
        height: 3rem;
        font-family:"Microsoft Yahei";
        text-align: center;
        color: #ffffff;
        background-color: #3190e8;
    }

</style>
