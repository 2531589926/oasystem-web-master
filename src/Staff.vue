<template>

  <div>
    <!--  页头-->
    <el-page-header @back="goBack" content="员工页面">
    </el-page-header>

    <br><br>
    <el-button
      slot="reference"
      icon="el-icon-edit"
      style="color: green"
      @click="insertDialogFormVisible = true"
    >添加员工
    </el-button>
    <br>

    <!--表格-->
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="编号"
        prop="id">
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="账号"
        prop="account">
      </el-table-column>
      <el-table-column
        label="密码"
        prop="password">
      </el-table-column>
      <el-table-column
        label="角色"
        prop="role.name">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入姓名查询"/>
        </template>
<!--        打开编辑模态框-->
        <template slot-scope="scope">
          <el-button
            slot="reference"
            icon="el-icon-edit"
            circle
            style="color: red"
            @click="editm(scope.row.id)"
          ></el-button>
<!--          删除-->
          <el-popconfirm
            confirm-button-text='确认'
            cancel-button-text='取消'
            icon="el-icon-info"
            icon-color="red"
            title="删除该员工吗？"
            @confirm="delte(scope.row.id)">
            <el-button
              slot="reference"
              icon="el-icon-delete-solid"
              circle
              style="color: red"
            ></el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!--    添加模态框-->
    <el-dialog title="员工信息添加" :visible.sync="insertDialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <!--          下拉框-->
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="form.role_id" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="insertDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="insert">确 定</el-button>
      </div>
    </el-dialog>

    <!--    编辑模态框-->
    <el-dialog title="员工信息编辑" :visible.sync="editDialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <!--          下拉框-->
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="form.role" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </div>
    </el-dialog>

    <!--分页-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[6, 12, 18, 24]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum">
    </el-pagination>

  </div>
</template>

<script>
  export default {
    name: "Staff",
    data() {
      return {
        //角色下拉框
        options: [],
        value: '',

        // 表格数据
        tableData: [],
        search: '',

        currentPage: 1,

        editDialogFormVisible: false,
        insertDialogFormVisible: false,
        form: {
          id: '',
          name: '',
          account: '',
          password: '',
          role_id: ''
        },
        formLabelWidth: '120px',
        pageIndex: 1,//当前第几页
        totalNum: 1,//总共的条数
        pageSize: 6,//每页几条
      }
    },
    methods: {
      getData() {  //获取数据
        var _this = this

        var params = new URLSearchParams();
        params.append('page', _this.pageIndex);
        params.append('rows', _this.pageSize);

        this.$axios.post("Staff/query.action", params).then(function (result) {  //成功  执行then里面的方法
          _this.tableData = result.data.rows;
          var totalNum = result.data.total;
          _this.totalNum = totalNum;
          var pageTotal = totalNum % 6 == 0 ? totalNum / 6 : Math.floor(totalNum / 6) + 1;
          _this.pageTotal = pageTotal;
        }).catch(function () { //失败 执行catch方法

        });

        this.$axios.post("Role/queryAll.action").then(function (result) {  //成功  执行then里面的方法
          _this.options = result.data;
        }).catch(function () { //失败 执行catch方法

        });
      },
      delete(id) {
        var delteid = id + ",";
        var _this = this;
        var params = new URLSearchParams();
        params.append("ids", delteid);
        this.$axios.post("Staff/delete.action", params).then(function (result) {  //成功  执行then里面的方法
          _this.$message({
            message: result.data,
            type: 'success'
          });
          _this.getData();  //删除操作做完，刷新数据
        }).catch(function (error) { //失败 执行catch方法
          alert(error);
        });
        //将pageindex归为1
        this.pageindex = 1;
      },
      editm(id) {
        this.editDialogFormVisible = true;
        this.form.id = id;
        //将数据显示
      },
      edit() {
        var _this = this;
        var params = new URLSearchParams();
        params.append('id', _this.form.id);
        params.append('name', _this.form.name);
        params.append('account', _this.form.account);
        params.append('password', _this.form.password);
        params.append('role_id', _this.form.role_id);
        //执行编辑操作
        this.$axios.post("Staff/update.action", params).then(function (result) {
          _this.$message({
            message: result.data,
            type: 'success'
          });
          _this.getData();  //修改操作做完，刷新数据
          _this.form = {id: '', name: '', account: '', password: '', role_id: '',};//清空表单中的数据
        }).catch(function (error) {
          alert(error);
        })
        //关闭编辑模态框
        this.editDialogFormVisible = false;
      },
      insert() {
        var _this = this;
        var params = new URLSearchParams();
        params.append('name', _this.form.name);
        params.append('account', _this.form.account);
        params.append('password', _this.form.password);
        params.append('role_id', _this.form.role_id);
        this.$axios.post('Staff/insert.action', params).then(function (result) {
          _this.$message({
            message: result.data,
            type: 'success'
          });
          _this.getData();  //修改操作做完，刷新数据
          _this.form = {id: '', name: '', account: '', password: '', role_id: '',};//清空表单中的数据
        }).catch(function (error) {
          alert(error);
        });
        this.insertDialogFormVisible = false;//隐藏添加模态框
      },

// 页头
      goBack() {
        console.log('go back');
      },
//分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.getData();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.pageIndex = val;
        this.getData();
      },
//表格
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    created() {
      this.getData();
    },
  }
</script>
