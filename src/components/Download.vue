<template>
    <div class="download_page">
        <header class="header">
            <p class="p">下载</p>
        </header>
        <main>
            <div class="dowload_container">
                <img src="../assets/food.png" class="logo_img">
                <p>下载美食App</p>
            </div>
            <button class="determine">下载</button>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style>
   .header{
        margin: 0 auto;
        padding: 0;
        height: 3rem;
        background-color: #3190e8;
        font-family:"Microsoft Yahei";
        display: flex;
        align-content: center;
        justify-content: center;
    } 
  
    .download_page{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 202;
        padding-top: 1.95rem;
    }
    .dowload_container{
        text-align: center;
    }

    .logo_img{
        border-radius: 1rem;
        margin-top: 1rem;
    }
    p{
        /* @include sc(.8rem, #666); */
        margin-bottom: 1rem;
    }
    .determine{
        background-color: #4cd964;
        font-size: 0.7rem;
        color: #fff;
        text-align: center;
        margin: 0 .7rem;
        line-height: 1.8rem;
        border-radius: 0.2rem;
        margin-top: 0.5rem;
    }

</style>
