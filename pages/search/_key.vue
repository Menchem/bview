<template>
    <div class="detail-wrapper">
      <div class="detail-header">
          <div class="logo"><nuxt-link to="/"><img src="/images/logo.png" width="80" alt="logo" /></nuxt-link></div>
          <MenuList style="border: none;" />    
      </div>
      <div class="content">
        <SearchPart :keyValue="key" /> 
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  
  export default {
      name: "Detail",
      asyncData({ params }){
        params.key ? params.key : params.key = '';
        return {
            key: params.key
        }
      },
      created(){
        if(process.client){
            document.title = '搜索-' + this.key + '_Menchem';           
        }      
      }
      
  }
  </script>
  
  <style lang="less" scoped>
  .detail-wrapper{  
     .detail-header{
       width: 100%;
       max-width: 1200px;
       margin: 0 auto;
       display: flex;
     } 
  }
  </style>