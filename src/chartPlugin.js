import { Chart, registerables } from 'chart.js';
import 'vue-chart-3';

Chart.register(...registerables);

export default {
  install(app) {
    app.config.globalProperties.$Chart = Chart;
  },
};