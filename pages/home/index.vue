<template>
  <div class="home-container">
    <LeftPart />
    <CenterPart :home-data="homeData" :click-num="clickNum"  />
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeCreate(){
    if(process.client){
      document.querySelector('#__nuxt').setAttribute('style', '');
      document.querySelector('#__layout').setAttribute('style', '');
    }
  },
  async asyncData({ $axios }){
    let data = await $axios.$get('/api/blog-content/getlist?currentPage=1&size=5');
    let numData = await $axios.$get('/api-num/clickNum');
    if(data.code === 200){
      let dataArr = data.data.records.slice();
      return {
        homeData: dataArr,
        clickNum: numData.data,
      }
    }else{
      return {
        homeData: [],
        clickNum: []
      }
    }
    
  },
  created(){
    if(process.client){
      document.title = 'Home | Menchem';
    }   
  },
  data(){
    return {
      homeData: null,
    }
  },
  mounted(){
    //挂载完成
  }
}
</script>

<style lang="less" scoped>

</style>