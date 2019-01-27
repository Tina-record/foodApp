<template>
    
   <section>
        <header></header>
        <img v-bind:src="picPath"/>
        <img  v-for="pictureArr in picturePath" v-bind:key="pictureArr.imgPath" v-bind:src="pictureArr.imgPath"/>
        <ul>
            <li v-for="pictureArr in picturePath" v-bind:key="pictureArr.imgPath">{{pictureArr.imgPath}}</li>
        </ul>

    </section>

        <!-- <li v-for="cityArr in cities" v-bind:key="cityArr.city">{{cityArr.city}}</li> -->
   
</template>

<script>
import Header from './header'

export default {
    components:{
        Header
    },
    mounted(){
        console.log(this.picturePath);
    },
    data(){
        return{
            picPath:"static/img/201901071900.png",
            picturePath: [{
                "name" : "dessert-drink",
                "imgPath" : "./static/img/201901071900.png"
            },{
                "name" : "convenient-store",
                "imgPath" : "./static/img/201901071901.png"
            },{
                "name" : "cate",
                "imgPath" : "./static/img/201901071902.png"
            },{
                "name" : "short-order",
                "imgPath" : "./static/img/201901071903.png"
            },{
                "name" : "preferential",
                "imgPath" : "./static/img/201901071904.png"
            },{
                "name" : "transport-fee",
                "imgPath" : "./static/img/201901071905.png"
            },{
                "name" : "teatime",
                "imgPath" : "./static/img/201901071906.png"
            },{
                "name" : "vegetables-fruit",
                "imgPath" : "./static/img/201901071907.png"
            },{
                "name" : "dessert",
                "imgPath" : "./static/img/201901071908.png"
            },{
                "name" : "soup",
                "imgPath" : "./static/img/201901071909.png"
            },{
                "name" : "flower",
                "imgPath" : "./static/img/201901071910.png"
            },{
                "name" : "Western-style-food",
                "imgPath" : "./static/img/201901071911.png"
            },{
                "name" : "snacks",
                "imgPath" : "./static/img/201901071912.png"
            },{
                "name" : "home-cooking",
                "imgPath" : "./static/img/201901071913.png"
            },{
                "name" : "culinary",
                "imgPath" : "./static/img/201901071914.png"
            },{
                "name" : "barbecue",
                "imgPath" : "./static/img/201901071915.png"
            }]  
        }
    },

}
</script>

<style>

</style>
