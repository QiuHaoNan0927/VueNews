<template lang="html">
  <mt-index-list>
    <mt-index-section :index="item.index" v-for="item in items">
      <mt-cell :title="value" v-for="value in item.value"></mt-cell>
    </mt-index-section>
  </mt-index-list>
</template>

<script>
export default {
  data() {
    return {
      items: [{
          index: 'A',
          value: ['数码', '手机', '电信', 'VR']
        },
        {
          index: 'B',
          value: ['国际', '国内', '社会', '生活']
        },
        {
          index: 'C',
          value: ['视频', '评论', '手机', '文化']
        },
        {
          index: 'D',
          value: ['体育', '房产', '科技', '汽车']
        },
        {
          index: 'E',
          value: ['数码', '手机', '电信', 'VR']
        },
        {
          index: 'F',
          value: ['国际', '国内', '社会', '生活']
        },
        {
          index: 'G',
          value: ['视频', '评论', '手机', '文化']
        },
        {
          index: 'H',
          value: ['体育', '房产', '科技', '汽车']
        },
        {
          index: 'I',
          value: ['数码', '手机', '电信', 'VR']
        },
        {
          index: 'J',
          value: ['国际', '国内', '社会', '生活']
        },
        {
          index: 'K',
          value: ['视频', '评论', '手机', '文化']
        },
        {
          index: 'L',
          value: ['体育', '房产', '科技', '汽车']
        }
      ],

    }
  }
}
</script>

<style lang="css" scoped>
.mint-indexlist{
  padding-top: 38px;
}
.mint-indexlist-navlist .mint-indexlist-navitem{
  padding: 10px 6px;
}
</style>
