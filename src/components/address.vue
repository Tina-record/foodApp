<template>
    <div>
        
        <Header logo=true title="首页" goBack=true></Header>
        <router-link to="/passwordLogin"></router-link>
        <article class="main">
            <button @click="checkCities">获取城市数据</button>
            <section class="currentCity">
                <h4 class="hotCity">当前城市</h4>
                <div class="defaultCity">
                    <p v-model="defaultCity"></p>
                    <p>&gt;</p>
                </div>
            </section>
            <section class="popularCity">
                <h4>热门城市</h4>
                <ul>
                    <!-- <li v-for="cityArr in cities">{{cityArr.city }}</li> -->
                    <li>北</li>
                    <li>上</li>
                    <li>广</li>
                    <li>杭</li>
                    <li>成</li>
                    <li>重</li>
                    <li>长</li>
                    <li>佛</li>
                </ul>
            </section>
        </article>
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
            defaultCity:''        
        }
    },
    methods:{
        checkCities:function(){
            var cities = 'https://tina-record.github.io/foodApp/v1/cities'
            console.log(cities);
            axios
                .get(cities)
                .then(response => (this.decideCities(response)))
                .catch(function (error) {alert("网络无法访问");});
        },
        decideCities:function(response){
            console.log(response.data.data)
             console.log(response.data)
            if(response.data.statu === 200){
                
                console.log("suc")

            }else{
            console.log("服务器出错");
            }
        }
    }



}
</script>

<style>
    .main{
        margin: 0;
        padding: 0;
        font-family: "Microsoft Yahei";
        font-size: 1rem;
    }

    .currentCity{
        display: flex;
        flex-direction: column;
        padding: 0 .8rem;
    }
    .defaultCity{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .popularCity{
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }

    .hotCity{
        padding: 0.8rem;
    }

    ul {
        width:100%;
        margin: 0;
        padding: 0;
        list-style:none;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    li{
        width:24%;
        height: 2rem;
        text-align: center;
        list-style:none;
        border-top:0.025rem solid #e4e4e4;
        border-left:0.025rem solid #e4e4e4;
        text-align: center;
        background-color: #fff; 
        color: #3190e8;
        font: 0.6rem/1.75rem "Microsoft YaHei";
    }

    li:nth-child(4n-3){
        border-left:none;
    }


</style>
