<template>
  <div class="navbar bg-white">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <NavigationBarTabs />
        </ul>
      </div>
      <RouterLink :to="{ name: 'RecentContests' }">
        <a class="btn btn-ghost text-xl">
          AHUT OJ
          <div class="badge badge-neutral">爬虫专项</div>
        </a>
      </RouterLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-base font-bold font-sans">
        <NavigationBarTabs />
      </ul>
    </div>
    <div class="navbar-end">
      <label class="swap swap-rotate pr-4">
        <input type="checkbox" />
        <SunOne theme="outline" size="24" class="swap-off fill-current" />
        <moon theme="outline" size="22" class="swap-on fill-current" />
      </label>
      <!-- <div>
        <div class="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" role="button" class="btn">
            <div class="badge badge-neutral" v-if="userDataStore.PermissionMap > 3">OP</div>
            {{ userDataStore.UserName }}
          </div>
          <ul tabindex="0" class="dropdown-content z-[1] menu shadow bg-white rounded-box w-36 Border font-bold">
            <li><a @click="router.push(`/user/${userDataStore.UID}`)">
                <people theme="outline" size="18" />
                个人中心
              </a></li>
            <li v-if="userDataStore.PermissionMap > 3"><a @click="router.replace('/admin')">
                <setting-config theme="outline" size="18" />
                管理平台
              </a></li>
            <li><a @click="props.logout">
                <logout theme="outline" size="18" />
                退出登录
              </a></li>
          </ul>
        </div>
      </div> -->
      <a class="btn">登录</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import { Logout, Moon, People, SettingConfig, SunOne } from '@icon-park/vue-next';
import NavigationBarTabs from './NavBarChildren/NavigationBarTabs.vue';

const router = useRouter();

</script>