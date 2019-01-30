<template>
  <section>
    <Header title="首页" logo="true"></Header>
    <article class="address-body">
      <section class="current-city">
        <h4 class="hot-city">当前城市</h4>
        <div class="default-city">
          <p>{{defaultCity}}</p>
          <p>&gt;</p>
        </div>
      </section>
      <section class="popular-city">
        <h4>热门城市</h4>
        <ul>
          <li
            v-for="cityArr in cities"
            v-bind:key="cityArr.city"
            @click="clickCity(cityArr.city)"
          >{{cityArr.city}}</li>
        </ul>
      </section>
    </article>
  </section>
</template>

<script>
//引用本项目已有组件
import Header from "./header";
import axios from "axios";

export default {
  //本项目已有组件定义(与import ... from '...'结合)
  components: {
    Header
  },

  //数据定义
  data() {
    return {
      //渲染变量（指数据 与HTML 之间的桥梁 ）
      defaultCity: "",
      cities: ""
    };
  },

  //挂载后处理，然后传给渲染变量，由渲染变量传给HTML
  mounted() {
    this.checkCities();
  },

  //方法（或函数）定义
  methods: {
    //创建新函数为了获取数据
    checkCities: function() {
      var cities = "https://tina-record.github.io/foodApp/v1/cities";

      //axios 库
      axios
        .get(cities) //输入地址

        /*then() 指获取数据；
                response 指获取数据赋值给新变量 ；
                this 指本文件，也就是创建vue 文件名称（如address.vue）；
                decideCities() 创建新函数，把获取数据变量传到 decideCities 的实参里，然后decideCities函数进行处理；
                所以 this.decideCities() 指在本文件（如address.vue）里使用创建函数(decideCities)对数据进行处理。
                */
        .then(response => this.decideCities(response))
        .catch(function(error) {
          alert("网络无法访问");
        });
    },

    //对数据进行处理
    decideCities: function(response) {
      //个人理解response对象，有方法、属性。
      //判断数据当前网络状态
      if (response.data.statu === 200) {
        //获取当前城市数据
        this.defaultCity = response.data.data.default.city;

        //获取热门城市们数据
        this.cities = response.data.data.cities;
      } else {
        alert("服务器出错");
      }
    },

    //创建函数:给每个城市添加点击事件
    clickCity: function(cityName) {
      this.$router.push({ path: `/businesses/${cityName}` });
    }
  }
};
</script>

<style lang="less">
.address-body {
  margin: 0;
  padding: 2rem 0 0;
  font-family: "Microsoft Yahei";
  font-size: 1rem;
}

.current-city {
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0;
  background: #e4e4e4;

  .hot-city {
    padding: 0.8rem;
  }

  .default-city {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1rem solid #e4e4e4;
    border-bottom: 2rem solid #e4e4e4;
  }
}

.popular-city {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

ul {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  width: 24%;
  height: 2rem;
  text-align: center;
  list-style: none;
  border-top: 0.025rem solid #e4e4e4;
  border-left: 0.025rem solid #e4e4e4;
  text-align: center;
  background-color: #fff;
  color: #3190e8;
  font: 0.6rem/1.75rem "Microsoft YaHei";
}

li:nth-child(4n-3) {
  border-left: none;
}
</style>
