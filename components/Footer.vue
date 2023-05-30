<template>
  <div class="footer">
    <div id="statis">
      <a href="https://www.51.la/?comId=21662937" title="51.La 网站流量统计系统" target="_blank"><span style="display:inline-block;background-color:#41A5F5;color:#fff;padding:2px 5px;font-family:arial;font-size:12px;font-weight:bold;line-height:1;">51La</span></a>
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
    script.src = "https://js.users.51.la/21662937.js";
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
