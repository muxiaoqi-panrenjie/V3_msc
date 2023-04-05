<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" v-model="currentTab" stretch="true">
      <el-tab-pane name="account">
        <template #label>
          <span style="width: 50%; display: inline-block"
            ><i class="el-icon-user-solid"></i> 账号登录</span
          >
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";
const currentTab = ref("account");
const isKeepPassword = ref(false);
const handleLoginClick = () => {
  console.log();
};
</script>

<style scoped lang="less">
.account {
  width: 300px;
}
.phone {
  width: 300px;
}
.login-panel {
  margin-bottom: 150px;
  width: 420px;
  height: 300px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
