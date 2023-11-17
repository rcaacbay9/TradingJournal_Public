<template>
    <fwb-button color="green" @click.prevent="showModal">Add Trades</fwb-button>
    <fwb-modal v-if="isShowModal" @close="closeModal">
        <template #header>
            <div class="flex items-center text-2xl font-bold">
                Journal Your Trade
            </div>
        </template>
        <template #body>
            <div class="grid grid-cols-2 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-input v-if="errors.pairs" v-model="trades.pairs" label="Pair" placeholder="EUR/USD" size="sm"
                        class="uppercase" required validation-status="error">
                        <template #validationMessage>
                            <div class="lowercase font-bold">
                                {{ errors.pairs[0] }}
                            </div>
                        </template></fwb-input>
                    <fwb-input v-else v-model="trades.pairs" label="Pair" placeholder="EUR/USD" size="sm" class="uppercase"
                        required validation-status="success" />
                </div>
                <div class="text-base leading-relaxed dark:text-gray-400 ml-3">
                    <label for="date" class="text-base leading-relaxed Uppercase font-medium rounded-full">Date</label>
                    <VueDatePicker v-if="errors.time_executed" v-model="trades.time_executed" :state="false" :is-24="false"
                        required></VueDatePicker>
                    <VueDatePicker v-else v-model="trades.time_executed" :is-24="false" required>
                    </VueDatePicker>
                </div>
            </div>
            <div class="grid grid-cols-2 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-input v-if="errors.session" v-model="trades.session" label="Session" placeholder="NY" size="sm"
                        class="uppercase" required validation-status="error">
                        <template #validationMessage>
                            <div class="lowercase font-bold">
                                {{ errors.session[0] }}
                            </div>
                        </template> </fwb-input>
                    <fwb-input v-else v-model="trades.session" label="Session" placeholder="NY" size="sm" class="uppercase"
                        required validation-status="success" />
                </div>
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400 ml-3">
                    <fwb-input v-if="errors.result" v-model="trades.result" label="Status" placeholder="WIN/LOSE" size="sm"
                        class="uppercase" required validation-status="error">
                        <template #validationMessage>
                            <div class="lowercase font-bold">
                                {{ errors.result[0] }}
                            </div>
                        </template> </fwb-input>
                    <fwb-input v-else v-model="trades.result" label="Status" placeholder="WIN/LOSE" size="sm"
                        class="uppercase" required validation-status="success" />
                </div>
            </div>
            <div class="grid grid-cols-2 p-2">
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <fwb-input v-if="errors.position" v-model="trades.position" label="Position" placeholder="LONG/SHORT"
                        size="sm" class="uppercase" required validation-status="error">
                        <template #validationMessage>
                            <div class="lowercase font-bold">
                                {{ errors.position[0] }}
                            </div>
                        </template> </fwb-input>
                    <fwb-input v-else v-model="trades.position" label="Position" placeholder="LONG/SHORT" size="sm"
                        class="uppercase" required validation-status="success" />
                </div>
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400 ml-3">
                    <fwb-input v-if="errors.risk_reward" v-model="trades.risk_reward" label="Risk Reward"
                        placeholder="1:3 rr" size="sm" class="uppercase" required validation-status="error">
                        <template #validationMessage>
                            <div class="lowercase font-bold">
                                {{ errors.risk_reward[0] }}
                            </div>
                        </template> </fwb-input>
                    <fwb-input v-else v-model="trades.risk_reward" label="Risk Reward" placeholder="1:3 rr" size="sm"
                        class="uppercase" required validation-status="success" />
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
                <fwb-button @click="closeModal" color="red">
                    Exit
                </fwb-button>
                <fwb-button @click.prevent="createTrade" color="green">
                    Journal Trade
                </fwb-button>
            </div>
        </template>
    </fwb-modal>
</template>

<script>
import { FwbButton, FwbModal, FwbTextarea, FwbInput } from 'flowbite-vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios';

export default {
    components: {
        FwbButton,
        FwbModal,
        FwbInput,
        FwbTextarea,
        VueDatePicker
    },

    data() {
        return {
            isShowModal: false,
            errors: {},
            date: new Date(),
            trades: {
                pairs: '',
                time_executed: '',
                session: '',
                position: '',
                result: '',
                risk_reward: '',
                comment: '',
            },
        }
    },
    methods: {
        createTrade() {
            axios.post('http://127.0.0.1:8000/api/createTrade', this.trades).then(result => {
                this.validation = false
                this.trades = result.data.message
                this.isShowModal = false
            }).catch(error => {
                this.errors = error.response.data.message
                console.log(this.errors)
            });
        },

        closeModal() {
            this.isShowModal = false
            this.error = {};
        },

        showModal() {
            this.isShowModal = true

        }
    }

}
</script>

<style></style>