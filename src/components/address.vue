<template>
    <section>
        <Header logo=true title="首页" goBack=true></Header>
        <router-link to="/passwordLogin"></router-link>
        <article class="main">

            <section class="currentCity">
                <h4 class="hotCity">当前城市</h4>
                <div class="defaultCity">
                    <p>{{defaultCity}}</p>
                    <p>&gt;</p>
                </div>
            </section>
            <section class="popularCity">
                <h4>热门城市</h4>
                <ul>
                    <li v-for="cityArr in cities" v-bind:key="cityArr.city">{{cityArr.city}}</li>

                </ul>
            </section>
        </article>
    </section>
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
            //渲染变量（指数据 与HTML 之间的桥梁 ）
            defaultCity:'',
            cities:''      
        }
    },

    //挂载后处理，然后传给渲染变量，由渲染变量传给HTML
    mounted(){
        this.checkCities()
    },
    
    methods:{
        checkCities:function(){
            var cities = 'https://tina-record.github.io/foodApp/v1/cities'

            axios
                .get(cities)  //输入地址

                /*then() 指获取数据；
                response 指获取数据赋值给新变量 ；
                this 指本文件，也就是创建vue 文件名称（如address.vue）；
                decideCities() 创建新函数，把获取数据变量传到 decideCities 的实参里，然后decideCities函数进行处理；
                所以 this.decideCities() 指在本文件（如address.vue）里使用创建函数(decideCities)对数据进行处理。
                */
                .then(response => (this.decideCities(response))) 
                .catch(function (error) {alert("网络无法访问");});
        },

        //对数据进行处理
        decideCities:function(response){
           
            //个人理解response对象，有方法、属性。
            //判断数据当前网络状态
            if(response.data.statu === 200){
                
                //获取当前城市数据
                this.defaultCity = response.data.data.default.city;

                //获取热门城市们数据
                this.cities = response.data.data.cities;

            }else{
                alert("服务器出错");
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
