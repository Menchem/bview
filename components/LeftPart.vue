<template>
  <div class="left-part-wrapper" :style="{ height: height + 'px' }">
    <div class="mask"></div>
    <div class="user-wrapper">
      <a-avatar
        :size="160"
        icon="user"
        :src="imgSrc"
        style="border: 5px solid rgba(255, 255, 255, 0.4)"
      />
    </div>
    <div class="name">Menchem Blog</div>
  </div>
</template>

<script>
export default {
  name: "LeftPart",
  data() {
    return {
      height: 0,
      imgSrc: require("@/assets/images/author.jpg")
    };
  },
  created() {
    if (process.client) {
      this.height = window.innerHeight;
    }
  },
  mounted(){
    if(process.client){
      window.addEventListener("resize", () => {
        this.height = window.innerHeight; 
      })
    }
  }
};
</script>

<style lang="less" scoped>
.left-part-wrapper {
  width: 100%;
  max-width: 340px;
  background-color: #efefef;
  position: fixed;
  left: 0;
  top: 0;
  background: url("~/assets/images/t11.jpg") center center no-repeat;
  background-size: cover;
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  .user-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 120px;
    z-index: 2;
    position: relative;
  }
  .name {
    text-align: center;
    color: #ffffff;
    font-size: 26px;
    z-index: 2;
    position: relative;
  }
}
@media screen and (max-width: 640px) {
  .left-part-wrapper {
    display: none;
  }
}
</style>
