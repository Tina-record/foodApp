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

        <section v-for= "near in m_nearByBusinesses" :key='near.name'>
        <section class='businessBar'>
            <img v-bind:src='near.logoPath' class='busLogo'/>
            <section class='text'>
            <article class='businessName'>{{near.name}}</article>
            <!-- 星级
            <starLevel level=near.details.starClass>
            </starLevel>-->
            <!-- 蜂鸟专送 -->
            <!-- <Hummingbird transport = near.details.appointTransport></Hummingbird> -->
            <h5>
            <p><span>￥{{near.details.designationPrice}}起送/配送费约￥{{near.details.transportFee}}</span>
            </p>
            <p><span class='gray'>{{near.details.distance|currencydecimal}}公里 /</span>
            <span class='eleColor'>{{near.details.time}}</span>
            </p>
            </h5>
            </section>
        </section>
        </section>
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
                classifyShow:'',
                m_nearByBusinesses:[]
            }
        },

        mounted(){
            this.checkData();
            this.GetNearbyBusinesses();
        },
        filters: {
            currencydecimal (value) {
                value = value /1000;
                return value.toFixed(1)
            }
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
            },
            GetNearbyBusinesses:function(){
                axios.get('https://tina-record.github.io/foodApp/v1/businesses/businessesShow')
                    .then(response => (this.decideNearbyBusinesses(response)))
                    .catch(function(error){alert("网络无法访问")})
            },
            decideNearbyBusinesses:function(response){
                console.log(response.data)
                if(response.data.statu === 200){

                    //获取当前城市数据
                    this.m_nearByBusinesses = response.data.data;
                    console.log(this.m_nearByBusinesses)


                }else{
                    alert("服务器出错");
                }
            }
        }
    }
</script>


<style lang="less">
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


.businessBar{
    display: flex;
    padding: 0.5rem 0;
   
    border-bottom: 0.01rem solid #ddd;

    .busLogo{
    height:4rem;
    width:4rem;
    flex:1;
    }


    .text{
         flex:9;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        margin:0 0.5rem;
        .businessName{
            font-weight: 900;
        }

        h5{
            display:flex;
            justify-content: space-between;
            width:100%;
            margin: 0;
            color: #555;
            font-size: 0.65rem;
            p{
            display: inline;
            .eleColor{
            color:hsl(220, 50%, 50%);
            }
            
            
            font-weight: 100;
            .gray{
                color:#777
            }
        }
        }
        

    }

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
