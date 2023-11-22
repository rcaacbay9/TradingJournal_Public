import { defineStore } from "pinia"
import axios from "axios"
export const usePerformanceStore = defineStore('performance', {

    state: () => {
        return {
            errors: {},
            chartData: {
                labels: [],
                datasets: [
                    {   
                        label: ['Data'],
                        data: [],
                        backgroundColor: ['#77CEFF'],
                        borderColor: "#77CEFF",
                    },
                ],
            },
        }
    },

    getters: {
        getPeformance: (state) => state.chartData
    },

    actions: {
        async getPerformanceData() {
            await axios.get('http://127.0.0.1:8000/api/getPerformanceData').then((result) => {
                const data = result.data
                //reset
                this.chartData.labels = []
                this.chartData.datasets[0].data = []
                data.forEach(perf => {
                    this.chartData.labels.push(perf.x)
                    this.chartData.datasets[0].data.push(perf)
                });

            }).catch((err) => {
                this.errors = err
            });
        }
    }

});
