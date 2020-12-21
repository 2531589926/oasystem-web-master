<template>
  <div class="cart">

    <!-- 购物车 -->
    <div id="shopping-cart" class="page-shopping-cart">
      <h4 class="cart-title">购物清单</h4>
    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection"  width="100" align="center"></el-table-column>
      <el-table-column label="商" width="100" align="right">
        <template slot-scope="scope">
          <img :src="scope.row.commodity_img" width="98" height="98" alt="">
        </template>
      </el-table-column>
      <el-table-column label="品" width="400" align="left" class="td-product">
        <template slot-scope="scope">
          <div class="product-info">
            <h6 style="display: inline-block;width: 300px;">{{scope.row.commodity_name}}</h6>
            <p>品牌：{{scope.row.commodity_brand}}&nbsp;&nbsp;颜色:{{scope.row.commodity_color}}&nbsp;&nbsp;</p>
            <p>版本：{{scope.row.commodity_version}}</p>
          </div>
          <div class="clearfix"></div>
        </template>
      </el-table-column>
      <el-table-column label="数量" align="center" width="192">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.commodity_num" :min="1" :max="10" label="描述文字"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column  label="单价(元)" align="center">
        <template slot-scope="scope">
          <p class="red-text">￥<span class="price-text">{{scope.row.commodity_price}}</span>.00</p>
        </template>
      </el-table-column>
      <el-table-column  label="金额(元)" align="center">
        <template slot-scope="scope">
          <p class="red-text">￥<span class="price-text">{{scope.row.commodity_num*scope.row.commodity_price}}</span>.00</p>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
<!--          <el-popconfirm-->
<!--            confirm-button-text='确认'-->
<!--            cancel-button-text='取消'-->
<!--            icon="el-icon-info"-->
<!--            icon-color="red"-->
<!--            title="确定移除该商品吗？"-->
<!--            @confirm="delOne(scope.row.id)"-->
<!--          >-->
          <a href="javascript:;" class="product-delete" @click="delOne(scope.row.id)">删除</a>
<!--          </el-popconfirm>-->
        </template>
      </el-table-column>
    </el-table>

    <!-- 最后一行统计 -->
    <div class="cart-product-info">
      <a href="javascript:;" class="delete-product" @click="delchecked"><span></span>删除所选商品</a>
      <a href="#" class="keep-shopping" @click="keepShopping"><span></span>继续购物</a>
      <a href="javascript:;" class="fr btn-buy" @click="bug">去结算</a>
      <a href="javascript:;" class="fr product-total">￥<span>{{totalPrice}}</span></a>
      <a href="javascript:;" class="fr check-num"><span>{{totalNumber}}</span>件商品总计（不含运费）:</a>
    </div>

      </div>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        editIsDialog: false, //编辑弹窗
        addIsDialog: false, //添加弹窗
        multipleSelection: [], //存放已选择的数据
        formData: {
          name: "",
          price: "",
          number: ""
        },
        editData: {},
        formLabelWidth: "200",
        //表格中的数据
        tableData: [],
        delids:[],//要删除的id数组集合
      };
    },
    methods: {
      // 点击复选框发生的变化
      handleSelectionChange(val) {
        this.multipleSelection = val; //给定义的数组赋值

        // 去重获取被选中的id值存入到数组中
        if(val.length==0){
          this.delids.length=0;
        }else{

          //先清空之前的
          this.delids.length=0;
          //push值进去
          for (let selectedItem of val) {
            this.delids.push(selectedItem.id)
          }

        }
      },
      handleDelete(index, row) {
        alert("取消了");
      },
      //获取购物车数据
      getData(){
        var _this = this;

        var params = new URLSearchParams();
        params.append("user_id",1);

        this.$axios.post("shoppingCar/query.action",params).
        then(function (result) {
          //获取到购物车对象集合
          var shoppingCartList = result.data.rows;
          console.log(shoppingCartList);
          //循环赋值到数组中
          var shoppingCartLists = [];
          var shoppingCart = {};
          for (var i = 0; i < shoppingCartList.length; i++) {
            shoppingCart={
              'id':shoppingCartList[i].id,
              'commodity_name':shoppingCartList[i].commodity.name,
              'commodity_brand':shoppingCartList[i].commodity.brand.name,
              'commodity_version':shoppingCartList[i].versionInfo.version,
              'commodity_color':shoppingCartList[i].colorInfo.color,
              'commodity_num':shoppingCartList[i].number,
              'commodity_price':shoppingCartList[i].versionInfo.price,
              'commodity_img':'src/assets/'+shoppingCartList[i].commodity_img
            };
            //加入到集合中
            shoppingCartLists.push(shoppingCart);
          }

          _this.tableData=shoppingCartLists;

        }).
        catch(function (error) {
          alert(error);
        });
      },
      //删除单个购物车
      delOne(id){
        var _this =this;

        var delid = id+",";
        var params = new URLSearchParams();
        params.append("ids",delid);


        this.$axios.post("shoppingCar/delete.action",params).
        then(function (result) {  //成功  执行then里面的方法

          _this.$message({
            message: result.data,
            type: 'success'
          });

          _this.getData();  //删除操作做完，刷新数据

        }).catch(function (error) { //失败 执行catch方法
          alert(error);
        });

        //操作做完 清空delids
        this.delids.length=0;

      },
      //删除勾选的商品
      delchecked(){
        var _this = this;

        var delids = _this.delids;

        //判断用户是否选中了商品
        if(delids.length==0){
          alert("请选中商品后删除！！！");
          return;
        }

        var delidsString = "";
        //循环合成一个id字符串
        for(var i=0;i<delids.length;i++){
          alert(delids[i]);
          delidsString=delidsString+delids[i]+",";
        }

        var params = new URLSearchParams();
        params.append("ids",delidsString);

        this.$axios.post("shoppingCar/delete.action",params).
        then(function (result) {  //成功  执行then里面的方法

          _this.$message({
            message: result.data,
            type: 'success'
          });

          _this.getData();  //删除操作做完，刷新数据

        }).catch(function (error) { //失败 执行catch方法
          alert(error);
        });

        //操作做完 清空delids
        this.delids.length=0;
      },
      //继续购物
      keepShopping(){
        //跳转到商品浏览界面
      },
      //结算
      bug(){
        //点击结算时，添加订单数据
        var _this = this;

        var params = new URLSearchParams();

      },
    },
    // 通过computed计算属性及时改变
    computed: {
      // 总价
      totalPrice() {
        var price_total = 0;
        for (var i = 0; i < this.multipleSelection.length; i++) {
          price_total +=
            this.multipleSelection[i].commodity_price * this.multipleSelection[i].commodity_num;
        }
        return price_total;
      },
      // 总数
      totalNumber() {
        var number_total = 0;
        for (var i = 0; i < this.multipleSelection.length; i++) {
          number_total += this.multipleSelection[i].commodity_num;
        }
        return number_total;
      }
    },
    components: {},
    created() {
      this.getData();
    }
  };
</script>

<style scoped>
  .cart {
    margin: 50px auto;
    width: 1000px;
  }
  .group_btn {
    margin-bottom: 30px;
  }
  .addDialog .el-input {
    width: 90%;
  }
  .total_warpper {
    text-align: right;
    margin-top: 30px;
  }
  h3 {
    margin-top: 10px;
  }

  /*新复制来的样式*/
  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  blockquote,
  body,
  dd,
  div,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  img,
  input,
  li,
  ol,
  p,
  table,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }

  .clearfix {
    zoom: 1;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix:after {
    content: '.';
    display: block;
    overflow: hidden;
    visibility: hidden;
    font-size: 0;
    line-height: 0;
    width: 0;
    height: 0;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: middle;
  }

  .page-shopping-cart {
    width: 1200px;
    margin: 50px auto;
    font-size: 14px;
    border: 1px solid #e3e3e3;
    border-top: 2px solid #317ee7;
  }

  .page-shopping-cart .cart-title {
    color: #317ee7;
    font-size: 16px;
    text-align: left;
    padding-left: 20px;
    line-height: 68px;
  }

  .page-shopping-cart .red-text {
    color: #e94826;
  }

  .page-shopping-cart .check-span {
    display: block;
    width: 24px;
    height: 24px;
    margin-top: 9px;
    background: url("../src/assets/勾选 (1).png") no-repeat center;
    background-size: 100% 100%;
    cursor: pointer;
  }
  /* 点击时改变勾选 */

  .page-shopping-cart .check-span.check-true {
    background: url("../src/assets/勾选.png") no-repeat center;
    background-size: 100% 100%;
    cursor: pointer;
  }

  .page-shopping-cart .td-check {
    width: 70px;
  }

  .page-shopping-cart .td-product {
    width: 460px;
  }

  .page-shopping-cart .td-num,
  .page-shopping-cart .td-price,
  .page-shopping-cart .td-total {
    width: 160px;
  }

  .page-shopping-cart .td-do {
    width: 150px;
  }

  .cart-product-title {
    text-align: center;
    height: 38px;
    line-height: 38px;
    padding: 0 20px;
    background-color: #f7f7f7;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
  }

  .cart-product-title .td-product {
    text-align: center;
    font-size: 14px;
  }

  .cart-product-title .td-check {
    text-align: left;
  }

  .cart-product-title .td-check .check-span .check-span {
    margin: 9px 6px 0 0;
  }
  /* 内容开始 */

  .cart-product {
    padding: 0 20px;
    text-align: center;
  }

  .cart-product table {
    width: 100%;
    text-align: center;
    font-size: 14px;
  }

  .cart-product table td {
    padding: 20px 0;
  }

  .cart-product table tr {
    border-bottom: 1px dashed #e3e3e3;
  }

  .cart-product table tr:last-child {
    border-bottom: none;
  }

  .cart-product table .product-num {
    border: 1px solid #e3e3e3;
    display: inline-block;
    text-align: center;
  }

  .cart-product table .product-num .num-do {
    width: 24px;
    height: 28px;
    background: #f7f7f7;
    display: block;
  }

  .cart-product table .product-num .num-reduce span {
    display: block;
    width: 6px;
    height: 2px;
    margin: 13px auto 0 auto;
    background: url("assets/加号.png") no-repeat -40px -22px;
  }

  .cart-product table .product-num .num-add span {
    display: block;
    width: 8px;
    height: 8px;
    margin: 10px auto 0 auto;
    background: url("assets/加号.png") no-repeat -60px -22px;
  }

  .cart-product table .product-num .num-input {
    width: 42px;
    height: 28px;
    line-height: 28px;
    border: none;
    text-align: center;
  }

  .cart-product table .td-product {
    text-align: center;
    font-size: 12px;
    line-height: 20px;
  }

  .cart-product table .td-product img {
    border: 1px solid #e3e3e3;
    margin-right: 10px;
  }

  .cart-product table .td-product .product-info {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
  }

  .cart-product table .td-do {
    font-size: 12px;
  }
  /* 最后一行统计 */

  .cart-product-info {
    height: 50px;
    line-height: 50px;
    background: #f7f7f7;
    padding-left: 20px;
  }

  .cart-product-info .delete-product {
    color: #666;
  }

  .cart-product-info .delete-product span {
    display: inline-block;
    vertical-align: top;
    margin: 18px 8px 0 0;
    width: 13px;
    height: 15px;
    background: url("assets/删除.png") no-repeat -60px 0;
  }

  .cart-product-info .product-total {
    font-size: 14px;
    color: #e94826;
  }

  .cart-product-info .product-total span {
    font-size: 20px;
  }

  .cart-product-info .check-num {
    color: #333;
  }

  .cart-product-info .check-num span {
    color: #e94826;
  }

  .cart-product-info .keep-shopping {
    color: #666;
    margin-left: 40px;
  }

  .cart-product-info .keep-shopping span {
    display: inline-block;
    vertical-align: top;
    margin: 18px 8px 0 0;
    width: 15px;
    height: 15px;
    background: url("assets/购物车.png") no-repeat -40px 0;
  }

  .cart-product-info .btn-buy {
    height: 50px;
    color: #fff;
    font-size: 20px;
    display: block;
    width: 110px;
    background: #ff7700;
    text-align: center;
    margin-left: 30px;
  }
  /* cart-worder */

  .page-shopping-cart .cart-worder {
    padding: 20px;
  }

  .page-shopping-cart .cart-worder .choose-worder {
    color: #fff;
    display: block;
    background: #39e;
    width: 140px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    text-align: center;
    margin-right: 20px;
  }

  .page-shopping-cart .cart-worder .choose-worder span {
    display: inline-block;
    vertical-align: top;
    margin: 9px 10px 0 0;
    width: 22px;
    height: 22px;
    /*background: url("cartBg.png") no-repeat -92px 0;*/
  }

  .page-shopping-cart .cart-worder .worker-info {
    color: #666;
  }

  .page-shopping-cart .cart-worder .worker-info img {
    border-radius: 100%;
    margin-right: 10px;
  }

  .page-shopping-cart .cart-worder .worker-info span {
    color: #000;
  }

  .choose-worker-box {
    width: 620px;
    background: #fff;
  }

  .choose-worker-box .box-title {
    height: 40px;
    line-height: 40px;
    background: #F7F7F7;
    text-align: center;
    position: relative;
    font-size: 14px;
  }

  .choose-worker-box .box-title a {
    display: block;
    position: absolute;
    top: 15px;
    right: 16px;
    width: 10px;
    height: 10px;
    /*background: url("shopping_cart.png") no-repeat -80px 0;*/
  }

  .choose-worker-box .box-title a:hover {
    /*background: url("shopping_cart.png") no-repeat -80px -22px;*/
  }

  .choose-worker-box .worker-list {
    padding-top: 30px;
    height: 134px;
    overflow-y: auto;
  }

  .choose-worker-box .worker-list li {
    float: left;
    width: 25%;
    text-align: center;
    margin-bottom: 30px;
  }

  .choose-worker-box .worker-list li p {
    margin-top: 8px;
  }

  .choose-worker-box .worker-list li.cur a {
    color: #f70;
  }

  .choose-worker-box .worker-list li.cur a img {
    border: 1px solid #f70;
  }

  .choose-worker-box .worker-list li a:hover {
    color: #f70;
  }

  .choose-worker-box .worker-list li a:hover img {
    border: 1px solid #f70;
  }

  .choose-worker-box .worker-list li img {
    border: 1px solid #fff;
    border-radius: 100%;
  }
</style>
