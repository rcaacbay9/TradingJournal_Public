import { defineStore } from "pinia";
import axios from "axios";

export const useWinrateStore = defineStore('winrate', {
    state: () => {
        return {
            winrate: 0,
            loserate: 0,
            totalTrades: 0,
            chartData: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: [],
                    }
                ]
            }, 
        }
    },
    getters: {
        getWinrate: (state) => {
            state.chartData = Object.assign({}, state.chartData, {
                labels: ['Win', 'Lose'],
                datasets: [
                  {
                    data: [state.winrate, state.loserate],
                    backgroundColor: ['#3cb371', '#ff0000']
                  },
                ],
              });
            return state.chartData
        }
    },
    actions: {
        async getWinrateData() {
            await axios.get('http://127.0.0.1:8000/api/getWinrate').then(results => {
                this.winrate = results.data.Winrate
                this.loserate = results.data.Loserate
                this.totalTrades = results.data.Total_Trades
            }).catch(error => {
                console.log(error)
            })
        },
    },
});