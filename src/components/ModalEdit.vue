<template>
    <fwb-modal v-if="tradeStore.modals.editTrade" @close="closeModal('editTrade')">
        <template #header>
            <div class="flex items-center text-2xl font-bold">
                Edit Trade
            </div>
        </template>
        <template #body>
            <div class="grid grid-cols-2 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-input v-model="tradeStore.editTrades.pairs" label="Pair" placeholder="EUR/USD" size="sm"
                        class="uppercase" />
                    <p v-if="tradeStore.errors.pairs" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.pairs[0] }} </p>
                </div>
                <div class="text-base leading-relaxed dark:text-gray-400 ml-3">
                    <label for="date" class="text-base leading-relaxed Uppercase font-medium rounded-full">Date</label>
                    <VueDatePicker v-model="tradeStore.editTrades.time_executed" :is-24="false" required>
                    </VueDatePicker>
                    <p v-if="tradeStore.errors.time_executed" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.time_executed[0] }} </p>
                </div>
            </div>
            <div class="grid grid-cols-2 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-select v-model="tradeStore.editTrades.session" :options="session" label="SESSION" />
                    <p v-if="tradeStore.errors.session" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.session[0] }} </p>
                </div>
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400 ml-3">
                    <fwb-select v-model="tradeStore.editTrades.result" :options="result" label="SESSION" />
                    <p v-if="tradeStore.errors.result" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.result[0] }} </p>
                </div>
            </div>
            <div class="grid grid-cols-2 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-select v-model="tradeStore.editTrades.position" :options="position" label="SESSION" />
                    <p v-if="tradeStore.errors.position" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.position[0] }} </p>
                </div>
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400 ml-3">
                    <fwb-input v-model="tradeStore.editTrades.risk_reward" label="Risk Reward" placeholder="1:3 rr"
                        size="sm" class="uppercase" />
                    <p v-if="tradeStore.errors.risk_reward" class="text-red-500 font-bold text-sm mt-1 ml-1"> {{
                        tradeStore.errors.risk_reward[0] }} </p>
                </div>
            </div>
            <div class="grid grid-cols-1 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-textarea v-model="tradeStore.editTrades.comment" :rows="2" label="Confluences"
                        placeholder="Write you message..." maxlength="2" />
                </div>
            </div>
        </template>
        <template #footer>
            <div class="flex justify-between">
                <fwb-button @click="closeModal('editTrade')" color="red">
                    Exit
                </fwb-button>
                <fwb-button @click.prevent="saveEdit" color="green">
                    Edit Trade
                </fwb-button>
            </div>
        </template>
    </fwb-modal>
</template>

<script>
import { useTradesStore } from '../store/trades'
import VueDatePicker from '@vuepic/vue-datepicker';
import { FwbButton, FwbModal, FwbTextarea, FwbInput, FwbSelect } from 'flowbite-vue'
export default {
    components: {
        FwbButton,
        FwbModal,
        FwbInput,
        FwbTextarea,
        FwbSelect,
        VueDatePicker
    },
    setup() {
        const tradeStore = useTradesStore()

        const saveEdit = () => {
            const data = tradeStore.editTrades
            const id = tradeStore.editTrades.id
            tradeStore.saveEditData(data, id)
        }
        return { saveEdit, tradeStore }
    },
    data() {
        return {
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
        closeModal(modalID) {
            useTradesStore().closeModal(modalID)
        }
    }
}
</script>

<style></style>