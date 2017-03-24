<template>
<div class="banner">
  <mt-swipe :auto="4000" :show-indicators="false">
    <mt-swipe-item :class="{slidel:true}"><img src="../assets/images/img_1.jpg" alt="" />
      <div class="text-box">
        <h2>还可以降低首付款健身房11111</h2>
        <p>刘德华11 / 文</p>
      </div>
    </mt-swipe-item>
    <mt-swipe-item :class="{slidel:true}"><img src="../assets/images/img_1.jpg" alt="" />
      <div class="text-box">
        <h2>还可以降低首付款健身房11111</h2>
        <p>刘德华11 / 文</p>
      </div>
    </mt-swipe-item>
    <mt-swipe-item :class="{slidel:true}"><img src="../assets/images/img_1.jpg" alt="" />
      <div class="text-box">
        <h2>还可以降低首付款健身房11111</h2>
        <p>刘德华11 / 文</p>
      </div>
    </mt-swipe-item>
  </mt-swipe>

</div>
</template>
<script>
export default {
  mounted() {},
  watch: {

  },
  methods: {

  }
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
