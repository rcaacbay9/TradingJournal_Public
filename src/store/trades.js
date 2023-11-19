import { defineStore } from "pinia"
import axios from 'axios'

export const useTradesStore = defineStore("trades", {
    state: () => {
        return {
            trades: [],
            errors: {},
            isShowModal: false
        }
    },
    getters: {
        getTradesData() {
            return this.trades;
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