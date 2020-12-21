<template>
  <div class="detail">
    <!--顶部-->
    <div style="height: 115px">
      <div class="head">
        <div class="container">
          <div class="s-sub">
            <a class="head-left" href="javascript:;">首页</a>
            <a class="head-left" href="javascript:;">速客官网</a>
          </div>
          <div class="s-main">
            <a class="head-right" href="javascript:;">请登录</a>
            <a class="head-right" href="javascript:;">注册</a>
            <a class="head-right" href="javascript:;">我的订单</a>
            <a class="head-right" href="javascript:;">购物车</a>
          </div>
        </div>
      </div>
      <!--顶部logo/搜索框-->
      <div class="box-top">
        <div class="container">
          <div class="row">
            <a href="index.html" class="logo"></a>
            <div class="search-top">
              <input placeholder="华为 Mate 40 Pro 5G" class="search-top-ipt"/>
              <a class="a-search" href="javascript:;">
                <img class="icon-search" src="src/img/icon/搜索.png"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!--主体-->
    <div id="box">
      <div class="container">
        <!--左侧图片-->
        <div class="goods_img_box">
          <div class="goods_img_max"
               style="background-image: url('src/img/手机/vivo/vivoNEX3/10001477_1568011033880_750x750.png.webp')">
          </div>

          <div class="goods_img_min_box">
            <div class="goods_img_min" @mouseover="imageShow(1)"
                 style="background-image: url('src/img/手机/vivo/vivoNEX3/10001477_1568011033880_750x750.png.webp');">
            </div>
          </div>
          <div class="goods_img_min_box">
            <div class="goods_img_min" @mouseover="imageShow(2)"
                 style="background-image: url('src/img/手机/vivo/vivoNEX3/10001477_1568011033806_750x750.png.webp');">
            </div>
          </div>
          <div class="goods_img_min_box">
            <div class="goods_img_min" @mouseover="imageShow(3)"
                 style="background-image: url('src/img/手机/vivo/vivoNEX3/10001477_1568011033923_750x750.png.webp');">
            </div>
          </div>
          <div class="goods_img_min_box">
            <div class="goods_img_min" @mouseover="imageShow(4)"
                 style="background-image: url('src/img/手机/vivo/vivoNEX3/10001477_1568011033971_750x750.png.webp');">
            </div>
          </div>
        </div>
        <!--右侧信息-->
        <div class="goods_message_box">
          <!--名称和备注-->
          <div class="goods_name_box">
            <span class="goods_name">vivo NEX 3</span>
            <span class="goods_remark">双模5G全网通，高通骁龙865，无界瀑布屏，隐藏压感键，64M高清三摄</span>
          </div>
          <!--价格-->
          <div class="goods_price_box">
            <span class="goods_price">￥<span>4998.00</span></span>
            <span class="jiFen_title">积分</span>
            <span class="jiFen_span">购物送积分</span>
          </div>
          <!--颜色-->
          <div class="goods_color_box">
            <span class="color_title">颜色</span>
            <div class="color_boxs">
              <div class="color_div">
                <span class="color_box" @click="colorChange($event)">黑色</span>
              </div>
              <div class="color_div">
                <span class="color_box" @click="colorChange($event)">白色</span>
              </div>
              <div class="color_div">
                <span class="color_box" @click="colorChange($event)">蓝色</span>
              </div>
            </div>
          </div>
          <!--版本-->
          <div class="goods_version_box">
            <span class="version_title">版本</span>
            <div class="version_boxs">
              <div class="version_div">
                <span class="version_box" @click="versionChange($event)">8G+128G</span>
              </div>
              <div class="version_div">
                <span class="version_box" @click="versionChange($event)">8G+256G</span>
              </div>
            </div>
          </div>
          <!--数量-->
          <div class="goods_num_box">
            <span class="num_title">数量</span>
            <div class="num_box">
              <a class="num_btn" id="btn_jian" @click="btn_jian"></a>
              <input class="goods_num" value="1" readonly/>
              <a class="num_btn" id="btn_jia" @click="btn_jia"></a>
            </div>
          </div>
          <!--按钮操作-->
          <div class="goods_btn_box">
            <button class="goods_btn" id="add_car">加入购物车</button>
            <button class="goods_btn" id="pay_btn">立即购买</button>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <div class="foot">
      <div style="width: 1170px;margin: auto">
        <div style="width: 100%;float: left" id="bottom_box_top">
          <div style="width: 16.66%;float: left">
            <p class="bottom_box_title">购物相关</p>
            <p>
              <a href="javascript:;" class="bottom_box_a">购物指南</a>
            </p>
            <p>
              <a href="javascript:;" class="bottom_box_a">配送方式</a>
            </p>
            <p>
              <a href="javascript:;" class="bottom_box_a">支付方式</a>
            </p>
            <p>
              <a href="javascript:;" class="bottom_box_a">常见问题</a>
            </p>
          </div>
          <div style="width: 16.66%;float: left">
            <p class="bottom_box_title">特色服务</p>
            <p>
              <a href="javascript:;" class="bottom_box_a">防伪查询</a>
            </p>
            <p>
              <a href="javascript:;" class="bottom_box_a">补购保障</a>
            </p>
            <p>
              <a href="javascript:;" class="bottom_box_a">以旧换新</a>
            </p>
            <p>
              <a href="javascript:;" class="bottom_box_a">礼品包装</a>
            </p>
          </div>
          <div style="width: 16.66%;float: left">
            <p class="bottom_box_title">保修与退换货</p>
            <p>
              <a href="javascript:;" class="bottom_box_a">保修政策</a>
            </p>
            <p>
              <a href="javascript:;" class="bottom_box_a">退换货政策</a>
            </p>
            <p>
              <a href="javascript:;" class="bottom_box_a">保修状态查询</a>
            </p>
            <p>
              <a href="javascript:;" class="bottom_box_a">配件防伪查询</a>
            </p>
          </div>
          <div style="width: 25%;float: right">
            <p class="bottom_box_title">客服热线</p>
            <p class="bottom_box_a">
              <a href="javascript:;" class="bottom_box_a">中国内地拨打：1010-1020</a>
            </p>
            <p class="bottom_box_a">
              <a href="javascript:;" class="bottom_box_a">其他地区拨打： +86-10-6064-1387</a>
            </p>
            <button type="button" class="bottom_btn">在线客服</button>
          </div>
        </div>
        <div style="width: 100%;float: left" id="bottom_box_center">
          <span class="bottom_box_title" style="float: left">资质证书</span>
          <a href="javascript:;">
            <img class="bottom_img" src="src/img/bottom1.png">
          </a>
          <a href="javascript:;">
            <img class="bottom_img" src="src/img/bottom2.png">
          </a>
          <a href="javascript:;">
            <img class="bottom_img" src="src/img/bottom3.png">
          </a>
          <a href="javascript:;">
            <img class="bottom_img" src="src/img/bottom4.png">
          </a>
          <a href="javascript:;">
            <img class="bottom_img" src="src/img/bottom5.png">
          </a>
          <a href="javascript:;">
            <img class="bottom_img" src="src/img/bottom6.png">
          </a>
          <a href="javascript:;">
            <img class="bottom_img" src="src/img/bottom7.png">
          </a>
        </div>
        <div style="width: 100%" id="bottom_box_friend">
          <span class="bottom_box_friend_span">友情链接：</span>
          <a href="javascript:;" class="bottom_box_friend_a">出境游</a>
          <a href="javascript:;" class="bottom_box_friend_a">旅行地图</a>
          <a href="javascript:;" class="bottom_box_friend_a">旅游天气</a>
          <a href="javascript:;" class="bottom_box_friend_a">美国租车</a>
          <a href="javascript:;" class="bottom_box_friend_a">国外租车</a>
          <a href="javascript:;" class="bottom_box_friend_a">国际油价</a>
          <a href="javascript:;" class="bottom_box_friend_a">国外自驾游</a>
          <a href="javascript:;" class="bottom_box_friend_a">探途地图</a>
          <a href="javascript:;" class="bottom_box_friend_a">深圳国旅</a>
          <a href="javascript:;" class="bottom_box_friend_a">川藏线租车</a>
          <a href="javascript:;" class="bottom_box_friend_a">常州光大国旅</a>
          <a href="javascript:;" class="bottom_box_friend_a">度假别墅</a>
          <a href="javascript:;" class="bottom_box_friend_a">美国旅游</a>
          <a href="javascript:;" class="bottom_box_friend_a">龙摄天下摄影网</a>
          <a href="javascript:;" class="bottom_box_friend_a">银川旅游</a>
          <a href="javascript:;" class="bottom_box_friend_a">厦门国旅</a>
          <a href="javascript:;" class="bottom_box_friend_a">深圳旅游攻略</a>
          <a href="javascript:;" class="bottom_box_friend_a">广州户外</a>
          <a href="javascript:;" class="bottom_box_friend_a">旅行社</a>
          <a href="javascript:;" class="bottom_box_friend_a">美车致</a>
          <a href="javascript:;" class="bottom_box_friend_a">多多驿站</a>
          <a href="javascript:;" class="bottom_box_friend_a">YOOZ</a>
          <a href="javascript:;" class="bottom_box_friend_a">北京中国国际旅行社</a>
          <a href="javascript:;" class="bottom_box_friend_a">图灵未来资本</a>
          <a href="javascript:;" class="bottom_box_friend_a">网红地图</a>
          <a href="javascript:;" class="bottom_box_friend_a">TOM旅游</a>
        </div>
        <div style="width: 100%" id="bottom_box_bottom">
          <span class="bottom_box_bottom_span">© 2011-2020 suke.com. All Rights Reserved. 湖南达嘉维康医药有限公司 版权所有 </span>
          <a href="javascript:;" class="bottom_box_bottom_a">营业执照 </a>
          <a href="javascript:;" class="bottom_box_bottom_a">湘ICP备11007328号 </a>
          <a href="javascript:;" class="bottom_box_bottom_a">
            <img src="src/img/bottomLogo.png">
            湘公网安备 44010602000444号</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jQuery';

  export default {
    name: "detail",
    data() {
      return {
        image: {
          img1: "src/img/手机/vivo/vivoNEX3/10001477_1568011033880_750x750.png.webp",
          img2: "src/img/手机/vivo/vivoNEX3/10001477_1568011033806_750x750.png.webp",
          img3: "src/img/手机/vivo/vivoNEX3/10001477_1568011033923_750x750.png.webp",
          img4: "src/img/手机/vivo/vivoNEX3/10001477_1568011033971_750x750.png.webp"
        },
      }
    },
    methods: {
      /*图片显示*/
      imageShow: function (data) {
        var _this = this;
        if (data == 1) {
          $(".goods_img_max").css("background-image", "url('" + _this.image.img1 + "')")
        } else if (data == 2) {
          $(".goods_img_max").css("background-image", "url('" + _this.image.img2 + "')")
        } else if (data == 3) {
          $(".goods_img_max").css("background-image", "url('" + _this.image.img3 + "')")
        } else {
          $(".goods_img_max").css("background-image", "url('" + _this.image.img4 + "')")
        }
      },
      /*数量减*/
      btn_jian: function () {
        var price = parseInt($(".goods_num").val());
        if (price != 1) {
          $(".goods_num").val(price - 1);
        }
      },
      /*数量加*/
      btn_jia: function () {
        var price2 = parseInt($(".goods_num").val());
        $(".goods_num").val(price2 + 1);
      },
      /*选择颜色*/
      colorChange: function (event) {
        $(".color_box").css("border", "");
        $(".color_box").css("color", "");
        var el = event.currentTarget;
        $(el).css("border", "red dashed 1px");
        $(el).css("color", "red");
      },
      /*选择版本*/
      versionChange: function (event) {
        $(".version_box").css("border", "");
        $(".version_box").css("color", "");

        var el = event.currentTarget;
        $(el).css("border", "red solid 1px");
        $(el).css("color", "red");
      },
    },
  }
</script>

<style scoped>
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /*顶部样式*/
  .head {
    width: 100%;
    height: 36px;
    line-height: 36px;
    background-color: rgba(0, 0, 0, .8);
  }

  .s-sub {
    float: left;
    text-align: left;
  }

  .s-main {
    float: right;
    text-align: right;
  }

  .head-left {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    color: lightgray;
    font-size: 12px;
    text-decoration: none;
  }

  .head-left:hover {
    text-decoration: none;
    color: white;
  }

  .head-left:focus {
    text-decoration: none;
    color: white;
  }

  .head-right {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    color: lightgray;
    font-size: 12px;
    text-decoration: none;
  }

  .head-right:hover {
    text-decoration: none;
    color: white;
  }

  .head-right:focus {
    text-decoration: none;
    color: white;
  }

  .box-top {
    width: 100%;
    height: 80px;
    background-color: white;
    position: absolute;
    z-index: 999;
    top: 35px;
    margin-bottom: 80px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, .1);
  }

  .logo {
    float: left;
    display: inline-block;
    width: 127px;
    height: 60px;
    margin-top: 10px;
    background: url("img/suke_logo.png");
    background-size: 100% 100%;
  }

  .search-top {
    float: right;
    width: 250px;
    height: 30px;
    margin-top: 24px;
    background-color: rgb(240, 240, 240);
    border-radius: 50px;
    overflow: hidden;
    border: transparent solid 1px;
  }

  .search-top:hover {
    border: lightgray solid 1px;
  }

  .search-top-ipt {
    float: left;
    width: 220px;
    height: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    padding-left: 15px;
  }

  .a-search {
    display: inline-block;
    margin-top: 3px;
  }

  .icon-search {
    height: 20px;
    width: 20px;
  }


  /*底部样式*/
  .foot {
    width: 100%;
    height: 600px;
    background-color: rgba(0, 0, 0, .8);
  }

  .bottom_box_title {
    color: white;
    font-size: 22px;
    display: block;
    height: 50px;
    line-height: 50px;
  }

  .bottom_box_a {
    color: rgb(190, 190, 190);
    font-size: 14px;
    text-decoration: none;
  }

  .bottom_box_a:hover {
    color: dodgerblue;
    font-size: 14px;
    text-decoration: none;
  }

  .bottom_btn {
    width: 220px;
    height: 35px;
    border: lightgray solid 1px;
    background-color: transparent;
    color: white;
    transition: .3s;
    border-radius: 5px;
    outline: none;
  }

  .bottom_btn:hover {
    border: dodgerblue solid 1px;
    background-color: dodgerblue;
    transition: .3s;
  }

  #bottom_box_top {
    border-bottom: rgb(80, 80, 100) solid 1px;
    padding-top: 70px;
    padding-bottom: 50px;
  }

  #bottom_box_center {
    border-bottom: rgb(80, 80, 100) solid 1px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .bottom_img {
    width: 100px;
    height: 40px;
    float: left;
    margin-left: 10px;
    margin-top: 5px;
  }

  #bottom_box_friend {
    border-bottom: rgb(80, 80, 100) solid 1px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .bottom_box_friend_span {
    font-size: 12px;
    color: rgb(190, 190, 190);
  }

  .bottom_box_friend_a {
    font-size: 12px;
    color: rgb(190, 190, 190);
    text-decoration: none;
  }

  .bottom_box_friend_a:hover {
    font-size: 12px;
    color: dodgerblue;
    text-decoration: none;
  }

  #bottom_box_bottom {
    text-align: center;
    padding-top: 20px;
  }

  .bottom_box_bottom_span {
    font-size: 12px;
    color: rgb(190, 190, 190);
  }

  .bottom_box_bottom_a {
    font-size: 12px;
    color: rgb(190, 190, 190);
    text-decoration: none;
  }

  .bottom_box_bottom_a:hover {
    font-size: 12px;
    color: dodgerblue;
    text-decoration: none;
  }

  .goods_img_box {
    width: 40%;
    height: auto;
    float: left;
  }

  .goods_message_box {
    width: 60%;
    height: auto;
    float: right;
    padding-left: 200px;
  }

  .goods_img_max {
    float: left;
    width: 456px;
    height: 456px;
    background-size: 100% 100%;
  }

  .goods_img_min_box {
    float: left;
    width: 114px;
    height: 94px;
    text-align: center;
    padding-top: 7px;
  }

  .goods_img_min {
    width: 80px;
    height: 80px;
    background-size: 100% 100%;
    margin: auto;
    border: transparent solid 1px;
    cursor: pointer;
    transition: .3s;
  }

  .goods_img_min:hover {
    transition: .3s;
    border: lightgray solid 1px;
  }

  .goods_name_box {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: rgba(0, 0, 0, .1) solid 1px;
  }

  .goods_name {
    display: inline-block;
    width: 100%;
    height: auto;
    font-size: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .goods_remark {
    display: inline-block;
    width: 100%;
    height: auto;
    color: gray;
  }

  .goods_price_box {
    width: 100%;
    height: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: rgba(0, 0, 0, .1) solid 1px;
  }

  .goods_price {
    display: inline-block;
    font-size: 30px;
    color: red;
    width: 50%;
    border-right: rgba(0, 0, 0, .1) solid 1px;
    margin-top: 10px;
    float: left;
  }

  .jiFen_title {
    float: left;
    display: inline-block;
    font-size: 12px;
    padding: 2px 5px 2px 5px;
    background-color: red;
    color: white;
    border-radius: 3px;
    margin-top: 22px;
    margin-left: 10px;
    cursor: pointer;
    line-height: 16px;
  }

  .jiFen_span {
    float: left;
    display: inline-block;
    margin-top: 22px;
    margin-left: 10px;
  }

  .goods_color_box {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .color_title {
    display: inline-block;
    width: 100%;
    float: left;
  }

  .color_boxs {
    width: 100%;
    float: left;
    padding-bottom: 20px;
  }

  .color_div {
    float: left;
    width: 50%;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 20px;
  }

  .color_box {
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 50px;
    border-radius: 5px;
    text-align: center;
    color: gray;
    border: lightgray dashed 1px;
    cursor: pointer;
  }

  .color_box:hover {
    color: red;
  }

  .goods_version_box {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .version_title {
    display: inline-block;
    width: 100%;
    float: left;
  }

  .version_boxs {
    width: 100%;
    float: left;
    padding-bottom: 20px;
  }

  .version_div {
    float: left;
    width: 50%;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 20px;
  }

  .version_box {
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 50px;
    border-radius: 5px;
    text-align: center;
    color: gray;
    border: lightgray solid 1px;
    cursor: pointer;
  }

  .version_box:hover {
    color: red;
  }

  .goods_num_box {
    float: left;
    width: 100%;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .num_title {
    display: inline-block;
    width: 100%;
    float: left;
  }

  .num_box {
    width: 222px;
    height: 50px;
    float: left;
    margin-top: 20px;
    margin-left: 10px;
    border: lightgray solid 1px;
    border-radius: 5px;
    overflow: hidden;
  }

  .num_btn {
    display: inline-block;
    height: 100%;
    width: 50px;
    background-color: transparent;
    outline: none;
    text-decoration: none;
    cursor: pointer;
  }

  #btn_jian {
    border-right: lightgray solid 1px;
    float: left;
    background: no-repeat url("img/icon/减.png") center;
    background-size: 30% 30%;
  }

  #btn_jian:hover {
    background: no-repeat url("img/icon/减 (1).png") center;
    background-size: 30% 30%;
  }

  #btn_jia {
    border-left: lightgray solid 1px;
    float: right;
    background: no-repeat url("img/icon/加.png") center;
    background-size: 30% 30%;
  }

  #btn_jia:hover {
    background: no-repeat url("img/icon/加 (1).png") center;
    background-size: 30% 30%;
  }

  .goods_num {
    height: 100%;
    width: 118px;
    border: none;
    text-align: center;
    line-height: 50px;
    outline: none;
  }

  .goods_btn_box {
    float: left;
    width: 100%;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .goods_btn {
    margin-left: 10px;
    width: 222px;
    height: 50px;
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: white;
  }

  #add_car {
    background-color: rgb(100, 100, 100);
  }

  #pay_btn {
    background-color: orangered;
    margin-left: 15px;
  }
</style>
