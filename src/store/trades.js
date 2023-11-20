import { defineStore } from "pinia"
import axios from 'axios'

export const useTradesStore = defineStore("trades", {
    state: () => {
        return {
            trades: [],
            winrate: 0,
            loserate: 0,
            chartData: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: ['#3cb371', '#ff0000'],
                    }
                ]
            }, 
            errors: {},
            isShowModal: false
        }
    },
    getters: {
        getTradesData: (state) => {
            return state.trades
        },
        getWinrate: (state) => {
            state.chartData = Object.assign({}, state.chartData, {
                labels: ['Win', 'Lose'],
                datasets: [
                  {
                    data: [state.winrate, state.loserate],
                    backgroundColor: ['#3cb371', '#ff0000'],
                  },
                ],
              });
            return state.chartData
        }
    },
    actions: {
        async getJournalData() {
            await axios.get('http://127.0.0.1:8000/api/getTrades').then(result => {
                this.trades = result.data[0]
            }).catch(error => {
                console.log(error)
            })
        },
        async getWinrateData() {
            await axios.get('http://127.0.0.1:8000/api/getWinrate').then(results => {
                this.winrate = results.data.Winrate
                this.loserate = results.data.Loserate
            }).catch(error => {
                console.log(error)
            })
        },
        async addTrades(data) {
            axios.post('http://127.0.0.1:8000/api/createTrade', data).then(result => {
                this.trades = result.data.message
                this.getJournalData()
                this.getWinrateData()
                this.closeModal()
            }).catch(error => {
                this.errors = error.response.data.message
                this.showModal()
            });
        },
        closeModal() {
            this.isShowModal = false
            this.error = {};
        },

        showModal() {
            this.isShowModal = true
        }
    },
})