
import { Line, mixins } from 'vue-chartjs'
export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['charData', 'options'],
  mounted() {
    this.renderChart(this.charData, this.options)
  }
}
