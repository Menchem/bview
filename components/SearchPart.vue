<template>
  <div class="search-wrapper">
    <div class="banner">
      <div class="mask"></div>
      <div class="input-box">
        <a-input-search
          class="input-wrapper"
          v-model="tempValue"
          placeholder=""
          enter-button
          @search="changeSearch"
        />
      </div>
    </div>
    
    <div class="content">
      <a-statistic title="查询到数据" :value="totalValue"  :valueStyle="{color: '#999999'}" />
      <!-- 瀑布流结构 -->
      <div class="waterfall-wrapper">
        <div class="waterfall-box">
          <ul>
            <li v-for="(it,index) in columnCount"  :key="it" :ref="'col'+index" :style="{width: (100 / columnCount - 1) + '%', float: 'left'}">
              <div class="box" v-for="item in renderList[index]" :key="item.id" @click="targetRouter(item.id)" >  
                <div class="img" v-if="item.imgUrl"><img :src="item.imgUrl" /></div>          
                <div class="title">{{ item.title }}</div>
                <div class="anthor">{{ item.anthor }}</div>               
                <div class="description">{{ item.description}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <a-button id="load-next" loading v-if="!endShow">正在加载...</a-button>
      <p v-if="endShow">没有更多了！</p>
    </div>    
  </div>
</template>

<script>
import {mixin} from '@/mixins/mixin';

export default {
  name: "SearchPart",
  mixins: [mixin],
  props: ["keyValue"],
  data() {
    return {
      tempValue: this.keyValue, 
      totalValue: 0,
      columnCount: 4,
      waterData: [],
      renderList: [],
      endShow: false,
      currentPage: 1,
      size: 10,
    };
  },
  created(){
    if(process.client){
      //this.getSearch();
      for(var i=0;i<this.columnCount;i++){
        this.renderList[i]=[]
      }
    }  
  },
  mounted(){
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].intersectionRatio <= 0 ){
        return ;
      }
      this.getSearch();
    });
    observer.observe(document.getElementById("load-next"));
  },
  methods: {
    async getSearch() {
      const data = await this.$axios.$get(
        `/api/blog-content/search?key=${this.tempValue}&currentPage=${this.currentPage}`
      );
      if(data.data.records.length < this.size){
        this.endShow = true;
      }
      let len = this.waterData.length;
      this.waterData = this.waterData.concat(data.data.records);
      this.totalValue = data.data.total; 
      this.fullData(len);
      this.currentPage++;
    },
    fullData(index){
      if(index < this.waterData.length && this.waterData[index].imgUrl !== '' ){
        let newImg = new Image();
        newImg.src = this.waterData[index].imgUrl;
        let colHeightList=[];
        newImg.onload = () => {
          //所有列表高度        
          for(let i=0;i<this.columnCount;i++){
            colHeightList[i] = this.$refs['col'+i][0].offsetHeight;
          }
        
          let min =colHeightList.indexOf(Math.min(...colHeightList));
          let target = this.renderList[min].concat(this.waterData[index]);
          this.$set(this.renderList, min, target);
          this.$nextTick(() => {
            this.fullData(index + 1);
          });
          
        }
      }else if(index < this.waterData.length && this.waterData[index].imgUrl === ''){
        let colHeightList=[];
        for(let i=0;i<this.columnCount;i++){
          colHeightList[i] = this.$refs['col'+i][0].offsetHeight;
        }
        let min =colHeightList.indexOf(Math.min(...colHeightList));
        let target = this.renderList[min].concat(this.waterData[index]);
        this.$set(this.renderList, min, target);
        this.$nextTick(() => {
          this.fullData(index + 1);
        });
      }else{
        return  false;
      }
    },
    changeSearch(v){
      this.tempValue = v.trim();
      this.waterData =  [];
      this.currentPage = 1;
      this.getSearch();
      this.renderList = [];
      for(var i=0;i<this.columnCount;i++){
        this.renderList[i]=[]
      }
    }
  },
};
</script>

<style lang="less">
.search-wrapper {
  .banner {
    width: 100%;
    height: 300px;
    background: url("~/assets/images/t11.jpg") 50% 200% no-repeat;
    background-size: cover;
    position: relative;
    background-attachment: fixed;
    overflow: hidden;
    .mask {
      background-color: #000;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0.6;
    }
    .input-box {
      min-width: 360px;
      width: 30%;
      padding-top: 1px;
      margin: 100px auto 0;
      .input-wrapper {
        height: 45px;
        list-style: 45px;
        .ant-input-wrapper {
          height: 100%;
          input {
            height: 100%;
          }
          .ant-btn {
            width: 60px;
            height: 45px;
            font-size: 24px;
          }
        }
      }
    }
  }
  .content {
    max-width: 1200px;
    width: 100%;
    min-height: 600px;
    margin: 10px auto;
    text-align: center;
    .loading-box {
      font-size: 30px;
      color: #1890ff;
    }
  }
  /* 瀑布流 */
  .waterfall-wrapper{
    .waterfall-box{
      ul{
        list-style: none;
        padding: 0;
        li{
          list-style: none;
          margin:10px 0.5%;
          .box{
            width: 100%;
            background-color: #f3f3f3;
            margin-bottom: 10px;
            padding: 10px;
            cursor: pointer;
            img{
              width: 96%;
            }
            .title{
              font-size: 20px;
              padding: 10px 0;
            }
            .description{
              color: #999999;
            }
          }
        }
        &::after{
        content: "";
        height: 0;
        display: block;
        clear: both;
        }
      }
      
    }
  }
}
</style>
