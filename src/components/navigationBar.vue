<template>
  <article>
    <Header goBack="true" signln="true"></Header>
    <nav></nav>
    <section>
      <ul>
        <li>
          <!-- <img src=""> -->
          <section>
            <header>
              <h4>
                <svg>图标</svg>商店1
              </h4>
              <ul>
                <li>
                  <iframe>保</iframe>
                </li>
                <li>
                  <iframe>准</iframe>
                </li>
                <li>
                  <iframe>付</iframe>
                </li>
              </ul>
            </header>
            <h5>
              <!--￥ HTML转义字符 &yen;-->
              <div>
                <p>&yen;20起送/</p>
                <p>配送费&yen;5</p>
              </div>
              <div>
                <p>10公里/</p>
                <p>3小时23分钟</p>
              </div>
            </h5>
          </section>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import header from "./header";

export default {
  components: {
    header
  }
};
</script>

<style>
</style>
