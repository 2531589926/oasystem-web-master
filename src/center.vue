<template>
  <div class="center">
    <div id="box">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <div class="types-oder-box" @mouseover="menuHide"></div>
        <div class="container">
          <div id="types_box">
            <!--左侧分类菜单-->
            <div class="types-menu">
                    <span @mouseover="menuShow(1)" class="menus">手机<span
                      class="menus_jt">></span></span>
              <span @mouseover="menuShow(2)" class="menus">笔记本<span
                class="menus_jt">></span></span>
              <span @mouseover="menuShow(3)" class="menus">智能穿戴<span
                class="menus_jt">></span></span>
              <span @mouseover="menuShow(4)" class="menus">智能家居<span
                class="menus_jt">></span></span>
              <span @mouseover="menuShow(5)" class="menus">耳机音响<span
                class="menus_jt">></span></span>
              <span @mouseover="menuShow(6)" class="menus">配件<span
                class="menus_jt">></span></span>
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
                    <img src="src/img/logo/自拍杆支架.png" class="menus-xx-type-img"/>
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
                <span class="hot-left-name">HUAWEI Mate40RS 保时捷</span>
                <span class="hot-left-price">￥11999起</span>
                <img src="src/img/phone/index华为保时捷RS.png" class="hot-left-img"/>
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
  import $ from "jquery";

  export default {
    name: "center",
    methods: {
      menuShow: function (data) {
        $(".types-menu").css("border-radius", "10px 0 0 10px");
        $(".menus-xx").hide();
        if (data == 1) {
          $("#menu1").show();
        } else if (data == 2) {
          $("#menu2").show();
        } else if (data == 3) {
          $("#menu3").show();
        } else if (data == 4) {
          $("#menu4").show();
        } else if (data == 5) {
          $("#menu5").show();
        } else if (data == 6) {
          $("#menu6").show();
        }
      },
      menuHide: function () {
        $(".types-menu").css("border-radius", "10px");
        $(".menus-xx").hide();
      },
    }
  }
</script>

<style scoped>

  .types-oder-box {
    height: 50px;
    width: 100%;
    position: absolute;
    z-index: 777;
  }

  #types_box {
    width: 800px;
    height: 300px;
    position: absolute;
    z-index: 888;
    margin-top: 50px;
  }

  .types-menu {
    height: 100%;
    width: 200px;
    float: left;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    overflow: hidden;
  }

  .menus {
    display: inline-block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    cursor: pointer;
    background-color: rgba(250, 250, 250, .8);
  }

  .menus:hover {
    background-color: rgb(255, 255, 255);
    box-shadow: 0 5px 5px 5px rgba(0, 0, 0, .1);
  }

  .menus_jt {
    color: gray;
    float: right;
    margin-right: 20px;
    font-size: 20px;
  }

  .menus:hover > .menus_jt {
    display: none;
  }

  .menus-xx {
    width: 600px;
    height: 300px;
    float: left;
    background-color: white;
    border-radius: 0 10px 10px 0;
    display: none;
    box-shadow: 10px 0 10px 0 rgba(0, 0, 0, .1);
    padding: 15px 9px 15px 9px;
  }

  .menus-xx-type {
    height: 94px;
    width: 190px;
    float: left;
    padding: 10px;
  }

  .menus-xx-type-box {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: white;
  }

  .menus-xx-type-box:hover {
    background-color: rgb(245, 245, 245);
  }

  .menus-xx-type-img {
    width: 50px;
    height: 50px;
    float: left;
    margin-top: 12px;
    margin-left: 20px;
  }

  .menus-xx-type-title {
    display: inline-block;
    height: 74px;
    width: 90px;
    float: left;
    margin-left: 10px;
    line-height: 74px;
    text-decoration: none;
    color: rgb(50, 50, 50);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .menus-xx-type-whole {
    width: 120px;
    height: 44px;
    border-radius: 50px;
    border-top: rgba(0, 0, 0, .1) solid 1px;
    border-right: rgba(0, 0, 0, .1) solid 1px;
    border-bottom: rgba(0, 0, 0, .1) solid 1px;
    margin-top: 15px;
    margin-left: 25px;
  }

  .menus-xx-type-whole-left {
    display: inline-block;
    background-color: white;
    height: 43px;
    width: 43px;
    border-radius: 100%;
    border: rgba(0, 0, 0, .1) solid 1px;
    float: left;
    line-height: 42px;
    text-align: center;
    color: gray;
    font-size: 20px;
    margin-top: -1px;
  }

  .menus-xx-type-whole-right {
    display: inline-block;
    line-height: 42px;
    color: gray;
    font-size: 13px;
    margin-left: 10px;
    float: left;
  }

  #type-box {
    width: 100%;
    height: 80px;
    background-color: white;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .1);
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
  }

  .personal-box {
    width: 23%;
    height: 100%;
    border-right: rgba(0, 0, 0, .1) solid 1px;
    float: left;
  }

  .personal-box-img {
    display: inline-block;
    float: left;
    height: 46px;
    width: 46px;
    margin-top: 7px;
    margin-left: 10px;
    background-image: url("img/bg1.jpg");
    background-size: 100% 100%;
    border-radius: 100%;
  }

  .personal-box-name {
    width: 200px;
    height: 30px;
    float: left;
    padding-left: 20px;
  }

  .personal-box-name-span {
    line-height: 30px;
    color: gray;
  }

  .personal-box-name-a {
    line-height: 30px;
    color: black;
    text-decoration: none;
  }

  .personal-box-name-a:hover {
    color: black;
    text-decoration: none;
  }

  .personal-box-btn {
    width: 200px;
    height: 30px;
    float: left;
    padding-left: 20px;
  }

  .personal-box-btn-personal {
    background-color: rgb(100, 100, 100);
    border: rgb(100, 100, 100) solid 1px;
    width: 65px;
    height: 20px;
    border-radius: 5px;
    font-size: 12px;
    margin-top: 5px;
    color: white;
    outline: none;
  }

  .personal-box-btn-about {
    background-color: transparent;
    border: black solid 1px;
    width: 65px;
    height: 20px;
    border-radius: 5px;
    font-size: 12px;
    margin-top: 5px;
    outline: none;
  }

  .type-box-center {
    width: 54%;
    height: 100%;
    border-right: rgba(0, 0, 0, .1) solid 1px;
    float: left;
  }

  .type-box-right {
    width: 23%;
    height: 100%;
    float: left;
  }

  .type-box-right-top {
    width: 100%;
    height: 50%;
    border-bottom: rgba(0, 0, 0, .1) solid 1px;
    padding-left: 10px;
  }

  .notice-title {
    color: gray;
    font-weight: bold;
  }

  .type-box-right-bottom {
    width: 100%;
    height: 50%;
  }

  #hot-goods-box {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .goods-type-title {
    margin-top: 20px;
    padding-left: 10px;
    display: inline-block;
    width: 100%;
    font-size: 27px;
    height: 30px;
    line-height: 30px;
  }

  #hot-left-box {
    width: 20%;
    height: 100%;
    float: left;
    padding: 10px;
  }

  #hot-left {
    width: 100%;
    height: 100%;
    background-color: #EEF4FF;
    border-radius: 10px;
    transition: .3s;
    cursor: pointer;
    overflow: hidden;
  }

  #hot-left:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .1);
    transition: .3s;
  }

  .hot-left-name {
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    margin-top: 21px;
    color: rgb(50, 50, 50);
  }

  .hot-left-price {
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: indianred;
    font-size: 15px;
  }

  .hot-left-img {
    width: 100%;
  }

  .hot-goods-boxs {
    width: 20%;
    height: 50%;
    float: left;
    padding: 10px;
  }

  .hot-goods {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    transition: .3s;
    cursor: pointer;
    border: rgba(0, 0, 0, .1) solid 1px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
  }

  .hot-goods:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .1);
    transition: .3s;
    transform: scale(1.05, 1.05);
  }

  .goods-img-box {
    height: 65%;
    width: 100%;
    text-align: center;
  }

  .goods-img {
    width: 130px;
    height: 130px;
    margin-top: 10px;
  }

  .goods-remark-box {
    height: 35%;
    width: 100%;
    text-align: center;
  }

  .goods-name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    width: 80%;
    font-size: 14px;
    color: rgb(50, 50, 50);
  }

  .goods-remark {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    width: 80%;
    font-size: 12px;
    color: rgba(0, 0, 0, .5);

  }

  .goods-price {
    color: red;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    width: 100%;
    font-size: 13px;
  }

  #new-goods-box {
    padding-top: 10px;
    padding-bottom: 10px;
    height: auto;
  }

  .new-goods-boxs {
    height: 275px;
    width: 20%;
    padding: 10px;
    float: left;
  }

  .new-goods {
    width: 100%;
    height: 100%;
    background-color: white;
    border: rgba(0, 0, 0, .1) solid 1px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    border-radius: 10px;
    transition: .3s;
    cursor: pointer;
  }

  .new-goods:hover {
    transition: .3s;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .1);
    transform: scale(1.05, 1.05);
  }

  #recommend-goods-box {
    padding-top: 10px;
    padding-bottom: 10px;
    height: auto;
  }

  .recommend-goods-boxs {
    height: 275px;
    width: 20%;
    padding: 10px;
    float: left;

  }

  .recommend-goods {
    width: 100%;
    height: 100%;
    background-color: white;
    border: rgba(0, 0, 0, .1) solid 1px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    border-radius: 10px;
    transition: .3s;
    cursor: pointer;
  }

  .recommend-goods:hover {
    transition: .3s;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .1);
    transform: scale(1.05, 1.05);
  }

  #gg-bottom {
    padding: 10px;
  }

  .gg-bottom-a {
    display: inline-block;
    width: 100%;
    height: 200px;
    background: url("img/广告1.png") center;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
</style>
