<template>
  <div>

    <el-button
      slot="reference"
      icon="el-icon-edit"
      style="color: green"
      @click="insertdialogFormVisible = true"
    >添加仓库</el-button>

    <!--    表格展示开始-->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="仓库名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="adress"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作">
        <template slot-scope="scope">
          <!--        编辑按钮开始-->
          <el-button
            slot="reference"
            icon="el-icon-edit"
            circle
            style="color: red"
            @click="editto(scope.row.id)"
          ></el-button>
          <!--        编辑按钮结束-->

          <!--        删除按钮开始-->
          <el-popconfirm
            confirm-button-text='确认'
            cancel-button-text='取消'
            icon="el-icon-info"
            icon-color="red"
            title="确定删除该仓库吗？"
            @confirm="del(scope.row.id)"
          >
            <el-button
              slot="reference"
              icon="el-icon-delete-solid"
              circle
              style="color: red"
            ></el-button>
          </el-popconfirm>
          <!--        删除按钮结束-->
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pagesize"
        layout="sizes, prev, pager, next"
        :total="totalnum">
      </el-pagination>
    </div>
    <!--    表格展示开始-->

    <!--    编辑模态框开始-->
    <el-dialog title="仓库信息编辑" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="仓库名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仓库地址" :label-width="formLabelWidth">
          <el-input v-model="form.adress" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仓库电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仓库备注" :label-width="formLabelWidth">
          <el-input v-model="form.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </div>
    </el-dialog>
    <!--    编辑模态框结束-->

    <!--    添加模态框开始-->
    <el-dialog title="仓库信息添加" :visible.sync="insertdialogFormVisible">
      <el-form :model="form">
        <el-form-item label="仓库名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仓库地址" :label-width="formLabelWidth">
          <el-input v-model="form.adress" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仓库电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仓库备注" :label-width="formLabelWidth">
          <el-input v-model="form.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="insertdialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="insert">确 定</el-button>
      </div>
    </el-dialog>
    <!--    添加模态框结束-->

  </div>

</template>

<script>
    export default {
        name: "warehouse",
        data() {
          return {
            tableData:[],
            gridData: [
              {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
            insertdialogFormVisible:false,
            form: {
              id:'',
              name: '',
              adress:'',
              phone:'',
              remark:'',
            },
            formLabelWidth: '120px',
            pageindex:1,//当前第几页
            totalnum:1,//总共的条数
            pagesize:5,//每页几条
          }
        },
        methods:{
          getDate(){
            var _this =this;

            var params = new URLSearchParams();
            params.append('page',_this.pageindex);
            params.append('rows',_this.pagesize);

            this.$axios.post("warehouse/query.action",params).
            then(function (result) {  //成功  执行then里面的方法

              _this.tableData=result.data.rows;

              var totalnum = result.data.total;
              _this.totalnum=totalnum;
              var pagetotal = totalnum%5==0?totalnum/5:Math.floor(totalnum/5)+1;
              _this.pagetotal=pagetotal;

            }).catch(function () { //失败 执行catch方法

            });
          },
          del(id){
            var delid = id+",";
            var _this =this;
            var params = new URLSearchParams();
            params.append("ids",delid);


            this.$axios.post("warehouse/delete.action",params).
            then(function (result) {  //成功  执行then里面的方法

              _this.$message({
                message: result.data,
                type: 'success'
              });

              _this.getDate();  //删除操作做完，刷新数据

            }).catch(function (error) { //失败 执行catch方法
              alert(error);
            });

            //将pageindex归为1
            this.pageindex=1;

          },
          editto(id){
            var _this = this;
            _this.dialogFormVisible = true;

            var params = new URLSearchParams();
            params.append("id",id)
            //将数据异步显示
            this.$axios.post('warehouse/queryById.action',params).
            then(function (result) {
              _this.form=result.data;
            }).
            catch(function (error) {
              alert(error);
            });

          },
          edit(){
            var _this = this;
            var params = new URLSearchParams();
            params.append('id',_this.form.id);
            params.append('name',_this.form.name);
            params.append('adress',_this.form.adress);
            params.append('phone',_this.form.phone);
            params.append('remark',_this.form.remark);

            //执行编辑操作
            this.$axios.post("warehouse/update.action",params).
            then(function (result) {
              _this.$message({
                message: result.data,
                type: 'success'
              });

              _this.getDate();  //修改操作做完，刷新数据

              _this.form={id:'',name: '',adress:'',phone:'',remark:'',};//清空表单中的数据

            }).catch(function (error) {

             alert(error);

            })
            //关闭编辑模态框
            this.dialogFormVisible = false;
          },
          insert(){
            var _this = this;
            var params = new URLSearchParams();
            params.append('name',_this.form.name);
            params.append('adress',_this.form.adress);
            params.append('phone',_this.form.phone);
            params.append('remark',_this.form.remark);

            this.$axios.post('warehouse/insert.action',params).
            then(function (result) {

              _this.$message({
                message: result.data,
                type: 'success'
              });

              _this.getDate();  //修改操作做完，刷新数据

              _this.form={id:'',name: '',adress:'',phone:'',remark:'',};//清空表单中的数据
            }).
            catch(function (error) {
              alert(error);
            });

            this.insertdialogFormVisible=false;//隐藏添加模态框
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pagesize=val;
            this.getDate();
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.pageindex=val;
            this.getDate();
          },
        },
      created() {
          this.getDate();
      }
    }
</script>

<style scoped>

</style>
