<template>
  <div id="app" class="homeWrap">
    <el-container style="height:100%" direction="vertical">
<!--      导航栏开始-->
      <el-header height="100px" >

      </el-header>
<!--      导航栏结束-->
      <el-container>
        <el-aside>
          <el-row class="tac" >
            <el-col :span="12" style="width: 100%;height: 100%;">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                        <!-- 菜单组件中使用路由配置方式
                  在el-main中通过router-view展示子组件
                  -->
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>资料管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1" @click="addTab('用户列表','userlist')">用户列表</el-menu-item>
                    <el-menu-item index="1-2" @click="addTab('部门列表','deptlist')">部门列表</el-menu-item>
                    <el-menu-item index="1-3" @click="addTab('员工列表','stafflist')">员工管理</el-menu-item>
                    <el-menu-item index="1-4" @click="addTab('仓库列表','warehouselist')">仓库列表</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">待发货</el-menu-item>
                    <el-menu-item index="1-2">待收货</el-menu-item>
                    <el-menu-item index="1-3">代付款</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>

          <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
              v-for="(item, index) in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              <component :is="item.content"></component>
            </el-tab-pane>
          </el-tabs>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import MenuVue from '../components/menu.vue';
  import Userlist from "../components/userlist";
  import Deptlist from "../components/deptlist";
  import Stafflist from "../components/stafflist";
  import Warehouselist from "../components/warehouse";

    export default {
        components:{
          menuvue:MenuVue,
          userlist:Userlist,
          deptlist:Deptlist,
          stafflist:Stafflist,
          warehouselist:Warehouselist,
        },
      data(){
          return {
            editableTabsValue: '1',
            editableTabs: [],
            tabIndex: 0
          }
      },

      methods: {
        addTab(titleName,comval) {


          var res =this.editableTabs.filter((item)=>{return  item.title ==titleName});
          if(res.length==0){
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
              title: titleName,
              name: newTabName,
              content: comval
            });
            this.editableTabsValue = newTabName;
          }else{
            this.editableTabsValue =res[0].name;
          }

        },
        removeTab(targetName) {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  .homeWrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>
