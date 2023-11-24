import { defineStore } from "pinia"
import { usePairStore } from '../store/pairs';
import { useWinrateStore } from '../store/winrate';
import { usePerformanceStore } from '../store/performance';
import axios from 'axios'
import { ref } from "vue";

export const useTradesStore = defineStore("trades", {
    state: () => {
        return {
            trades: [],
            editTrades: ref({}),
            errors: {},
            modals: {},
        }
    },
    getters: {
        getTradesData: (state) => {
            return state.trades
        },
        editTradeData: (state) => {
            return state.editTrades
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
        async addTrades(data) {
            axios.post('http://127.0.0.1:8000/api/createTrade', data).then(result => {
                this.trades = result.data.message
                this.closeModal('addTrades')
                this.getJournalData()

                const pairStore = usePairStore();
                const performanceStore = usePerformanceStore();
                const winrateStore = useWinrateStore();

                pairStore.getPairData();
                performanceStore.getPerformanceData();
                winrateStore.getWinrateData();
            }).catch(error => {
                this.errors = error.response.data.message
                this.showModal()
            });
        },
        editTradesData(id) {
            axios.get('http://127.0.0.1:8000/api/getTrade/' + id).then(result => {
                this.editTrades = result.data[0]
            }).catch(error => {
                this.errors = error.response.data.message
            })
        },
        saveEditData(data, id) {
            ;
            axios.put('http://127.0.0.1:8000/api/getTrade/edit/' + id, data).then(result => {
                alert('Data has been')
                this.editTrades = {};
                this.closeModal('editTrade')
                this.getJournalData()
            }).catch(error => {
                this.errors = error.response.data.message
            })
        },
        deleteTradeData(id) {
            axios.delete('http://127.0.0.1:8000/api/getTrade/delete/' + id).then(result => {
                alert(result.data.message)
                this.getJournalData()
            }).catch(error => {
                console.log(error)
            })
        },
        closeModal(modalID) {
            this.errors = {};
            this.modals[modalID] = false
        },

        showModal(modalID) {
            this.modals[modalID] = true
        }
    },
})