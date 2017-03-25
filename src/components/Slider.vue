<template>
<div class="banner">
  <mt-swipe :auto="4000" :show-indicators="false">
    <mt-swipe-item :class="{slidel:true}"><img src="../assets/images/img_1.jpg" alt="" />
      <div class="text-box">
        <h2>苹果上架开售“春季新硬件” 网店意外停摆</h2>
        <p>腾讯科技 / 文</p>
      </div>
    </mt-swipe-item>
    <mt-swipe-item :class="{slidel:true}"><img src="../assets/images/img_2.jpg" alt="" />
      <div class="text-box">
        <h2>北京：上千共享单车围住公交车站</h2>
        <p>腾讯科技 / 文</p>
      </div>
    </mt-swipe-item>
    <mt-swipe-item :class="{slidel:true}"><img src="../assets/images/img_3.jpg" alt="" />
      <div class="text-box">
        <h2>马云鸡汤演讲又来了！</h2>
        <p>腾讯科技 / 文</p>
      </div>
    </mt-swipe-item>
  </mt-swipe>

</div>
</template>
<script>
export default {

}
</script>
<style lang="css">
.banner .mint-swipe{
	height: 250px;
}
.banner .mint-swipe img{
	height: auto;
	width: 100%;
}
</style>
