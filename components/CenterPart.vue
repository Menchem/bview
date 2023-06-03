<template>
  <div class="main-wrapper">
    <div class="menu-wrapper">
        <MenuList style="width: 60%;border: none;" />
        <div class="search-wrapper">
            <a-input-search placeholder="关键字"  @search="onSearch" />
        </div>       
    </div>
    <div class="content">
        <div class="left"><ListContent :home-data="homeData" /></div>
        <div class="right"><SidePart  /></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import {mixin} from '@/mixins/mixin';

export default {
    name: "CenterPart",
    mixins: [mixin],
    props: ['homeData'],
    methods: {
        onSearch(){
            console.log("搜索");
        }
    }
}
</script>

<style lang="less" scoped>
.main-wrapper{
    padding-left: 340px;
    .menu-wrapper{
      position: sticky;
      top: 0;
      z-index: 100;
      background-color: #ffffff;
      display: flex;
      border-bottom: 2px solid #efefef;
      .search-wrapper{
        width: 25%;
        margin-left: 10%;
        margin-right: 5%;
        display: flex;
        align-items: center;
      }
    }
    .content{
        display: flex;
        .left{
            flex: 1;
        }
        .right{
            width: 360px;
        }
    }

}
@media screen and (max-width: 640px) {
    .main-wrapper{
        padding-left: 0;
        .right{
            display: none;
        }
    }
    .footer{
        display: none;
    }   
}
</style>