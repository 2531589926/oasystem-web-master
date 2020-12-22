<template>
  <div class="sort">
    <!--顶部-->
    <!--<div style="height: 115px">
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
      &lt;!&ndash;顶部logo/搜索框&ndash;&gt;
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
    </div>-->
    <!--主体-->
    <div id="box">
      <div class="container">
        <!--分类-->
        <div class="type-box">
          <div class="type_box_title">
            分类：
          </div>
          <div class="type_box_texts">
            <div class="type_box_text">
              <input class="type_box_check" type="checkbox" name="type_check"/>
              <span class="type_box_span">手机</span>
            </div>
            <div class="type_box_text">
              <input class="type_box_check" type="checkbox" name="type_check"/>
              <span class="type_box_span">笔记本</span>
            </div>
            <div class="type_box_text">
              <input class="type_box_check" type="checkbox" name="type_check"/>
              <span class="type_box_span">智能家居</span>
            </div>
            <div class="type_box_text">
              <input class="type_box_check" type="checkbox" name="type_check"/>
              <span class="type_box_span">智能佩戴</span>
            </div>
            <div class="type_box_text">
              <input class="type_box_check" type="checkbox" name="type_check"/>
              <span class="type_box_span">耳机音响</span>
            </div>
            <div class="type_box_text">
              <input class="type_box_check" type="checkbox" name="type_check"/>
              <span class="type_box_span">配件</span>
            </div>
          </div>
          <div class="zhanKai_box">
                <span class="zhanKai_text" @click="typeZhanKai">
                    <span class="zhanKai_text_type">更多</span>
                    <img src="src/img/icon/下箭头.png" class="zhanKai_box_icon_type">
                </span>
          </div>
        </div>
        <!--品牌-->
        <div class="brand-box">
          <div class="brand-box_title">
            品牌：
          </div>
          <div class="brand-box_texts">
            <div class="brand-box_text">
              <input class="brand-box_check" type="checkbox" name="brand-check"/>
              <span class="brand-box_span">华为</span>
            </div>
            <div class="brand-box_text">
              <input class="brand-box_check" type="checkbox" name="brand-check"/>
              <span class="brand-box_span">苹果</span>
            </div>
            <div class="brand-box_text">
              <input class="brand-box_check" type="checkbox" name="brand-check"/>
              <span class="brand-box_span">魅族</span>
            </div>
            <div class="brand-box_text">
              <input class="brand-box_check" type="checkbox" name="brand-check"/>
              <span class="brand-box_span">vivo</span>
            </div>
            <div class="brand-box_text">
              <input class="brand-box_check" type="checkbox" name="brand-check"/>
              <span class="brand-box_span">oppo</span>
            </div>
            <div class="brand-box_text">
              <input class="brand-box_check" type="checkbox" name="brand-check"/>
              <span class="brand-box_span">小米</span>
            </div>
          </div>
          <div class="zhanKai_box">
                <span class="zhanKai_text" @click="brandZhanKai">
                    <span class="zhanKai_text_brand">更多</span>
                    <img src="src/img/icon/下箭头.png" class="zhanKai_box_icon_brand">
                </span>
          </div>
        </div>
        <!--商品展示-->
        <div class="goods-box">
          <div class="good-boxs">
            <div class="good-box">
              <div class="goods_img_box">
                <img src="src/img/phone/HUAWEI%20p40%20Pro%205G.png" class="goods_img"/>
              </div>
              <span class="goods_name">HUAWEI p40 Pro</span>
              <span class="goods_remark">麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 全网通5G手机</span>
              <div class="goods_price">
                ￥<span>5699</span>
              </div>
              <div class="goods_sale_num">
                        <span style="display: inline-block;width: 100%">
                            <span class="goods_sale_show_btn">多款可选</span>
                        </span>
                <span style="display: inline-block;width: 100%;text-align: right">
                            月销:<span>45678</span>
                        </span>
              </div>
            </div>
          </div>
          <div class="good-boxs">
            <div class="good-box">
              <div class="goods_img_box">
                <img src="src/img/phone/HUAWEI%20p40%20Pro%205G.png" class="goods_img"/>
              </div>
              <span class="goods_name">HUAWEI p40 Pro</span>
              <span class="goods_remark">麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 全网通5G手机</span>
              <div class="goods_price">
                ￥<span>5699</span>
              </div>
              <div class="goods_sale_num">
                        <span style="display: inline-block;width: 100%">
                            <span class="goods_sale_show_btn">多款可选</span>
                        </span>
                <span style="display: inline-block;width: 100%;text-align: right">
                            月销:<span>45678</span>
                        </span>
              </div>
            </div>
          </div>
          <div class="good-boxs">
            <div class="good-box">
              <div class="goods_img_box">
                <img src="src/img/phone/HUAWEI%20p40%20Pro%205G.png" class="goods_img"/>
              </div>
              <span class="goods_name">HUAWEI p40 Pro</span>
              <span class="goods_remark">麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 全网通5G手机</span>
              <div class="goods_price">
                ￥<span>5699</span>
              </div>
              <div class="goods_sale_num">
                        <span style="display: inline-block;width: 100%">
                            <span class="goods_sale_show_btn">多款可选</span>
                        </span>
                <span style="display: inline-block;width: 100%;text-align: right">
                            月销:<span>45678</span>
                        </span>
              </div>
            </div>
          </div>
          <div class="good-boxs">
            <div class="good-box">
              <div class="goods_img_box">
                <img src="src/img/phone/HUAWEI%20p40%20Pro%205G.png" class="goods_img"/>
              </div>
              <span class="goods_name">HUAWEI p40 Pro</span>
              <span class="goods_remark">麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 全网通5G手机</span>
              <div class="goods_price">
                ￥<span>5699</span>
              </div>
              <div class="goods_sale_num">
                        <span style="display: inline-block;width: 100%">
                            <span class="goods_sale_show_btn">多款可选</span>
                        </span>
                <span style="display: inline-block;width: 100%;text-align: right">
                            月销:<span>45678</span>
                        </span>
              </div>
            </div>
          </div>
          <div class="good-boxs">
            <div class="good-box">
              <div class="goods_img_box">
                <img src="src/img/phone/HUAWEI%20p40%20Pro%205G.png" class="goods_img"/>
              </div>
              <span class="goods_name">HUAWEI p40 Pro</span>
              <span class="goods_remark">麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 全网通5G手机</span>
              <div class="goods_price">
                ￥<span>5699</span>
              </div>
              <div class="goods_sale_num">
                        <span style="display: inline-block;width: 100%">
                            <span class="goods_sale_show_btn">多款可选</span>
                        </span>
                <span style="display: inline-block;width: 100%;text-align: right">
                            月销:<span>45678</span>
                        </span>
              </div>
            </div>
          </div>
          <div class="good-boxs">
            <div class="good-box">
              <div class="goods_img_box">
                <img src="src/img/phone/HUAWEI%20p40%20Pro%205G.png" class="goods_img"/>
              </div>
              <span class="goods_name">HUAWEI p40 Pro</span>
              <span class="goods_remark">麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 全网通5G手机</span>
              <div class="goods_price">
                ￥<span>5699</span>
              </div>
              <div class="goods_sale_num">
                        <span style="display: inline-block;width: 100%">
                            <span class="goods_sale_show_btn">多款可选</span>
                        </span>
                <span style="display: inline-block;width: 100%;text-align: right">
                            月销:<span>45678</span>
                        </span>
              </div>
            </div>
          </div>
          <div class="good-boxs">
            <div class="good-box">
              <div class="goods_img_box">
                <img src="src/img/phone/HUAWEI%20p40%20Pro%205G.png" class="goods_img"/>
              </div>
              <span class="goods_name">HUAWEI p40 Pro</span>
              <span class="goods_remark">麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 全网通5G手机</span>
              <div class="goods_price">
                ￥<span>5699</span>
              </div>
              <div class="goods_sale_num">
                        <span style="display: inline-block;width: 100%">
                            <span class="goods_sale_show_btn">多款可选</span>
                        </span>
                <span style="display: inline-block;width: 100%;text-align: right">
                            月销:<span>45678</span>
                        </span>
              </div>
            </div>
          </div>
          <div class="good-boxs">
            <div class="good-box">
              <div class="goods_img_box">
                <img src="src/img/phone/HUAWEI%20p40%20Pro%205G.png" class="goods_img"/>
              </div>
              <span class="goods_name">HUAWEI p40 Pro</span>
              <span class="goods_remark">麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 全网通5G手机</span>
              <div class="goods_price">
                ￥<span>5699</span>
              </div>
              <div class="goods_sale_num">
                        <span style="display: inline-block;width: 100%">
                            <span class="goods_sale_show_btn">多款可选</span>
                        </span>
                <span style="display: inline-block;width: 100%;text-align: right">
                            月销:<span>45678</span>
                        </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <!--<div class="foot">
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
    </div>-->
  </div>
</template>

<script>
  import $ from 'jQuery';

  export default {
    name: "sort",
    methods: {
      /*分类展开*/
      typeZhanKai: function () {
        var a = $(".type_box_texts").css("height");
        if (a == "50px") {
          $(".type_box_texts").css("height", "auto");
          $(".zhanKai_text_type").text("收回");
          $(".zhanKai_box_icon_type").attr("src", "src/img/icon/上箭头.png");
        } else {
          $(".type_box_texts").css("height", "50px");
          $(".zhanKai_text_type").text("更多");
          $(".zhanKai_box_icon_type").attr("src", "src/img/icon/下箭头.png");
        }
      },
      /*品牌展开*/
      brandZhanKai: function () {
        var a = $(".brand-box_texts").css("height");
        if (a == "50px") {
          $(".brand-box_texts").css("height", "auto");
          $(".zhanKai_text_brand").text("收回");
          $(".zhanKai_box_icon_brand").attr("src", "src/img/icon/上箭头.png");
        } else {
          $(".brand-box_texts").css("height", "50px");
          $(".zhanKai_text_brand").text("更多");
          $(".zhanKai_box_icon_brand").attr("src", "src/img/icon/下箭头.png");
        }

      },
    }
  }
</script>

<style scoped>
  #box {
    background-color: #f0f3f7;
    padding-bottom: 20px;
  }

  /*顶部样式*//*
  .sort {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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


  !*底部样式*!
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
  }*/

  .type-box {
    width: 100%;
    height: auto;
    background-color: white;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
  }

  .type_box_title {
    width: 190px;
    height: 100%;
    line-height: 50px;
    padding-left: 40px;
    float: left;
  }

  .type_box_texts {
    width: 760px;
    height: 50px;
    line-height: 50px;
    float: left;

  }

  .type_box_text {
    width: 152px;
    height: 50px;
    float: left;
  }

  .type_box_span {
    color: rgb(100, 100, 100);
  }

  .zhanKai_box {
    width: 180px;
    height: 100%;
    float: left;
    line-height: 50px;
    text-align: center;
  }

  .zhanKai_text {
    display: inline-block;
    cursor: pointer;
  }

  .zhanKai_box_icon_type {
    width: 16px;
    height: 16px;
  }

  .brand-box {
    width: 100%;
    height: auto;
    background-color: white;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
  }

  .brand-box_title {
    width: 190px;
    height: 100%;
    line-height: 50px;
    padding-left: 40px;
    float: left;
  }

  .brand-box_texts {
    width: 760px;
    height: 50px;
    line-height: 50px;
    float: left;
  }

  .brand-box_text {
    width: 152px;
    height: 50px;
    float: left;
  }

  .brand-box_span {
    color: rgb(100, 100, 100);
  }

  .zhanKai_box_icon_brand {
    width: 16px;
    height: 16px;
  }

  .goods-box {
    margin-top: 20px;
    width: 100%;
    float: left;
    height: auto;
  }

  .good-boxs {
    width: 25%;
    height: 340px;
    padding: 10px;
    float: left;
  }

  .good-box {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
  }

  .good-box:hover {
    transform: scale(1.05, 1.05);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    transition: .3s;
  }

  .goods_img_box {
    float: left;
    width: 100%;
    height: 65%;
    padding: 10px;
    text-align: center;
  }

  .goods_img {
    width: 188px;
    height: 188px;
  }

  .goods_name {
    float: left;
    display: inline-block;
    width: 100%;
    color: rgba(0, 0, 0, .7);
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .goods_remark {
    float: left;
    display: inline-block;
    width: 100%;
    color: rgba(0, 0, 0, .6);
    text-align: center;
    font-size: 13px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .goods_price {
    display: inline-block;
    color: red;
    width: 50%;
    float: left;
    height: 70px;
    line-height: 70px;
    font-size: 23px;
    padding-left: 20px;
  }

  .goods_sale_show_btn {
    display: inline-block;
    border-radius: 5px;
    border: dodgerblue solid 1px;
    font-size: 12px;
    color: dodgerblue;
    padding-left: 5px;
    padding-right: 5px;
    float: right;
  }

  .goods_sale_num {
    width: 50%;
    display: inline-block;
    font-size: 12px;
    color: rgba(0, 0, 0, .6);
    float: right;
    padding-right: 20px;
    padding-top: 15px;
  }
</style>
