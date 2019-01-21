<template>
    <section class="header">
        <p class="headerParagraph">{{message}}</p>
    </section>
</template>

<script>
export default {
    props:["message"]
}
</script>

<style lang="less">
    @colorBlue: #3190e8;
    .header{
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
        background-color: @colorBlue;
    } 
    .headerParagraph{
        margin: auto;
        padding: 0;
        font-size: 1rem;
        font-weight: 900;
    }
</style>
