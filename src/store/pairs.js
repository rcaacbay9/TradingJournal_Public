import { defineStore } from "pinia";
import axios from "axios";

export const usePairStore = defineStore('pairs', {
    state: () => {
        return {
            data: [],
            error: {},
            chartData: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: [],
                    },
                ],
            },
        colorMapping: {},
        }
    },
    getters: {
        getPair: (state) => state.chartData,
    },

    actions: {
        async getPairData() {
            await axios.get('http://127.0.0.1:8000/api/getPairData').then(results => {
                const pairData = results.data
                pairData.forEach((pair) => {
                    this.chartData.labels.push(pair.label)
                    this.chartData.datasets[0].data.push(pair.count)
                })
            }).catch(errors => {
                this.error = errors.data
            })
        }
    },
    getColorForLabel(label) {
        const hashCode = (str) => {
          let hash = 0;
          for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
          }
          return hash;
        };
  
        const color = `#${(hashCode(label) & 0x00ffffff).toString(16).toUpperCase()}`;
        return color;
      },
})