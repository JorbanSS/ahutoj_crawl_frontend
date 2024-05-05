<template>
  <div id="chart_problemRating"></div>
</template>

<script lang="ts" setup name="Main">
import { reactive, watch } from 'vue';

import ApexCharts from 'apexcharts';

import { chartDefaultConfig, ratingToColorMap } from '@/config';
import { MapNumberNumber } from '@/interfaces/common';

interface propsType {
  problemRating: MapNumberNumber;
};

let props = withDefaults(defineProps<propsType>(), {
  problemRating: () => ({}),
});

let chartOptions = reactive({
  title: {
    text: '题目难度',
    align: 'center',
  },
  chart: {
    type: 'bar',
    toolbar: chartDefaultConfig.toolbar,
    height: 320,
  },
  legend: {
    show: false,
  },
  plotOptions: {
    bar: {
      distributed: true,
      dataLabels: {
        position: 'top',
      },
    },
  },
  colors: ['#061020'],
  series: [
    {
      name: '数量',
      data: []
    }
  ],
});

watch(() => props.problemRating, (newVal) => {
  let problemRatingDistribution: any = []
  Object.entries(newVal).forEach((item) => {
    problemRatingDistribution.push({
      x: item[0],
      y: Number(item[1]),
      fillColor: ratingToColorMap.get(Number(item[0])),
    });
  });
  chartOptions.series[0].data = problemRatingDistribution;
  let chart = new ApexCharts(document.querySelector("#chart_problemRating"), chartOptions);
  chart.render();
})

</script>