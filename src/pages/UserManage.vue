<template>
  <div class="grid grid-cols-2 gap-6">
    <div class="card Border bg-white shadow-lg p-6 h-fit">
      <div class="space-y-4">
        <label class="input input-bordered flex items-center gap-2">
          UID
          <input type="text" class="grow" placeholder="" v-model="registerInfo.UID" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          姓名
          <input type="text" class="grow" placeholder="" v-model="registerInfo.UserName" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          入学年份
          <input type="text" class="grow" placeholder="" v-model="registerInfo.Year" />
        </label>
        <button class="btn btn-neutral w-full" @click="registerInfo.register">添加用户</button>
      </div>
    </div>
    <div class="card Border bg-white shadow-lg p-6 h-fit">
      <div class="space-y-4">
        <label class="input input-bordered flex items-center gap-2">
          UID
          <input type="text" class="grow" placeholder="" v-model="bindInfo.UID" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          Codeforces ID
          <input type="text" class="grow" placeholder="" v-model="bindInfo.CodeforcesID" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          Nowcoder ID
          <input type="text" class="grow" placeholder="" v-model="bindInfo.NowcoderID" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          Atcoder ID
          <input type="text" class="grow" placeholder="" v-model="bindInfo.AtcoderID" />
        </label>
        <button class="btn btn-neutral w-full">绑定账户</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Main">
import { onMounted, reactive, ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import { push } from 'notivue';

import { Validator } from '@/utils/globalFunctions';
import { User } from '@icon-park/vue-next';
import { _addUser } from '@/apis/user';

const route = useRoute();

let registerInfo = reactive({
  UID: '',
  UserName: '',
  Year: '',

  register() {
    if (registerInfo.UID == '' || registerInfo.UserName == '' || registerInfo.Year == '') {
      push.warning({
        title: '数据错误',
        message: '未填写完整信息',
      })
      return;
    }
    if (Validator.UID(registerInfo.UID) == false) {
      push.warning({
        title: '数据错误',
        message: '用户 UID 格式错误，正确格式为：学校首字母大写+学号，例：AHUT229074001',
      });
      return;
    }
    if (Validator.UserName(registerInfo.UserName) == false) {
      push.warning({
        title: '数据错误',
        message: '请填写真实姓名',
      });
      return;
    }
    if (Validator.Year(registerInfo.Year) == false) {
      push.warning({
        title: '数据错误',
        message: '入学年份格式错误，参考格式为：2022',
      });
      return;
    }

    let params = {
      UID: registerInfo.UID,
      UserName: registerInfo.UserName,
      Year: registerInfo.Year,
    };
    _addUser(params)
      .then(() => {
        push.success({
          title: '添加成功',
          message: `已添加用户 ${registerInfo.UserName}`,
        })
      })
  },
})

let bindInfo = reactive({
  UID: '',
  CodeforcesID: '',
  NowcoderID: '',
  AtcoderID: '',

  bind() {

  },
})

onMounted(() => {

});

</script>