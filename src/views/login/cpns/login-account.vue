<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { rules } from "../config";
import { useStore } from "vuex";
import localCache from "@/utils/cache";
import { ElForm } from "element-plus";

let account = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
});

const formRef = ref<InstanceType<typeof ElForm>>();

const store = useStore();

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 判断是否是需要记住密码
      if (isKeepPassword) {
        // 本地缓存
        localCache.setCache("name", account.name);
        localCache.setCache("password", account.password);
      } else {
        localCache.deleteCache("name");
        localCache.deleteCache("password");
      }
      // 开始进行登录验证
      store.dispatch("login/accountLoginAction", { ...account });
    }
  });
};
</script>
<style scoped></style>
