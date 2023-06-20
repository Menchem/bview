<template>
  <div class="footer">
    <div id="statis">
      
    </div>
    <div class="copyright">
      <p>版权所有 &copy; 2022 by <b>Menchem</b></p>
      <p>鄂ICP备15016321号-2</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    let statis = document.querySelector("#statis");
    let script = document.createElement("script");
    script.type="text/javascript";
    script.id="LA-DATA-WIDGET";
    script.crossorigin="anonymous";
    script.src = "https://v6-widget.51.la/v6/K6JF1VX1s3cwTRHK/quote.js?theme=#1690FF,#333333,#999999,#333333,#FFFFFF,#1690FF,14&f=14&display=0,0,0,1,0,1,1,1";
    statis.appendChild(script);
  },
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 115px;
  padding-top: 23px;
  background-color: #e6eaf0;
  #statis{
    text-align: center;
  }
  .copyright {
    color: #99a9bf;
    font-size: 14px;
    text-align: center;
    p {
      margin-bottom: 5px;
      b {
        color: #939393;
      }
    }
  }
}
</style>
