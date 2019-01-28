<template>
    
   <section>
        <Header :title="this.city" goBack=true></Header>
        <section class="foodTypesContainer">
            <div class="swiperSlide">
                <a class="pictureLink" v-for="classifyShowArr in classifyShow" v-bind:key="classifyShowArr.imgPath" >
                    <figure class="pictureContainer">
                        <img class="picture" :src="classifyShowArr.imgPath"/>
                        <figcaption class="pictureTitle">{{classifyShowArr.name}}</figcaption>
                    </figure>
                </a>

            </div>
        </section>
        <footer></footer>

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
            city:"深圳",
            classifyShow:''

        }
    },

    mounted(){
        this.checkData()
    },

    methods:{
        //创建新函数为了获取数据
        checkData:function(){

            var url = 'https://tina-record.github.io/foodApp/v1/commodity/classify?'+'city=\"'+ this.city +'\"';
            console.log(url);
            axios
                .get(url)
                .then(response => (this.checkResult(response)))
                .catch(function (error) {alert("网络无法访问");});
        },
        checkResult:function(response){
            console.log(response.data)
            if(response.data.statu === 200){
                this.classifyShow = response.data.data;
                console.log(this.classifyShow)
            }else{
            console.log("服务器出错");
            }
        }
    }
}
    
</script>

<style>
    .swiperSlide{
            display: flex;
            align-content: center;
            justify-content: center;
            margin: 0;
            padding: 0;
        }

        .swiperSlide{
            width: 100%;
            display: flex;
            flex-wrap:wrap;
            margin: 0;
            padding: 0;
        }


        .pictureLink{
            width: 25%;
            display: flex;
            justify-content: space-between;
            max-width: 35rem;
            margin: 0;
            padding: 0;
        }

        .pictureContainer{
            width: 10rem;
            height: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 0;
        }

        .picture{
            width: 3rem;
            height: 3rem;
            padding-bottom: 0.5rem;
        }
        .pictureTitle{

            font:1rem "Microsoft YaHei";
        }
</style>
