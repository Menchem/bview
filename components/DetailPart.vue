<template>
  <div class="detail-wrapper">
    <div class="banner">
      <div class="mask"></div>
      <div class="title-box">
        <div class="title">{{ detailData?.title }}</div>
        <div class="sub-box">
          <div class="date">{{ timestampToTime(detailData?.publictime) }}</div>
          <div class="white">|</div>
          <div class="author"><a-icon type="user" />&nbsp;{{detailData?.author}}</div>
        </div>
      </div>
    </div>
    <div class="detail-box">
      <div class="content markdown-body" v-html="detailData?.content"></div>
      <div class="content-right">
        <div class="white-box">
          <div class="title">最新内容</div>
          <div class="list">
            <ul>
              <li v-for="item in newData"><nuxt-link :to="'/detail/' + item.id" target="_blank" >{{item?.title}}</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPart",
  props: ["detailData", "newData"],
  data(){
    return {

    }
  },
  mounted(){
    hljs.highlightAll();
  },
  methods: {
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
.detail-wrapper {
  width: 100%;
  background-color: #f9f9f9;
  padding-bottom: 20px;
  .banner {
    width: 100%;
    height: 300px;
    background: url("~/assets/images/t11.jpg") 50% 200% no-repeat;
    background-size: cover;
    position: relative;
    background-attachment: fixed;
    .mask {
      background-color: #000;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0.6;
    }
    .title-box {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      .title {
        width: 100%;
        color: #fff;
        text-align: center;
        text-transform: none;
        font-weight: 400;
        line-height: 30px;
        margin-top: 5pc;
        font-size: 28px;
      }
    }
    .sub-box{
      text-align: center;
      display: flex;
      margin: 20px 0 10px;
      justify-content: center;
      .date{
        color: #ffffff;
      }
      .white{
        color: #ffffff;
        margin: 0 10px;
      }
      .author{
        color: #ffffff;
      }
    }
  }
  .detail-box {
    width: 100%;
    max-width: 1200px;
    margin: 20px auto 0;
    display: flex;
    .content{
      padding: 20px;
      width: 70%;
      min-height: 600px;
      background-color: #ffffff;
      float: left;
      line-height: 28px;
      color: #3d464d;
      font-size: 15px;   
      code{
        line-height: 30px;
      }
    }
    .content-right{
      width: 30%;
      float: right;
      .white-box{
        margin: 0 20px;
        min-height: 200px;
        background-color: #ffffff;
        padding: 0 20px;
        .title{
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-bottom: 2px solid #4eaade;
          font-weight: 700;
          font-size: 1pc;
        }
        .list{
          ul,li{
            list-style: none;
            text-align: left;
            margin: 0;
            padding: 0;
          }
          ul{
            margin-top: 10px;
          }
          li{
            position: relative;
            line-height: 45px;
            padding-left: 15px;
            a{
              color: #3d464d;
            }
          }
          li::before{
            position: absolute;
            top: 20px;
            left: 5px;
            width: 0;
            height: 0;
            border-color: #fff #fff #fff #4eaade;
            border-style: solid;
            border-width: 4px;
            content: '';
            transform-origin: 25% center;
          }
        }
      }
    }
  }
  @media screen and (max-width: 640px) {
    .detail-box{
      .content{
        width: 100%;
      }
      .content-right{
        display: none;
      }
    }
    
  }
}
</style>
