<template>
  <div class="card Border bg-white shadow-lg p-6">
    关于页面
  </div>
</template>

<script lang="ts" setup name="About">
import { reactive } from 'vue';

let tabInfo = reactive({
  activeTab: 0,
  switch(index: number) {
    this.activeTab = index;
  }
});

</script>

<style scoped></style>