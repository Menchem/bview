<template>
  <div class="list-content">
    <div class="list-wrapper">


      <div class="list-box" v-for="(item, index) in homeData" :key="index">
        <div class="pic" v-if="item.imgUrl !== ''">
          <img
            width="100"
            height="142"
            :src="item.imgUrl"
          />
        </div>
        <div class="text">
          <div class="list-title"><nuxt-link :to="'/detail/' + item.id" target="_blank">{{item.title}}</nuxt-link></div>
          <div class="list-date"><a-icon type="user" />&nbsp;<span>admin</span>&nbsp;·&nbsp;{{timestampToTime(item.publictime)}}</div>
          <div class="list-description">
            <a-icon type="schedule" style="color: #999;font-size: 12px" />&nbsp;{{item.description}}
          </div>
          <div class="list-data">
            <div class="tj">阅读：{{item.pv}}</div>
            <nuxt-link :to="'/detail/' + item.id" target="_blank"><div class="btn"><a-icon type="read" />&nbsp;阅读全文</div></nuxt-link>
          </div>
        </div>
      </div>

       
    </div>
    <div class="list-more">
        <a-button type="primary" size="large" :disabled="btnDisable" :loading="loading" @click="loaderMore">{{btnValue}}</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListContent",
  data(){
    return {
        loading: false,
        page: 2,
        btnValue: "点击查看更多",
        btnDisable: false
    }
  },
  props: ['homeData'],
  methods: {
    async loaderMore(){   
      this.loading = true;
      let data = await this.getListData();
      if(data.code === 200){
        if(data.data.records.length === 0){
          this.btnValue = "已经到底了！！";
          this.btnDisable = true;
        }else if(data.data.records.length < 5){
          for(let i = 0; i < data.data.records.length; i++){
            this.homeData.push(data.data.records[i]);
          }
          this.btnValue = "已经到底了！！";
          this.btnDisable = true;
        }else{
          for(let i = 0; i < data.data.records.length; i++){
            this.homeData.push(data.data.records[i]);
          }
        }   
        this.page++;
      }
      this.loading = false;
    },
    getListData(){
      //请求数据接口
      let url = `http://api.zhijieliu.top/blog-content/getlist?currentPage=${this.page}&size=5`;
      return this.$axios.$get(url);
    },
    timestampToTime(timestamp) {
        let date = new Date(timestamp);
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;//月补0
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;//天补0
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;//小时补0
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;//分钟补0
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;//秒补0
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m+ ':' + s;
    }
  }
};
</script>

<style lang="less" scoped>
.list-content {
  width: 100%;
  .list-wrapper {
    width: 100%;
    .list-box {
      height: 175px;
      margin: 15px 15px 0 15px;
      padding: 10px;
      box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
      border-radius: 4px;
      display: flex;
      .text {
        flex: 1;
      }
      .pic {
        margin-right: 20px;
        img{
          object-fit: cover;
        }
      }
      .list-title {
        font-size: 24px;
        font-weight: bold;
        margin: 10px 0;
        &:hover {
          color: #444;
        }
        a{
          color: #555;
        }
      }
      .list-date {
        color: #999;
        span {
          font-size: 16px;
          color: #2698e2;
        }
      }
      .list-description {
        color: #666666;
        margin: 6px 0 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .list-data {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tj {
          font-size: 12px;
          color: #999;
        }
        .btn {
          width: 100px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          background-color: #2698e2;
          color: #ffffff;
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            background-color: #1675b3;
          }
        }
      }
    }
  }
  .list-more{
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 640px) {
    .list-wrapper{
      .list-box{
        width: 94%;
        margin: 10px auto;
        padding: 10px; 
        .list-title{
          font-size: 18px;
        }
        .list-description{
          width: 200px;
        }
      }
    }
  }
}
</style>
