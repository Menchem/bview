<template>
  <div class="side-wrapper">
    <div class="imgs">
      <a-carousel autoplay>
        <div><img src="~/assets/images/q1.jpg" /></div>
        <div><img src="~/assets/images/q2.jpg" /></div>
      </a-carousel>
    </div>
    <div class="tags mt15 pdlr15">
      <div class="title">风靡一时</div>
      <div class="tags-list">
        <ul>
          <li>linux</li>
          <li>java</li>
          <li>php</li>
          <li>javascript</li>
          <li>node</li>
          <li>html5</li>
        </ul>
      </div>
    </div>
    <div class="links mt15 pdlr15">
      <div class="title">街坊邻里</div>
      <div class="links-list">
        <ul>
          <!-- <li><a href="" target="_blank">友情链接1</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "SidePart",
    mounted(){
      if(process.client){
        window.addEventListener('scroll', () => {
          let h = document.querySelector('.side-wrapper').offsetHeight;
          if(document.documentElement.scrollTop > 545){
            document.querySelector('.tags').classList.add('sticky');
          }else{
            document.querySelector('.tags').classList.remove('sticky');
          }
        }, {
          passive: true
        });
      }

    }
}
</script>

<style lang="less" scoped>
.side-wrapper{
    width: 100%;
    min-height: 100%;
    margin-top: 15px;
    .mt15{
      margin-top: 15px;
    }
    .pdlr15{
      padding-left: 15px;
      padding-right: 15px;
    }
    .imgs{
      width: 100%;
      height: 200px;
      overflow: hidden;
    }
    .sticky{
        position: sticky;
        top: 50px;
    }
    .tags{
      transition: all .6s ease;
      border: 1px solid #dedede;
      .title{
        font-weight: bold;
        font-size: 18px;
        padding: 5px 0 10px;
        border-bottom: 3px solid #e7940e;
      }
      .tags-list{
        padding: 15px 0;
        ul{
          list-style: none;
          margin: 0;
          padding: 0;
          li{
            width: 33.333%;
            height: 46px;
            line-height: 46px;
            text-align: center;
            float: left;
            color: #ffffff;
            list-style: none;
            &:nth-child(1){
              background-color: #d44724;
            }
            &:nth-child(2){
              background-color: #e1810a;
            }
            &:nth-child(3){
              background-color: #d5cf1a;
            }
            &:nth-child(4){
              background-color: #50a109;
            }
            &:nth-child(5){
              background-color: #07719b;
            }
            &:nth-child(6){
              background-color: #a507a5;
            }
          }
          &::after{
            content: "";
            display: block;
            height: 0;
            clear: both;
          }
        }
      }
    }
    .links{
      border: 1px solid #dedede;
      .title{
        font-weight: bold;
        font-size: 18px;
        padding: 5px 0 10px;
        border-bottom: 3px solid #2f87de;
      }
      .links-list{
        width: 100%;
        ul{
          margin-top: 5px;   
          li{
            float: left;
            width: 50%;
            line-height: 36px;
            a{
              color: #555555;
            }
          }
          &::after{
            content: "";
            display: block;
            height: 0;
            clear: both;
          }    
        }
        
      }
    }
}
/deep/ .ant-carousel .slick-slide {
  text-align: center;
  height: 200px;
  line-height: 200px;
  background: #364d79;
  overflow: hidden;
}
/deep/ .ant-carousel .slick-slide img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>