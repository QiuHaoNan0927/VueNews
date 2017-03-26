<template lang="html">
  <mt-search v-model="value" cancel-text="取消" placeholder="搜索" id="search">
    <mt-cell v-for="item in cheakList" :title="item.title" :value="item.value" id="searchItem">
    </mt-cell>
  </mt-search>
</template>

<script>
export default {
  data() {
    return {
      value: 'title',
      result: [{
          'title': 'title1',
          'value': 'value1'
        },
        {
          'title': 'title2',
          'value': 'value2'
        },
        {
          'title': 'title3',
          'value': 'value3'
        },
        {
          'title': 'title4',
          'value': 'value4'
        }
      ]
    }
  },
  computed: {
    cheakList() {
      return this.result.filter(elem => {
        // body...
        return elem['title'].indexOf(this.value) > -1;
      });
    }
  }
}
</script>

<style lang="css" scoped>
#search{
  /*margin-top: 38px;*/
  padding-top: 38px;
}
.mint-search-list-warp a:first-child{
  margin-top: 38px;
}
.mint-search-list-warp >a{
  border-bottom: 1px solid #ccc;
}
</style>
