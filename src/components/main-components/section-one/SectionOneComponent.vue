<template>
  <div class="section">
    <TitleGraphComponent v-bind:option="titleData" />
    <div class="wrapper-content">
      <LineChartGenerator
          :chart-options="chartOptions"
          :chart-data="chartData"
          :chart-id="chartId"
          :dataset-id-key="datasetIdKey"
          :plugins="plugins"
          :css-classes="cssClasses"
          :styles="styles"
          :width="width"
          :height="height"
      />
    </div>

  </div>

</template>

<script>
import TitleGraphComponent from "@/components/main-components/TitleGraphComponent";
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)

export default {
  name: 'LineChart',
  components: {
    LineChartGenerator,
    TitleGraphComponent
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 500
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => [ ]
    }
  },
  data() {
    return {
      titleData: {
        title:'Hi Filip,',
        subTitle: 'Checkout your latest projects and their progress',
        timeline: false
      },
      chartData: {
        labels: [
          '30.05',
          '30.05',
          '30.05',
          '30.05',
          '30.05',
          '30.05',
          '30.05',
          '30.05',
          '30.05',
          '30.05',
          '30.05',
        ],

        datasets: [
          {
            label: "1",
            backgroundColor: '#e9448d',
            data: [40, 50, 35, 49, 35, 49, 30, 49, 35, 49, 30]
          },
          {
            label: 'Data One',
            backgroundColor: '#d7a9df',
            data: [50, 40, 56, 37, 50, 21, 60, 35, 50, 39, 27]
          },
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'sfsdfsdf',
        }
      }
    }
  }
}
</script>

<style scoped>
  .section{
    margin-bottom: 60px;
  }
  .wrapper-content{
    background-color: #fff;
  }
</style>
