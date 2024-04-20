<template>
  <div class="card Border bg-white shadow-lg p-6">
    评分排行榜
  </div>
</template>

<script lang="ts" setup name="Main">
import { onMounted, reactive, ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import { push } from 'notivue';

const route = useRoute();

onMounted(() => {

});

</script>