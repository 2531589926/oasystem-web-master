<template>
    <div class="index">
      <div id="box">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          <div class="types-oder-box" @mouseover="menuHide"></div>
          <div class="container">
            <div id="types_box">
              <!--左侧分类菜单-->
              <div class="types-menu">
                    <span @mouseover="menuShow(1)" class="menus">手机<span
                      style="color: gray;float: right;margin-right: 20px;font-size: 20px">></span></span>
                <span @mouseover="menuShow(2)" class="menus">笔记本<span
                  style="color: gray;float: right;margin-right: 20px;font-size: 20px">></span></span>
                <span @mouseover="menuShow(3)" class="menus">智能穿戴<span
                  style="color: gray;float: right;margin-right: 20px;font-size: 20px">></span></span>
                <span @mouseover="menuShow(4)" class="menus">智能家居<span
                  style="color: gray;float: right;margin-right: 20px;font-size: 20px">></span></span>
                <span @mouseover="menuShow(5)" class="menus">耳机音响<span
                  style="color: gray;float: right;margin-right: 20px;font-size: 20px">></span></span>
                <span @mouseover="menuShow(6)" class="menus">配件<span
                  style="color: gray;float: right;margin-right: 20px;font-size: 20px">></span></span>
              </div>
              <!--手机分类-->
              <div id="menu1" class="menus-xx">
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/华为.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">华为</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/iphone.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">苹果</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/魅族.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">魅族</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/小米.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">小米</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/vivo.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">vivo</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/oppo.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">oppo</span>
                    </div>
                  </a>
                </div>
                <!--查看全部-->
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-whole">
                      <span class="menus-xx-type-whole-left">></span>
                      <span class="menus-xx-type-whole-right">查看全部</span>
                    </div>
                  </a>
                </div>
              </div>
              <!--笔记本分类-->
              <div id="menu2" class="menus-xx">
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/华硕.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">华硕</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/华为.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">华为</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/联想.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">联想</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/iphone.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">苹果</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/戴尔.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">戴尔</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/神州.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">神州</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/小米.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">小米</span>
                    </div>
                  </a>
                </div>
                <!--查看全部-->
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-whole">
                      <span class="menus-xx-type-whole-left">></span>
                      <span class="menus-xx-type-whole-right">查看全部</span>
                    </div>
                  </a>
                </div>
              </div>
              <!--智能穿戴分类-->
              <div id="menu3" class="menus-xx">
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/智能手表.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">智能手表</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/儿童手表.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">儿童手表</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/智能手环.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">智能手环</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/VR.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">VR</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/智能体脂秤.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">智能体脂秤</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/智能穿戴.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">穿戴配件</span>
                    </div>
                  </a>
                </div>
                <!--查看全部-->
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-whole">
                      <span class="menus-xx-type-whole-left">></span>
                      <span class="menus-xx-type-whole-right">查看全部</span>
                    </div>
                  </a>
                </div>
              </div>
              <!--智能家居分类-->
              <div id="menu4" class="menus-xx">
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/智能眼镜.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">智能眼镜</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/智能路由.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">智能路由</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/移动路由.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">移动路由</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/智能存储.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">智能存储</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/HiLink生态.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">HiLink生态</span>
                    </div>
                  </a>
                </div>
                <!--查看全部-->
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-whole">
                      <span class="menus-xx-type-whole-left">></span>
                      <span class="menus-xx-type-whole-right">查看全部</span>
                    </div>
                  </a>
                </div>
              </div>
              <!--耳机音响分类-->
              <div id="menu5" class="menus-xx">
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/智能音箱.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">智能音箱</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/蓝牙音箱.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">蓝牙音箱</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/真无线耳机.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">真无线耳机</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/有线耳机.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">有线耳机</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/蓝牙耳机.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">蓝牙耳机</span>
                    </div>
                  </a>
                </div>
                <!--查看全部-->
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-whole">
                      <span class="menus-xx-type-whole-left">></span>
                      <span class="menus-xx-type-whole-right">查看全部</span>
                    </div>
                  </a>
                </div>
              </div>
              <!--配件分类-->
              <div id="menu6" class="menus-xx">
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/充电器线材.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">充电器/线材</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/生活周边.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">生活周边</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/电脑包.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">电脑包</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/移动电源.jpg" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">移动电源</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/保护壳.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">保护壳</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/贴膜.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">贴膜</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/个人电脑配件.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">个人电脑配件</span>
                    </div>
                  </a>
                </div>
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-box">
                      <img src="src/img/logo/自拍杆支架.png" class="menus-xx-type-img">
                      <span class="menus-xx-type-title">自拍杆/支架</span>
                    </div>
                  </a>
                </div>

                <!--查看全部-->
                <div class="menus-xx-type">
                  <a href="javascript:;">
                    <div class="menus-xx-type-whole">
                      <span class="menus-xx-type-whole-left">></span>
                      <span class="menus-xx-type-whole-right">查看全部</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="types-oder-box" @mouseover="menuHide" style="margin-top: 350px"></div>
          <!--图片轮播-->
          <div>
            <ul class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ul>
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <a href="javascript:;"
                   style="display: block;width: 100%;height: 400px;background: url('src/img/bg1.jpg') center">
                </a>

                <div class="carousel-caption">
                  <h1></h1>
                  <p></p>
                </div>
              </div>
              <div class="item">
                <a href="javascript:;"
                   style="display: block;width: 100%;height: 400px;background: url('src/img/bg2.jpg') center">
                </a>
                <div class="carousel-caption">
                  <h1></h1>
                  <p></p>
                </div>
              </div>
              <div class="item">
                <a href="javascript:;"
                   style="display: block;width: 100%;height: 400px;background: url('src/img/bg3.jpg') center">
                </a>
                <div class="carousel-caption">
                  <h1></h1>
                  <p></p>
                </div>
              </div>
            </div>
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="sr-only">上一页</span> </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="sr-only">下一页</span>
            </a>
          </div>
        </div>
        <div style="width: 1170px;margin: auto">
          <!--个人/分类-->
          <div id="type-box">
            <div class="personal-box">
              <a href="javascript:;" class="personal-box-img"></a>
              <div class="personal-box-name">
                <span class="personal-box-name-span">您好，请</span>
                <a class="personal-box-name-a" href="javascript:;">登录</a>
                <span class="personal-box-name-span">/</span>
                <a class="personal-box-name-a" href="javascript:;">注册</a>
              </div>
              <div class="personal-box-btn">
                <button class="personal-box-btn-personal">个人中心</button>
                <button class="personal-box-btn-about">关于我们</button>
              </div>
            </div>
            <div class="type-box-center">

            </div>
            <div class="type-box-right">
              <div class="type-box-right-top">
                <span class="notice-title">公告</span>
                <span class="notice-text"></span>
              </div>
              <div class="type-box-right-bottom">

              </div>
            </div>
          </div>
          <!--热门商品-->
          <div style="width: 100%" id="hot-goods-box">
            <span class="goods-type-title">热销单品</span>

            <div style="height: 500px;">
              <div id="hot-left-box">
                <div id="hot-left">

                </div>
              </div>
              <div class="hot-goods-boxs">
                <div class="hot-goods">
                  <div class="goods-img-box">
                    <img class="goods-img" src="src/img/phone/HUAWEI%20Mate%2040%20Pro+%205G.png"/>
                  </div>
                  <div class="goods-remark-box">
                    <span class="goods-name">HUAWEI Mate40 Pro+ 5G</span>
                    <span class="goods-remark">5000万像素超感知摄像头，麒麟9000处理器</span>
                    <span class="goods-price">￥8999</span>
                  </div>
                </div>
              </div>
              <div class="hot-goods-boxs">
                <div class="hot-goods">
                  <div class="goods-img-box">
                    <img class="goods-img" src="src/img/phone/HUAWEI%20p40%20Pro%205G.png"/>
                  </div>
                  <div class="goods-remark-box">
                    <span class="goods-name">HUAWEI p40 Pro 5G</span>
                    <span class="goods-remark">麒麟990 5G SoC芯片 5000万超感知徕卡四摄 50倍数字变焦 全网通5G手机</span>
                    <span class="goods-price">￥5988</span>
                  </div>
                </div>
              </div>
              <div class="hot-goods-boxs">
                <div class="hot-goods">
                  <div class="goods-img-box">
                    <img class="goods-img" src="src/img/phone/Redmi%20k30%20至尊版.png"/>
                  </div>
                  <div class="goods-remark-box">
                    <span class="goods-name">Redmi k30 至尊版</span>
                    <span class="goods-remark">天玑1000+旗舰处理器，120Hz高刷</span>
                    <span class="goods-price">￥1999</span>
                  </div>
                </div>
              </div>
              <div class="hot-goods-boxs">
                <div class="hot-goods">
                  <div class="goods-img-box">
                    <img class="goods-img" src="src/img/phone/ROG游戏手机3精英版%20ROG3.png"/>
                  </div>
                  <div class="goods-remark-box">
                    <span class="goods-name">ROG游戏手机3精英版 ROG3</span>
                    <span class="goods-remark">骁龙865处理器，144Hz电竞屏，6000mAh电池</span>
                    <span class="goods-price">￥3999</span>
                  </div>
                </div>
              </div>
              <div class="hot-goods-boxs">
                <div class="hot-goods">
                  <div class="goods-img-box">
                    <img class="goods-img" src="src/img/phone/一加%20One%20Plus%20Pro%205G.png"/>
                  </div>
                  <div class="goods-remark-box">
                    <span class="goods-name">一加 One Plus Pro 5G</span>
                    <span class="goods-remark">2K+120Hz 柔性屏 30W无线闪充 高通骁龙865</span>
                    <span class="goods-price">￥5999</span>
                  </div>
                </div>
              </div>
              <div class="hot-goods-boxs">
                <div class="hot-goods">
                  <div class="goods-img-box">
                    <img class="goods-img" src="src/img/phone/腾讯黑鲨%203s.png"/>
                  </div>
                  <div class="goods-remark-box">
                    <span class="goods-name">腾讯黑鲨 3s</span>
                    <span class="goods-remark">骁龙865处理器，120Hz刷新率</span>
                    <span class="goods-price">￥3999</span>
                  </div>
                </div>
              </div>
              <div class="hot-goods-boxs">
                <div class="hot-goods">
                  <div class="goods-img-box">
                    <img class="goods-img" src="src/img/phone/联想拯救者电竞手机Pro.jpg"/>
                  </div>
                  <div class="goods-remark-box">
                    <span class="goods-name">联想拯救者电竞手机Pro</span>
                    <span class="goods-remark">骁龙865Plus处理器，双液冷散热，144Hz电竞屏</span>
                    <span class="goods-price">￥5899</span>
                  </div>
                </div>
              </div>
              <div class="hot-goods-boxs">
                <div class="hot-goods">
                  <div class="goods-img-box">
                    <img class="goods-img" src="src/img/phone/三星%20Galaxy%20A71%205G.jpg"/>
                  </div>
                  <div class="goods-remark-box">
                    <span class="goods-name">三星 Galaxy A71 5G</span>
                    <span class="goods-remark">双模5G，6400万后置四摄，4500mAh大电池</span>
                    <span class="goods-price">￥2899</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--新品优惠-->
          <div style="width: 100%" id="new-goods-box">
            <span class="goods-type-title">新品优惠</span>

            <div class="new-goods-boxs">
              <div class="new-goods">

              </div>
            </div>
            <div class="new-goods-boxs">
              <div class="new-goods">

              </div>
            </div>
            <div class="new-goods-boxs">
              <div class="new-goods">

              </div>
            </div>
            <div class="new-goods-boxs">
              <div class="new-goods">

              </div>
            </div>
            <div class="new-goods-boxs">
              <div class="new-goods">

              </div>
            </div>
            <div class="new-goods-boxs">
              <div class="new-goods">

              </div>
            </div>
            <div class="new-goods-boxs">
              <div class="new-goods">

              </div>
            </div>
            <div class="new-goods-boxs">
              <div class="new-goods">

              </div>
            </div>
            <div class="new-goods-boxs">
              <div class="new-goods">

              </div>
            </div>
            <div class="new-goods-boxs">
              <div class="new-goods">

              </div>
            </div>
          </div>
          <!--推荐商品-->
          <div style="width: 100%" id="recommend-goods-box">
            <span class="goods-type-title">数码推荐</span>

            <div class="recommend-goods-boxs">
              <div class="recommend-goods">

              </div>
            </div>
            <div class="recommend-goods-boxs">
              <div class="recommend-goods">

              </div>
            </div>
            <div class="recommend-goods-boxs">
              <div class="recommend-goods">

              </div>
            </div>
            <div class="recommend-goods-boxs">
              <div class="recommend-goods">

              </div>
            </div>
            <div class="recommend-goods-boxs">
              <div class="recommend-goods">

              </div>
            </div>
            <div class="recommend-goods-boxs">
              <div class="recommend-goods">

              </div>
            </div>
            <div class="recommend-goods-boxs">
              <div class="recommend-goods">

              </div>
            </div>
            <div class="recommend-goods-boxs">
              <div class="recommend-goods">

              </div>
            </div>
            <div class="recommend-goods-boxs">
              <div class="recommend-goods">

              </div>
            </div>
            <div class="recommend-goods-boxs">
              <div class="recommend-goods">

              </div>
            </div>
          </div>
          <!--广告-->
          <div style="width: 100%" id="gg-bottom">
            <a href="javascript:;" class="gg-bottom-a"></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
