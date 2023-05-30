<template>
  <div class="index-wrapper">
    <video
      id="video-bg"
      src="~/assets/video/bg_v.mp4"
      width="100%"
      height="100%"
      autoplay
      playsinline
      loop
      muted
    ></video>
    <div class="mask"></div>
    <div class="main-box">
      <div class="item" @click="getRouter('/home')">
        <div class="icon-box">
          <a-icon type="home" style="color: #EFEFEF;font-size: 36px" />
          <div class="text">{{zhCN[0]}}</div>
        </div>      
      </div>
      <div class="item">
        <div class="icon-box">
          <a-icon type="profile" style="color: #EFEFEF;font-size: 36px" />
          <div class="text">{{zhCN[1]}}</div>
        </div>
      </div>
      <div class="item">
        <div class="icon-box">
          <a-icon type="tool" style="color: #EFEFEF;font-size: 36px" />
          <div class="text">{{zhCN[2]}}</div>
        </div>
      </div>
      <div class="item">
        <div class="icon-box">
          <a-icon type="bars" style="color: #EFEFEF;font-size: 36px" />
          <div class="text">{{zhCN[3]}}</div>
        </div>
      </div>
    </div>
    <div class="description">Sharp tools make good work.</div>
    <div id="statis">
      <p>版权所有 &copy; 2022 by <b>Menchem</b></p>
    </div>
  </div>
</template>

<script>
import {mixin} from '@/mixins/mixin';

export default {
  name: "IndexPage",
  mixins: [mixin],
  beforeCreate(){
    if(process.client){
      document.querySelector('#__nuxt').setAttribute('style', 'width: 100%;height: 100%;overflow: hidden;');
      document.querySelector('#__layout').setAttribute('style', 'width: 100%;height: 100%;overflow: hidden;');
    }   
  },
  created(){
    if(process.client){
      document.title = "首页 | Menchem";
    }   
  },
  mounted() {
    let bv = new Bideo();
    bv.init({
      // Video element
      videoEl: document.querySelector("#video-bg"),
      // Container element
      container: document.querySelector("body"),
      // Resize
      resize: true,
      // Array of objects containing the src and type
      // of different video formats to add
      src: [],
      // What to do once video loads (initial frame)
      onLoad: function () {},
    });
    let statis = document.querySelector("#statis");
    let script = document.createElement("script");
    script.type="text/javascript";
    script.src = "https://js.users.51.la/21662937.js";
    statis.appendChild(script);
  } 
};
</script>


<style lang="less" scoped>
.index-wrapper {
  width: 100%;
  height: 100%;
  background-color: #efefef;
  position: relative;
  #video-bg {
    object-fit: cover;
  }
  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .6);
  }
  .main-box{
    width: 70%;
    max-width: 800px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    cursor: pointer;
    .item{
      width: 200px;
      height: 200px;
      background-color: rgba(255, 255, 255, 0.4);
      margin: 0 15px;
      flex: 1 1 auto;
      transition: all .3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon-box{
        text-align: center;
        color: #efefef;
        .text{
          margin-top: 10px;
        }
      }
    }
    .item:hover{
      background-color: rgba(255, 255, 255, 0.6);
      box-shadow: 3px 3px 0  rgba(255, 255, 255, 0.4);
    }
  }
  .description{
    color: #efefef;
    position: absolute;
    font-size: 24px;
    left: 50%;
    top: 20%;
    transform: translate(-50%, 0);
  }
  #statis{
    width: 100%;
    height: 50px;
    background-color: #000;
    opacity: .2;
    color: #adaaaa;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      margin: 0;
      padding: 0;
    }
  }
  @media screen and (max-width: 640px) { 
    .main-box{
      width: 100%;
      flex-wrap: wrap;
      .item{
        width: 35%;
        height: 100px;
        margin: 10px;
        flex: 0 0 auto;    
      }
    }
  }
}
</style>

