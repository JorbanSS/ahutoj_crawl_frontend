<template>
  <div class="grid grid-cols-2 gap-6">
    <div class="card Border bg-white shadow-lg pt-4 pr-2 h-fit">
      <div id="problemRatingDistribution_chart"></div>
    </div>
    <div class="card Border bg-white shadow-lg p-6 h-fit">

    </div>
  </div>
</template>

<script lang="ts" setup name="Main">
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { push } from 'notivue';
import ApexCharts from 'apexcharts';

import { _addUser, _bindAccount } from '@/api/user';
import { Validator } from '@/utils/globalFunctions';
import { chartDefaultConfig, ratingToColorMap } from '@/config';
import { _getCodeforcesStatistics } from '@/api/codeforces';
import { CodeforcesStatisticsType } from '@/interfaces/codeforces';
import { MapNumberNumber, MapStringNumber } from '@/interfaces/common';

const route = useRoute();
const router = useRouter();

let codeforcesUser = reactive<CodeforcesStatisticsType>({
  CodeforcesID: '',
  rating: new Array<MapNumberNumber>(),
  language: new Array<MapStringNumber>(),
  tags: new Array<MapStringNumber>(),
  verdict: new Array<MapStringNumber>(),
  problemIndex: new Array<MapStringNumber>(),
  teamMates: '',
  submission: {
    tried: 0,
    solved: 0,
    unsolved: '',
    averageAttempts: 0,
    firstAttemptPassedCount: 0,
  },
  contest: {
    maxUp: 0,
    maxDown: 0,
    bestRank: 0,
    worstRank: 0,
    contestCount: 0,
    virtualParticipationCount: 0,
  },

  get() {
    _getCodeforcesStatistics({}, this.CodeforcesID)
      .then((data: any) => {
        this.rating = data.rating;
        this.language = data.language;
        this.tags = data.tags;
        this.verdict = data.verdict;
        this.problemIndex = data.problemIndex;
        this.teamMates = data.teamMates;
        this.submission = {
          tried: data.tried,
          solved: data.solved,
          unsolved: data.unsolved,
          averageAttempts: data.averageAttempts,
          firstAttemptPassedCount: data.firstAttemptPassedCount,
        }
        this.contest = {
          maxUp: data.maxUp,
          maxDown: data.maxDown,
          bestRank: data.bestRank,
          worstRank: data.worstRank,
          contestCount: data.contestCount,
          virtualParticipationCount: data.virtualParticipationCount,
        }
        let problemRatingDistribution: any = []
        Object.entries(this.rating).forEach((item) => {
          problemRatingDistribution.push({
            x: item[0],
            y: Number(item[1]),
            fillColor: ratingToColorMap.get(Number(item[0])),
          });
        });
        problemRatingDistribution_chartOptions.series[0].data = problemRatingDistribution;
        let problemRatingDistribution_chart = new ApexCharts(document.querySelector("#problemRatingDistribution_chart"), problemRatingDistribution_chartOptions);
        problemRatingDistribution_chart.render();
      })
  },
});

let problemRatingDistribution_chartOptions = reactive({
  chart: {
    type: 'bar',
    toolbar: chartDefaultConfig.toolbar,
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

onMounted(() => {
  codeforcesUser.CodeforcesID = route.params.CFID as string;
  codeforcesUser.get();
});

</script>