<template>
  <div class="home-container">
    <LeftPart />
    <CenterPart :home-data="homeData" />
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
    if(data.code === 200){
      let dataArr = data.data.records.slice();
      return {
        homeData: dataArr
      }
    }else{
      return {
        homeData: []
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
  }
}
</script>

<style lang="less" scoped>

</style>