<template>
    <section class="header">
        <p v-if="goBack">&lt;</p>
        <p v-if="logo" class="headerParagraph">food</p>
        <p v-if="title" class="headerParagraph">{{title}}</p>
    </section>
</template>

<script>
export default {
    props:["title","goBack","logo"],

    data(){
        return{
            show:false
        }
        
    }
    
}
</script>

<style lang="less">
    @colorBlue: #3190e8;
    .header{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-between;
        padding: .8rem 0;
        font-family:"Microsoft Yahei";
        text-align: center;
        color: #ffffff;
        background-color: @colorBlue;
    } 
    .headerParagraph{
        margin: auto 0;
        padding: 0 1rem;
        font-size: 1rem;
        font-weight: 900;
    }
</style>
