<template>
  <div class="detail-wrapper">
    <div class="detail-header">
        <div class="logo"><nuxt-link to="/"><img src="/images/logo.png" width="80" alt="logo" /></nuxt-link></div>
        <MenuList style="border: none;" />    
    </div>
    <div class="content">
        <DetailPart :detail-data="detailData" :new-data="newData" />
    </div>
    <Footer />
  </div>
</template>

<script>
import {mixin} from '@/mixins/mixin';

export default {
    name: "Detail",
    mixins: [mixin],
    async asyncData({$axios, params,app }){
        const [data1, data2] = await Promise.all([
            $axios.$get(`http://api.zhijieliu.top/blog-content/getdetail?id=${params.id}`),
            $axios.$get(`http://api.zhijieliu.top/blog-content/getlist?currentPage=1&size=3`),
        ]);

        app.head.title = data1.data.title + '_Menchem';
        return {
            detailData: data1.data,
            newData: data2.data.records
        };
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