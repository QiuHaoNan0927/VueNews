<template lang="html">
  <mt-search v-model="value" cancel-text="取消" placeholder="搜索" id="search" :result.sync="result">
    <mt-cell
        v-for="item in result"
        :value="item">
      </mt-cell>
  </mt-search>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      result: ['apple', 'bbbbbbb']
    }
  }
}
</script>

<style lang="css" scoped>
#search{
  margin-top: 38px;
}
</style>
