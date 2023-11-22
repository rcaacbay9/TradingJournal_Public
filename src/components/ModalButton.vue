<template>
    <fwb-button color="green" @click.prevent="openModal('addTrade')">Add Trades</fwb-button>
    <fwb-modal v-if="tradeStore.modals.addTrade" @close="closeModal('addTrade')">
        <template #header>
            <div class="flex items-center text-2xl font-bold">
                Journal Your Trade
            </div>
        </template>
        <template #body>
            <div class="grid grid-cols-2 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-input v-model="trades.pairs" label="Pair" placeholder="EUR/USD" size="sm" class="uppercase" />
                    <p v-if="tradeStore.errors.pairs" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.pairs[0] }} </p>
                </div>
                <div class="text-base leading-relaxed dark:text-gray-400 ml-3">
                    <label for="date" class="text-base leading-relaxed Uppercase font-medium rounded-full">Date</label>
                    <VueDatePicker v-model="trades.time_executed" :is-24="false" required>
                    </VueDatePicker>
                    <p v-if="tradeStore.errors.time_executed" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.time_executed[0] }} </p>
                </div>
            </div>
            <div class="grid grid-cols-2 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-select v-model="trades.session" :options="session" label="SESSION" />
                    <p v-if="tradeStore.errors.session" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.session[0] }} </p>
                </div>
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400 ml-3">
                    <fwb-select v-model="trades.result" :options="result" label="SESSION" />
                    <p v-if="tradeStore.errors.result" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.result[0] }} </p>
                </div>
            </div>
            <div class="grid grid-cols-2 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-select v-model="trades.position" :options="position" label="SESSION" />
                    <p v-if="tradeStore.errors.position" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.position[0] }} </p>
                </div>
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400 ml-3">
                    <fwb-input v-model="trades.risk_reward" label="Risk Reward" placeholder="1:3 rr" size="sm"
                        class="uppercase" />
                    <p v-if="tradeStore.errors.risk_reward" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.risk_reward[0] }} </p>
                </div>
            </div>
            <div class="grid grid-cols-1 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-textarea v-model="trades.comment" :rows="2" label="Confluences" placeholder="Write you message..."
                        maxlength="2" />
                </div>
            </div>
        </template>
        <template #footer>
            <div class="flex justify-between">
                <fwb-button @click="closeModal('addTrade')" color="red">
                    Exit
                </fwb-button>
                <fwb-button @click.prevent="handleSubmit" color="green">
                    Journal Trade
                </fwb-button>
            </div>
        </template>
    </fwb-modal>
</template>

<script>
import { ref } from 'vue'
import { FwbButton, FwbModal, FwbTextarea, FwbInput, FwbSelect } from 'flowbite-vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { useTradesStore } from '../store/trades';

export default {
    components: {
        FwbButton,
        FwbModal,
        FwbInput,
        FwbTextarea,
        VueDatePicker,
        FwbSelect
    },
    setup() {
        const tradeStore = useTradesStore()
        const trades = ref({
            pairs: '',
            time_executed: '',
            session: '',
            position: '',
            result: '',
            risk_reward: '',
            comment: '',
        })
        const handleSubmit = () => {
            tradeStore.addTrades(trades.value)
            trades.value = {
                pairs: '',
                time_executed: '',
                session: '',
                position: '',
                result: '',
                risk_reward: '',
                comment: '',
            }
        }
        return { trades, handleSubmit, tradeStore }
    },
    data() {
        return {
            tradeStore: useTradesStore(),
            session: [
                { value: 'LONDON', name: 'London', },
                { value: 'NY', name: 'New York', },
                { value: 'Asia', name: 'Asia', },
            ],
            result: [
                { value: 'WIN', name: 'Win', },
                { value: 'LOSE', name: 'Lose', },
            ],
            position: [
                { value: 'LONG', name: 'Long', },
                { value: 'SHORT', name: 'Short', },
            ],
        }
    },
    methods: {
        openModal(modalId) {
            this.tradeStore.showModal(modalId);
        },
        closeModal(modalId) {
            this.tradeStore.closeModal(modalId);
        }
    },
}
</script>

<style></style>