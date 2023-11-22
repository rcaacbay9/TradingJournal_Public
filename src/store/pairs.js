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
                //reset
                this.chartData.labels = [];
                this.chartData.datasets[0].data = [];
                this.chartData.datasets[0].backgroundColor = [];
                //get
                pairData.forEach((pair) => {
                    this.chartData.labels.push(pair.label.toString())
                    this.chartData.datasets[0].data.push(pair.count)

                    const color = this.generateColor(pair.label.toString());
                    this.chartData.datasets[0].backgroundColor.push(color);
                });
            }).catch(errors => {
                this.error = errors.data
            })
        },
        generateColor(label) {
            let hash = 0;
            for (let i = 0; i < label.length; i++) {
                hash = label.charCodeAt(i) + ((hash << 5) - hash);
            }
    
            const color = '#' + ((hash & 0xFFFFFF).toString(16)).toUpperCase();
            return color;
        },
    },
})